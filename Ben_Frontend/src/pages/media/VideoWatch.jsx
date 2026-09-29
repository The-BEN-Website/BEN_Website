import React from "react";
import { useParams } from "react-router-dom";
import { IoLogoYoutube } from "react-icons/io5";
import Container from "../../components/ui/Container";
import SubpageHeader from "../../sections/media/SubpageHeader";
import VideoCard, { videoDateFormat } from "../../sections/media/VideoCard";
import Socials from "../../sections/shared/Socials";
import useAsync from "../../hooks/useAsync";
import { getVideo, listVideos, VIDEO_TYPES, videoTypeOf } from "../../api/videos";
import { youtubeEmbed, youtubeWatch } from "../../lib/youtube";

const MORE_COUNT = 3;

// Loads the video and a few more of the same kind (excluding itself).
async function loadWatchPage(id) {
  const video = await getVideo(id);
  if (!video) return { video: null, more: [] };
  const recent = await listVideos({ type: videoTypeOf(video), limit: MORE_COUNT + 1 });
  return { video, more: recent.filter((item) => item.id !== id).slice(0, MORE_COUNT) };
}

function VideoWatch() {
  const { id } = useParams();
  const { status, data } = useAsync(() => loadWatchPage(id), [id]);
  const video = data?.video;
  const section = VIDEO_TYPES[video ? videoTypeOf(video) : "sermons"];

  return (
    <main>
      <Container className="py-10 md:py-14">
        <SubpageHeader title={section.title} backTo={section.path} />

        {status === "loading" && (
          <div aria-busy="true" className="mx-auto mt-8 max-w-5xl">
            <div className="aspect-video animate-pulse rounded-[20px] bg-placeholder" />
            <div className="mt-6 h-8 w-2/3 animate-pulse rounded bg-placeholder" />
          </div>
        )}
        {(status === "error" || (status === "success" && !video)) && (
          <p className="mt-10 text-center text-body text-secondary">
            {status === "error"
              ? "We couldn't load this video right now. Please try again later."
              : "This video isn't available."}
          </p>
        )}

        {video && (
          <article className="mx-auto mt-8 max-w-5xl">
            <div className="aspect-video overflow-hidden rounded-[20px] bg-black">
              <iframe
                src={youtubeEmbed(video.youtube_video_id)}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <h2 className="text-2xl font-semibold leading-tight text-black md:text-3xl">
                  {video.title}
                </h2>
                <p className="mt-2 text-base font-medium text-subtitle">
                  {[video.category, videoDateFormat.format(new Date(video.published_at))]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
              </div>
              <a
                href={youtubeWatch(video.youtube_video_id)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-[10px] border border-line-strong px-3 py-2 text-base font-medium text-black transition-colors hover:bg-surface"
              >
                <IoLogoYoutube aria-hidden="true" size={20} className="text-[#FF0000]" />
                Watch on YouTube
              </a>
            </div>

            {video.description && (
              <p className="mt-6 whitespace-pre-line text-body text-secondary">{video.description}</p>
            )}
          </article>
        )}

        {data?.more.length > 0 && (
          <section aria-labelledby="more-videos-heading" className="mx-auto mt-16 max-w-5xl">
            <h2 id="more-videos-heading" className="text-2xl font-semibold text-black">
              More {section.title.toLowerCase()}
            </h2>
            <ul className="mt-6 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {data.more.map((item) => (
                <VideoCard key={item.id} {...item} />
              ))}
            </ul>
          </section>
        )}
      </Container>

      <Socials />
    </main>
  );
}

export default VideoWatch;
