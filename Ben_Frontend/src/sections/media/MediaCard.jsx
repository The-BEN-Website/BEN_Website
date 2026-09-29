import React from "react";
import { Link } from "react-router-dom";

// Hub tile: a tinted preview with a large faded icon, then the label row.
// On phones only the label row shows, so the four options fit on one screen.
function MediaCard({ to, label, description, Icon, tone }) {
  return (
    <li>
      <Link
        to={to}
        className="group block overflow-hidden rounded-[20px] border border-media-line bg-white transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <div className={`hidden p-9 sm:block ${tone.soft}`}>
          <div className="flex aspect-[300/166] items-center justify-center rounded-[10px] bg-white">
            <Icon
              aria-hidden="true"
              size={48}
              className={`${tone.text} opacity-60 transition-transform group-hover:scale-110`}
            />
          </div>
        </div>

        <div className="flex items-center gap-3 p-5">
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] ${tone.soft} ${tone.text}`}
          >
            <Icon aria-hidden="true" size={20} />
          </span>
          <div className="min-w-0">
            <h2 className="text-body font-medium text-black">{label}</h2>
            <p className="text-sm font-medium leading-[27px] text-subtitle">{description}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default MediaCard;
