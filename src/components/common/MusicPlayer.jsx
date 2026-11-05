
import { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

import invitationConfig from "../../config/invitationConfig";

function MusicPlayer() {
  const audioRef = useRef(null);
  const timerRef = useRef(null);
  const activeRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);

  // Playback timing in seconds
  const START_TIME = 61;
  const PLAY_DURATION = 160;
  const REPEAT_INTERVAL = 1;

  const stopPlayback = () => {
    activeRef.current = false;
    clearTimeout(timerRef.current);

    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const playSegment = async () => {
    const audio = audioRef.current;

    if (!audio || !activeRef.current) return;

    try {
      if (audio.readyState < 1) {
        await new Promise((resolve, reject) => {
          audio.addEventListener("loadedmetadata", resolve, { once: true });
          audio.addEventListener("error", reject, { once: true });
          audio.load();
        });
      }

      if (!activeRef.current) return;

      // Start at the selected position
      audio.currentTime = START_TIME;

      await audio.play();

      if (!activeRef.current) {
        audio.pause();
        return;
      }

      setIsPlaying(true);

      clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        audio.pause();
        setIsPlaying(false);

        if (activeRef.current) {
          timerRef.current = setTimeout(
            playSegment,
            Math.max(0, REPEAT_INTERVAL) * 1000
          );
        }
      }, PLAY_DURATION * 1000);

    } catch (error) {
      console.error("Music playback failed:", error);
      setIsPlaying(false);
    }
  };

  const handleToggle = () => {
    if (activeRef.current) {
      stopPlayback();
    } else {
      activeRef.current = true;
      clearTimeout(timerRef.current);
      playSegment();
    }
  };

  useEffect(() => {
    activeRef.current = true;

    // Attempt automatic playback on opening
    playSegment();

    return () => {
      activeRef.current = false;
      clearTimeout(timerRef.current);
      audioRef.current?.pause();
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src={invitationConfig.music.source}
        preload="auto"
      />

      <button
        className="music-player-button"
        onClick={handleToggle}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Volume2 /> : <VolumeX />}

        <span>{isPlaying ? "Music On" : "Play Music"}</span>

        <Music size={17} />
      </button>
    </>
  );
}

export default MusicPlayer;
