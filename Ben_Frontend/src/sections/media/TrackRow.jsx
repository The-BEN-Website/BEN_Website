import React from "react";
import { IoDownloadOutline, IoMusicalNote, IoPause, IoPlay } from "react-icons/io5";
import { songDownloadUrl } from "../../api/songs";

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const rest = Math.floor(seconds % 60);
  return `${minutes}:${String(rest).padStart(2, "0")}`;
}

function SongRow({ song, active, playing, currentTime, duration, onToggle, onSeek }) {
  const knownDuration = active ? duration : song.duration_seconds;

  return (
    <li
      className={`rounded-[20px] border bg-white p-4 transition-colors sm:p-5 ${
        active ? "border-media-pink/40" : "border-media-line"
      }`}
    >
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-media-pink-soft text-media-pink">
          <IoMusicalNote aria-hidden="true" size={22} />
        </span>

        <div className="min-w-0 flex-1">
          <h2 className="truncate text-body font-medium text-black">{song.title}</h2>
          <p className="truncate text-sm font-medium text-subtitle">
            {song.singer}
            {Number.isFinite(knownDuration) && ` · ${formatTime(knownDuration)}`}
          </p>
        </div>

        <a
          href={songDownloadUrl(song)}
          download
          aria-label={`Download ${song.title}`}
          title="Download"
          className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full text-icon transition-colors hover:bg-surface hover:text-black sm:flex"
        >
          <IoDownloadOutline size={22} />
        </a>
        <button
          type="button"
          onClick={onToggle}
          aria-label={`${playing ? "Pause" : "Play"} ${song.title}`}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {playing ? <IoPause size={20} /> : <IoPlay size={20} className="ml-0.5" />}
        </button>
      </div>

      {active && (
        <div className="mt-4 flex items-center gap-3 text-xs font-medium tabular-nums text-subtitle">
          <span>{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={Number.isFinite(duration) ? duration : 0}
            step={1}
            value={currentTime}
            onChange={(event) => onSeek(Number(event.target.value))}
            aria-label={`Seek ${song.title}`}
            className="h-1 flex-1 cursor-pointer accent-primary"
          />
          <span>{formatTime(duration)}</span>
          <a
            href={songDownloadUrl(song)}
            download
            aria-label={`Download ${song.title}`}
            className="flex h-8 w-8 items-center justify-center rounded-full text-icon hover:text-black sm:hidden"
          >
            <IoDownloadOutline size={18} />
          </a>
        </div>
      )}
    </li>
  );
}

export default SongRow;
