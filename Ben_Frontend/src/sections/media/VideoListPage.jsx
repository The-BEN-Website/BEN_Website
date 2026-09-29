import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import SubpageHeader from "../../sections/media/SubpageHeader";
import VideoCard from "../../sections/media/VideoCard";
import Socials from "../../sections/shared/Socials";
import { listVideos, VIDEO_TYPES } from "../../api/videos";

const PAGE_SIZE = 24;
const SEARCH_DEBOUNCE_MS = 300;
const DEFAULT_TYPE = "sermons";

function TypeTabs({ value, onChange }) {
  return (
    <div role="tablist" aria-label="Video type" className="inline-flex rounded-full bg-surface p-1">
      {Object.entries(VIDEO_TYPES).map(([key, { label }]) => {
        const selected = key === value;
        return (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(key)}
            className={`rounded-full px-5 py-2 text-base font-medium transition-colors ${
              selected ? "bg-white text-black shadow-sm" : "text-secondary hover:text-black"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

function Videos() {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = VIDEO_TYPES[searchParams.get("type")] ? searchParams.get("type") : DEFAULT_TYPE;

  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [videos, setVideos] = useState([]);
  const [status, setStatus] = useState("loading");
  const [hasMore, setHasMore] = useState(false);

  // Only query once typing pauses.
  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchInput.trim()), SEARCH_DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [searchInput]);

  const loadPage = useCallback(
    async (before) => {
      setStatus(before ? "loading-more" : "loading");
      try {
        const page = await listVideos({ type, search, before, limit: PAGE_SIZE });
        setVideos((current) => (before ? [...current, ...page] : page));
        setHasMore(page.length === PAGE_SIZE);
        setStatus("success");
      } catch {
        setStatus("error");
      }
    },
    [type, search],
  );

  useEffect(() => {
    setVideos([]);
    loadPage();
  }, [loadPage]);

  const changeType = (next) => setSearchParams(next === DEFAULT_TYPE ? {} : { type: next });
  const loadMore = () => loadPage(videos[videos.length - 1].published_at);

  return (
    <main>
      <Container className="py-10 md:py-14">
        <SubpageHeader title="Videos" />

        <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
          <TypeTabs value={type} onChange={changeType} />
          <label className="relative block sm:w-72">
            <span className="sr-only">Search videos</span>
            <IoSearch
              aria-hidden="true"
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-subtitle"
            />
            <input
              type="search"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              placeholder="Search by title"
              className="w-full rounded-full border border-input-line bg-white py-2.5 pl-11 pr-4 text-base text-black placeholder:text-input-hint focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </label>
        </div>

        {status === "error" && videos.length === 0 && (
          <p className="mt-10 text-center text-body text-secondary">
            We couldn&apos;t load videos right now. Please try again later.
          </p>
        )}
        {status === "success" && videos.length === 0 && (
          <p className="mt-10 text-center text-body text-secondary">
            {search ? `No videos match "${search}".` : "No videos here yet. Check back soon."}
          </p>
        )}

        <ul
          aria-busy={status === "loading"}
          className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {status === "loading" &&
            Array.from({ length: 6 }, (_, i) => (
              <li key={i} aria-hidden="true">
                <div className="aspect-video animate-pulse rounded-[20px] bg-placeholder" />
                <div className="mt-3 h-5 w-4/5 animate-pulse rounded bg-placeholder" />
                <div className="mt-2 h-4 w-1/2 animate-pulse rounded bg-placeholder" />
              </li>
            ))}
          {status !== "loading" && videos.map((video) => <VideoCard key={video.id} {...video} />)}
        </ul>

        {hasMore && status !== "loading" && (
          <div className="mt-10 flex justify-center">
            <Button variant="secondary" onClick={loadMore} disabled={status === "loading-more"}>
              {status === "loading-more" ? "Loading..." : "Load more"}
            </Button>
          </div>
        )}
        {status === "error" && videos.length > 0 && (
          <p role="alert" className="mt-6 text-center text-sm text-primary">
            Couldn&apos;t load more videos. Please try again.
          </p>
        )}
      </Container>

      <Socials />
    </main>
  );
}

export default Videos;
