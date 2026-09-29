import { useEffect, useRef, useState } from "react";

// Drives a list of tracks through a single <audio> element, so only one track
// plays at a time and the next one starts when the current one ends.
// Spread `audioProps` onto the page's <audio> element. If a track fails to load
// (bad connection, missing file), `failedIndex` marks it; playing it again retries.
function useAudioPlaylist(tracks) {
  const audioRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(NaN);
  const [failedIndex, setFailedIndex] = useState(null);

  const current = currentIndex !== null ? tracks?.[currentIndex] : null;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !current) return;
    audio.src = current.audio_url;
    setCurrentTime(0);
    setDuration(NaN);
    audio.play().catch(() => setPlaying(false));
  }, [current]);

  const toggle = (index) => {
    const audio = audioRef.current;
    if (index === failedIndex) {
      setFailedIndex(null);
      if (index === currentIndex) {
        audio.load();
        audio.play().catch(() => setPlaying(false));
        return;
      }
    }
    if (index !== currentIndex) {
      setCurrentIndex(index);
      return;
    }
    if (audio.paused) audio.play().catch(() => setPlaying(false));
    else audio.pause();
  };

  const seek = (seconds) => {
    audioRef.current.currentTime = seconds;
    setCurrentTime(seconds);
  };

  const audioProps = {
    ref: audioRef,
    preload: "none",
    onPlay: () => setPlaying(true),
    onPause: () => setPlaying(false),
    onTimeUpdate: (event) => setCurrentTime(event.currentTarget.currentTime),
    onLoadedMetadata: (event) => setDuration(event.currentTarget.duration),
    onError: () => {
      setPlaying(false);
      setFailedIndex(currentIndex);
    },
    onPlaying: () => setFailedIndex(null),
    onEnded: () => {
      if (currentIndex !== null && currentIndex < tracks.length - 1) setCurrentIndex(currentIndex + 1);
    },
  };

  return { currentIndex, failedIndex, playing, currentTime, duration, toggle, seek, audioProps };
}

export default useAudioPlaylist;
