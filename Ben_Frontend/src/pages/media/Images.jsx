import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/ui/Container";
import ErrorState from "../../components/ui/ErrorState";
import RemoteImage from "../../components/ui/RemoteImage";
import SubpageHeader from "../../sections/media/SubpageHeader";
import Socials from "../../sections/shared/Socials";
import useAsync from "../../hooks/useAsync";
import { albumSlug, listGalleryAlbums, UNCATEGORIZED_TITLE } from "../../api/gallery";
import { cloudinaryResize } from "../../lib/cloudinary";
import usePageMeta from "../../hooks/usePageMeta";

const cardClass = "relative block aspect-[397/309] overflow-hidden rounded-[20px] bg-placeholder";

function AlbumCard({ category, cover, count }) {
  const title = category ?? UNCATEGORIZED_TITLE;

  return (
    <li>
      <Link
        to={`/media/images/${albumSlug(category)}`}
        aria-label={`${title}, ${count} photos`}
        className={`${cardClass} group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}
      >
        <RemoteImage
          src={cloudinaryResize(cover, { width: 800, height: 624 })}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute inset-x-0 bottom-[14%] truncate bg-primary px-4 text-center text-xl font-medium leading-[30px] text-white">
          {title}
        </span>
      </Link>
    </li>
  );
}

function Images() {
  usePageMeta({
    title: "Photos",
    description: "Photo albums from Believers Equipping Network services and events.",
  });
  const { status, data: albums, error, reload } = useAsync(listGalleryAlbums);

  return (
    <main>
      <Container className="py-10 md:py-14">
        <SubpageHeader title="Images" />

        {status === "error" && (
          <ErrorState title="We couldn't load the photo albums" error={error} onRetry={reload} />
        )}
        {status === "success" && albums.length === 0 && (
          <p className="mt-10 text-center text-body text-secondary">No photos yet. Check back soon.</p>
        )}

        <ul
          aria-busy={status === "loading"}
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {status === "loading" &&
            Array.from({ length: 6 }, (_, i) => (
              <li key={i} aria-hidden="true" className={`${cardClass} animate-pulse`} />
            ))}
          {status === "success" &&
            albums.map((album) => <AlbumCard key={album.category ?? "uncategorized"} {...album} />)}
        </ul>
      </Container>

      <Socials />
    </main>
  );
}

export default Images;
