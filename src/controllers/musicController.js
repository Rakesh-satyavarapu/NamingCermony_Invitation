export const createMusicController = (audio) => {

  const play = async () => {
    if (!audio) return false;

    try {
      await audio.play();
      return true;
    } catch (error) {
      console.error("Unable to play music:", error);
      return false;
    }
  };

  const pause = () => {
    if (!audio) return;
    audio.pause();
  };

  const toggle = async () => {
    if (!audio) return false;

    if (audio.paused) {
      return await play();
    }

    pause();
    return false;
  };

  return { play, pause, toggle };
};