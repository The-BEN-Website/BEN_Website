import React from "react";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import LiveDot from "../components/ui/LiveDot";
import ErrorState from "../components/ui/ErrorState";
import useAsync from "../hooks/useAsync";
import { getLiveStreamStatus } from "../api/liveStream";
import {
  APP_STORE_URL,
  PLAY_STORE_URL,
  YOUTUBE_CHANNEL_URL,
  YOUTUBE_STREAMS_URL,
} from "../config/links";
import usePageMeta from "../hooks/usePageMeta";

// /live is also the app's universal link, so phones with the app installed
// open it there; everyone else lands on this page.

const nextServiceFormat = new Intl.DateTimeFormat(undefined, {
  weekday: "long",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
});

function LiveNow({ title, youtubeVideoId, meetingUrl }) {
  return (
    <>
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="inline-flex items-center gap-2 rounded-[10px] border border-line bg-white px-2.5 py-1 text-body font-medium text-primary shadow-glow">
            <LiveDot pulsing />
            Live now
          </p>
          <h1 className="mt-4 text-heading font-semibold text-black">{title || "Live Service"}</h1>
        </div>
        {meetingUrl && <Button href={meetingUrl}>Join the Google Meet</Button>}
      </div>

      <div className="mt-8 aspect-video overflow-hidden rounded-3xl bg-black">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}`}
          title={title || "Live service"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    </>
  );
}

function NotLive({ nextServiceAt }) {
  const next = nextServiceAt ? new Date(nextServiceAt) : null;
  const hasUpcoming = next && next > new Date();
  const message = hasUpcoming
    ? `Our next service starts ${nextServiceFormat.format(next)}.`
    : "Join us during our service times, or catch up on past services on YouTube.";

  return (
    <div className="mx-auto max-w-xl py-8 text-center md:py-16">
      <h1 className="text-heading font-semibold text-black">We&apos;re not live right now</h1>
      <p className="mt-6 text-body font-medium text-secondary">{message}</p>
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        <Button href={YOUTUBE_STREAMS_URL}>Watch Past Services</Button>
        <Button href={YOUTUBE_CHANNEL_URL} variant="secondary">
          Visit our YouTube
        </Button>
      </div>
    </div>
  );
}

function LiveSkeleton() {
  return (
    <div aria-busy="true" aria-label="Checking live stream">
      <div className="h-10 w-2/3 max-w-md animate-pulse rounded-lg bg-placeholder" />
      <div className="mt-8 aspect-video animate-pulse rounded-3xl bg-placeholder" />
    </div>
  );
}

const storeLink = "font-medium text-primary hover:underline";

function Live() {
  usePageMeta({
    title: "Watch Live",
    description: "Watch Believers Equipping Network services live online, or catch up on past services.",
  });
  const { status, data, error, reload } = useAsync(getLiveStreamStatus);
  const isLive = status === "success" && data?.is_live && data.youtube_video_id;

  return (
    <Container as="main" className="py-12 md:py-20">
      {status === "loading" && <LiveSkeleton />}
      {isLive && (
        <LiveNow
          title={data.title}
          youtubeVideoId={data.youtube_video_id}
          meetingUrl={data.meeting_url}
        />
      )}
      {status === "success" && !isLive && <NotLive nextServiceAt={data?.next_service_at} />}
      {status === "error" && (
        <>
          <ErrorState title="We couldn't check the live stream" error={error} onRetry={reload} />
          <p className="-mt-8 text-center text-base text-secondary">
            If a service is on, you can also watch it on{" "}
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary hover:underline"
            >
              our YouTube channel
            </a>
            .
          </p>
        </>
      )}

      <p className="mt-16 text-center text-base text-secondary">
        Prefer the app? Get it on the{" "}
        <a href={APP_STORE_URL} target="_blank" rel="noreferrer" className={storeLink}>
          App Store
        </a>{" "}
        or{" "}
        <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer" className={storeLink}>
          Google Play
        </a>
        .
      </p>
    </Container>
  );
}

export default Live;
