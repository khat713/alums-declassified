const VOICE_ID = 'CwhRBWXzGAHq8TQ4Fs17'; // Roger

let activeAudio: HTMLAudioElement | null = null;
let activeAbort: AbortController | null = null;
let muted = false;

// Pre-fetched blob URLs keyed by text so playback starts immediately.
const audioCache = new Map<string, string>();
const pendingFetches = new Map<string, Promise<string | null>>();

export function setMuted(val: boolean): void {
  muted = val;
  if (val) pauseSpeaking();
}

export function stopSpeaking(): void {
  if (activeAbort) { activeAbort.abort(); activeAbort = null; }
  if (activeAudio) { activeAudio.pause(); activeAudio.src = ''; activeAudio = null; }
  if (typeof window !== 'undefined') window.speechSynthesis?.cancel();
}

/** Pause without discarding the audio element — use for mute. */
export function pauseSpeaking(): void {
  if (activeAudio) activeAudio.pause();
  if (typeof window !== 'undefined') window.speechSynthesis?.pause();
}

/** Resume from where it was paused — use for unmute. */
export function resumeSpeaking(): void {
  if (muted) return;
  if (activeAudio) {
    activeAudio.play().catch(() => {});
  } else if (typeof window !== 'undefined') {
    window.speechSynthesis?.resume();
  }
}

export function clearPreloadCache(): void {
  for (const url of audioCache.values()) URL.revokeObjectURL(url);
  audioCache.clear();
  pendingFetches.clear();
}

function cleanEmoji(text: string): string {
  return text
    .replace(/[\u{1F300}-\u{1F9FF}]/gu, '')
    .replace(/[\u{2600}-\u{26FF}]/gu, '')
    .replace(/[\u{2700}-\u{27BF}]/gu, '')
    .replace(/[\u{1F000}-\u{1F02F}]/gu, '')
    .replace(/[\u{1F0A0}-\u{1F0FF}]/gu, '')
    .replace(/[\u{1F100}-\u{1F1FF}]/gu, '')
    .replace(/[\u{1F200}-\u{1F2FF}]/gu, '')
    .replace(/[\u{1FA00}-\u{1FA6F}]/gu, '')
    .replace(/[\u{1FA70}-\u{1FAFF}]/gu, '')
    .replace(/[\u{FE00}-\u{FE0F}]/gu, '')
    .replace(/[\u{20D0}-\u{20FF}]/gu, '')
    .trim();
}

function fallbackSpeak(text: string): void {
  if (typeof window === 'undefined' || muted) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.92;
  utterance.pitch = 1.1;
  utterance.volume = 1;
  window.speechSynthesis.speak(utterance);
}

async function fetchAudioUrl(cleanText: string): Promise<string | null> {
  const apiKey = process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY;
  if (!apiKey) return null;

  const abort = new AbortController();
  try {
    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}/stream`,
      {
        method: 'POST',
        headers: {
          'xi-api-key': apiKey,
          'Content-Type': 'application/json',
          'Accept': 'audio/mpeg',
        },
        body: JSON.stringify({
          text: cleanText,
          model_id: 'eleven_multilingual_v2',
          voice_settings: {
            stability: 0.35,
            similarity_boost: 0.90,
            style: 0.45,
            use_speaker_boost: true,
          },
        }),
        signal: abort.signal,
      }
    );
    if (!response.ok) throw new Error(`ElevenLabs API error: ${response.status}`);
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error: any) {
    if (error?.name !== 'AbortError') console.error('ElevenLabs preload error:', error);
    return null;
  }
}

/** Pre-fetch all lines in background so playback is instant. */
export function preloadLines(lines: string[]): void {
  if (typeof window === 'undefined') return;
  const apiKey = process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY;
  if (!apiKey) return;

  for (const line of lines) {
    const clean = cleanEmoji(line);
    if (audioCache.has(clean) || pendingFetches.has(clean)) continue;
    const promise = fetchAudioUrl(clean).then(url => {
      pendingFetches.delete(clean);
      if (url) audioCache.set(clean, url);
      return url;
    });
    pendingFetches.set(clean, promise);
  }
}

export async function speakText(text: string): Promise<void> {
  if (typeof window === 'undefined' || muted) return;

  stopSpeaking();
  if (muted) return;

  const cleanText = cleanEmoji(text);
  const apiKey = process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY;

  if (!apiKey) {
    console.warn('No ElevenLabs API key — using Web Speech API fallback');
    fallbackSpeak(cleanText);
    return;
  }

  // If already cached, play immediately.
  if (audioCache.has(cleanText)) {
    const url = audioCache.get(cleanText)!;
    const audio = new Audio(url);
    activeAudio = audio;
    audio.onerror = () => { activeAudio = null; };
    return new Promise((resolve) => {
      audio.onended = () => { activeAudio = null; resolve(); };
      audio.play().catch(() => {
        activeAudio = null;
        if (!muted) fallbackSpeak(cleanText);
        resolve();
      });
    });
  }

  // If a fetch is already in flight for this text, wait for it then play.
  if (pendingFetches.has(cleanText)) {
    const url = await pendingFetches.get(cleanText);
    if (muted) return;
    if (url) {
      const audio = new Audio(url);
      activeAudio = audio;
      audio.onerror = () => { activeAudio = null; };
      return new Promise((resolve) => {
        audio.onended = () => { activeAudio = null; resolve(); };
        audio.play().catch(() => {
          activeAudio = null;
          if (!muted) fallbackSpeak(cleanText);
          resolve();
        });
      });
    }
    if (!muted) fallbackSpeak(cleanText);
    return;
  }

  // Fresh fetch (fallback for lines not preloaded).
  const abort = new AbortController();
  activeAbort = abort;
  try {
    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}/stream`,
      {
        method: 'POST',
        headers: {
          'xi-api-key': apiKey,
          'Content-Type': 'application/json',
          'Accept': 'audio/mpeg',
        },
        body: JSON.stringify({
          text: cleanText,
          model_id: 'eleven_multilingual_v2',
          voice_settings: {
            stability: 0.35,
            similarity_boost: 0.90,
            style: 0.45,
            use_speaker_boost: true,
          },
        }),
        signal: abort.signal,
      }
    );
    if (muted || abort.signal.aborted) return;
    if (!response.ok) throw new Error(`ElevenLabs API error: ${response.status}`);
    const audioBlob = await response.blob();
    if (muted || abort.signal.aborted) return;
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    activeAudio = audio;
    activeAbort = null;
    audio.onerror = () => { URL.revokeObjectURL(audioUrl); activeAudio = null; };
    return new Promise((resolve) => {
      audio.onended = () => { URL.revokeObjectURL(audioUrl); activeAudio = null; resolve(); };
      audio.play().catch(() => {
        URL.revokeObjectURL(audioUrl);
        activeAudio = null;
        if (!muted) fallbackSpeak(cleanText);
        resolve();
      });
    });
  } catch (error: any) {
    activeAbort = null;
    if (error?.name === 'AbortError') return;
    console.error('ElevenLabs error, falling back to Web Speech API:', error);
    if (!muted) fallbackSpeak(cleanText);
  }
}
