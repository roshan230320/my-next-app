let audio: HTMLAudioElement | null = null;

export function getAudio() {
  if (!audio) {
    audio = new Audio("/music/piano.mp3");

    audio.loop = true;

    audio.volume = 0.35;
  }

  return audio;
}

export async function playMusic() {
  try {
    const player = getAudio();

    await player.play();

    sessionStorage.setItem("musicPlaying", "true");
  } catch (err) {
    console.error(err);
  }
}

export function pauseMusic() {
  const player = getAudio();

  player.pause();

  sessionStorage.removeItem("musicPlaying");
}