import React from "react";
import Container from "../../components/ui/Container";
import SubpageHeader from "./SubpageHeader";
import TrackRow from "./TrackRow";
import Socials from "../shared/Socials";
import useAsync from "../../hooks/useAsync";
import useAudioPlaylist from "../../hooks/useAudioPlaylist";
import { storageDownloadUrl } from "../../lib/storage";

// Shared page for audio lists (Songs, Audio teachings): loads the tracks, then
// plays them through one player. `describe(track)` returns the row's subtitle.
function TrackListPage({ title, load, describe, Icon, tone, emptyMessage, errorMessage }) {
  const { status, data: tracks } = useAsync(load);
  const { currentIndex, playing, currentTime, duration, toggle, seek, audioProps } =
    useAudioPlaylist(tracks);

  return (
    <main>
      <Container className="py-10 md:py-14">
        <SubpageHeader title={title} />

        {status === "error" && (
          <p className="mt-10 text-center text-body text-secondary">{errorMessage}</p>
        )}
        {status === "success" && tracks.length === 0 && (
          <p className="mx-auto mt-10 max-w-md text-center text-body text-secondary">
            {emptyMessage}
          </p>
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
            tracks.map((track, index) => {
              const active = index === currentIndex;
              return (
                <TrackRow
                  key={track.id}
                  title={track.title}
                  subtitle={describe(track)}
                  storedDuration={track.duration_seconds}
                  downloadUrl={storageDownloadUrl(track.audio_url, track.title)}
                  Icon={Icon}
                  tone={tone}
                  active={active}
                  playing={active && playing}
                  currentTime={active ? currentTime : 0}
                  duration={active ? duration : NaN}
                  onToggle={() => toggle(index)}
                  onSeek={seek}
                />
              );
            })}
        </ul>

        <audio {...audioProps} />
      </Container>

      <Socials />
    </main>
  );
}

export default TrackListPage;
