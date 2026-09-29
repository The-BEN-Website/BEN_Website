import React from "react";
import { Link } from "react-router-dom";
import { IoPlay } from "react-icons/io5";
import RemoteImage from "../../components/ui/RemoteImage";
import { youtubeThumbnail } from "../../lib/youtube";

export const videoDateFormat = new Intl.DateTimeFormat(undefined, {
  day: "numeric",
  month: "short",
  year: "numeric",
});

function VideoCard({ id, title, category, youtube_video_id: videoId, published_at: publishedAt }) {
  const meta = [category, videoDateFormat.format(new Date(publishedAt))].filter(Boolean).join(" · ");

  return (
    <li>
      <Link
        to={`/media/videos/${id}`}
        className="group block rounded-[20px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      >
        <div className="relative aspect-video overflow-hidden rounded-[20px] bg-placeholder">
          <RemoteImage
            src={youtubeThumbnail(videoId)}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-media-blue shadow-md">
              <IoPlay aria-hidden="true" size={22} className="ml-0.5" />
            </span>
          </span>
        </div>
        <h2 className="mt-3 line-clamp-2 text-body font-medium text-black group-hover:text-primary">
          {title}
        </h2>
        <p className="mt-1 truncate text-sm font-medium text-subtitle">{meta}</p>
      </Link>
    </li>
  );
}

export default VideoCard;
