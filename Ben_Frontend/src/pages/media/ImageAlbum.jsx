import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/ui/Container";
import ErrorState from "../../components/ui/ErrorState";
import LoadMore from "../../components/ui/LoadMore";
import RemoteImage from "../../components/ui/RemoteImage";
import Lightbox from "../../sections/media/Lightbox";
import SubpageHeader from "../../sections/media/SubpageHeader";
import Socials from "../../sections/shared/Socials";
import usePaginatedList from "../../hooks/usePaginatedList";
import { categoryFromSlug, listGalleryImages, UNCATEGORIZED_TITLE } from "../../api/gallery";
import { cloudinaryResize } from "../../lib/cloudinary";
import usePageMeta from "../../hooks/usePageMeta";

const PAGE_SIZE = 24;
const cursorOf = (image) => image.created_at;

function ImageAlbum() {
  const { album } = useParams();
  const category = categoryFromSlug(album);
  const title = category ?? UNCATEGORIZED_TITLE;
  usePageMeta({
    title: `${title} Photos`,
    description: `Photos from ${title}, Believers Equipping Network.`,
  });

  const fetchPage = useCallback(
    (before) => listGalleryImages({ category, before, limit: PAGE_SIZE }),
    [category],
  );
  const { items: images, status, error, hasMore, loadMore, retry } = usePaginatedList(
    fetchPage,
    cursorOf,
    PAGE_SIZE,
  );
  const [viewerIndex, setViewerIndex] = useState(null);

  useEffect(() => setViewerIndex(null), [category]);

  return (
    <main>
      <Container className="py-10 md:py-14">
        <SubpageHeader title={title} backTo="/media/images" />

        {status === "error" && images.length === 0 && (
          <ErrorState title="We couldn't load these photos" error={error} onRetry={retry} />
        )}
        {status === "success" && images.length === 0 && (
          <p className="mt-10 text-center text-body text-secondary">No photos in this album yet.</p>
        )}

        <ul
          aria-busy={status === "loading"}
          className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          {status === "loading" &&
            Array.from({ length: 8 }, (_, i) => (
              <li
                key={i}
                aria-hidden="true"
                className="aspect-[3/2] animate-pulse rounded-[14px] bg-placeholder"
              />
            ))}
          {images.map((image, i) => (
            <li key={image.id}>
              <button
                type="button"
                onClick={() => setViewerIndex(i)}
                aria-label={`Open photo ${i + 1}`}
                className="group block aspect-[3/2] w-full overflow-hidden rounded-[14px] bg-placeholder focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <RemoteImage
                  src={cloudinaryResize(image.image_url, { width: 600, height: 400 })}
                  alt={image.title ?? ""}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            </li>
          ))}
        </ul>

        <LoadMore
          status={status}
          hasMore={hasMore}
          error={error}
          itemCount={images.length}
          onLoadMore={loadMore}
          onRetry={retry}
        />
      </Container>

      <Lightbox
        images={images}
        index={viewerIndex}
        onClose={() => setViewerIndex(null)}
        onIndexChange={setViewerIndex}
      />

      <Socials />
    </main>
  );
}

export default ImageAlbum;
