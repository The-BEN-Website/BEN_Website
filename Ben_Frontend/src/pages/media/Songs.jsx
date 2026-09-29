import React, { useEffect, useRef, useState } from "react";
import Container from "../../components/ui/Container";
import SubpageHeader from "../../sections/media/SubpageHeader";
import SongRow from "../../sections/media/SongRow";
import Socials from "../../sections/shared/Socials";
import useAsync from "../../hooks/useAsync";
import { listSongs } from "../../api/songs";

// One <audio> element drives the whole list, so only one song plays at a time.
// When a song ends, the next one in the list starts.
function Songs() {
  const { status, data: songs } = useAsync(listSongs);
  const audioRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(NaN);

  const current = currentIndex !== null ? songs?.[currentIndex] : null;

  // Load and start a newly selected song.
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

  const playNext = () => {
    if (currentIndex !== null && currentIndex < songs.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <main>
      <Container className="py-10 md:py-14">
        <SubpageHeader title="Songs" />

        {status === "error" && (
          <p className="mt-10 text-center text-body text-secondary">
            We couldn&apos;t load the songs right now. Please try again later.
          </p>
        )}
        {status === "success" && songs.length === 0 && (
          <p className="mt-10 text-center text-body text-secondary">No songs yet. Check back soon.</p>
        )}

        <ul aria-busy={status === "loading"} className="mx-auto mt-8 flex max-w-3xl flex-col gap-3">
          {status === "loading" &&
            Array.from({ length: 4 }, (_, i) => (
              <li
                key={i}
                aria-hidden="true"
                className="h-[82px] animate-pulse rounded-[20px] bg-placeholder"
              />
            ))}
          {status === "success" &&
            songs.map((song, index) => (
              <SongRow
                key={song.id}
                song={song}
                active={index === currentIndex}
                playing={index === currentIndex && playing}
                currentTime={index === currentIndex ? currentTime : 0}
                duration={index === currentIndex ? duration : NaN}
                onToggle={() => toggle(index)}
                onSeek={seek}
              />
            ))}
        </ul>

        <audio
          ref={audioRef}
          preload="none"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
          onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
          onEnded={playNext}
        />
      </Container>

      <Socials />
    </main>
  );
}

export default Songs;
