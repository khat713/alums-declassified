const VOICE_ID = 'nPczCjzI2devNBz1zQrb';

function fallbackSpeak(text: string): void {
  if (typeof window === 'undefined') return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.92;
  utterance.pitch = 1.1;
  utterance.volume = 1;
  window.speechSynthesis.speak(utterance);
}

export async function speakText(text: string): Promise<void> {
  if (typeof window === 'undefined') return;

  const cleanText = text
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

  const apiKey = process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY;

  if (!apiKey) {
    console.warn('No ElevenLabs API key — using Web Speech API fallback');
    fallbackSpeak(cleanText);
    return;
  }

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
      }
    );

    if (!response.ok) {
      throw new Error(`ElevenLabs API error: ${response.status} ${response.statusText}`);
    }

    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);

    audio.onerror = () => {
      URL.revokeObjectURL(audioUrl);
      fallbackSpeak(cleanText);
    };

    return new Promise((resolve) => {
      audio.onended = () => {
        URL.revokeObjectURL(audioUrl);
        resolve();
      };
      audio.play().catch(() => {
        URL.revokeObjectURL(audioUrl);
        fallbackSpeak(cleanText);
        resolve();
      });
    });
  } catch (error) {
    console.error('ElevenLabs error, falling back to Web Speech API:', error);
    fallbackSpeak(cleanText);
  }
}
