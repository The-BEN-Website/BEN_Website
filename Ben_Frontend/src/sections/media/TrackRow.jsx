import React from "react";
import { IoDownloadOutline, IoPause, IoPlay } from "react-icons/io5";
import { isOffline } from "../../lib/errors";

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const rest = Math.floor(seconds % 60);
  return `${minutes}:${String(rest).padStart(2, "0")}`;
}

// One playable row in a track list. The active row expands with a seek bar.
// `tone` supplies the icon square colours ({ soft, text, border } class names).
function TrackRow({
  title,
  subtitle,
  storedDuration,
  downloadUrl,
  Icon,
  tone,
  active,
  playing,
  failed,
  currentTime,
  duration,
  onToggle,
  onSeek,
}) {
  const knownDuration = active && Number.isFinite(duration) ? duration : storedDuration;
  const downloadLink = (className, size) => (
    <a
      href={downloadUrl}
      download
      aria-label={`Download ${title}`}
      title="Download"
      className={className}
    >
      <IoDownloadOutline size={size} />
    </a>
  );

  return (
    <li
      className={`rounded-[20px] border bg-white p-4 transition-colors sm:p-5 ${
        active ? tone.border : "border-media-line"
      }`}
    >
      <div className="flex items-center gap-4">
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] ${tone.soft} ${tone.text}`}
        >
          <Icon aria-hidden="true" size={22} />
        </span>

        <div className="min-w-0 flex-1">
          <h2 className="truncate text-body font-medium text-black">{title}</h2>
          <p className="truncate text-sm font-medium text-subtitle">
            {subtitle}
            {Number.isFinite(knownDuration) && ` · ${formatTime(knownDuration)}`}
          </p>
        </div>

        {downloadLink(
          "hidden h-10 w-10 shrink-0 items-center justify-center rounded-full text-icon transition-colors hover:bg-surface hover:text-black sm:flex",
          22,
        )}
        <button
          type="button"
          onClick={onToggle}
          aria-label={`${playing ? "Pause" : "Play"} ${title}`}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {playing ? <IoPause size={20} /> : <IoPlay size={20} className="ml-0.5" />}
        </button>
      </div>

      {failed && (
        <p role="alert" className="mt-3 text-sm text-primary">
          {isOffline()
            ? "You're offline, so this can't play right now. Reconnect and press play to try again."
            : "This track couldn't be played. Press play to try again."}
        </p>
      )}

      {active && !failed && (
        <div className="mt-4 flex items-center gap-3 text-xs font-medium tabular-nums text-subtitle">
          <span>{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={Number.isFinite(duration) ? duration : 0}
            step={1}
            value={currentTime}
            onChange={(event) => onSeek(Number(event.target.value))}
            aria-label={`Seek ${title}`}
            className="h-1 flex-1 cursor-pointer accent-primary"
          />
          <span>{formatTime(duration)}</span>
          {downloadLink(
            "flex h-8 w-8 items-center justify-center rounded-full text-icon hover:text-black sm:hidden",
            18,
          )}
        </div>
      )}
    </li>
  );
}

export default TrackRow;
