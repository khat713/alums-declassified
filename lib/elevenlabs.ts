export async function speakText(text: string): Promise<void> {
  try {
    const response = await fetch('/api/speak', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      console.warn('Speech API error, falling back to Web Speech API');
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.92;
      utterance.pitch = 1.1;
      utterance.volume = 1;
      window.speechSynthesis.speak(utterance);
      return;
    }

    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    await audio.play();

    return new Promise((resolve) => {
      audio.onended = () => {
        URL.revokeObjectURL(audioUrl);
        resolve();
      };
    });
  } catch (error) {
    console.error('Speech error, falling back to Web Speech API:', error);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.92;
    utterance.pitch = 1.1;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
  }
}
