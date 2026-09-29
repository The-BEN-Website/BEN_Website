import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import Lightbox from "../../sections/media/Lightbox";
import SubpageHeader from "../../sections/media/SubpageHeader";
import Socials from "../../sections/shared/Socials";
import { categoryFromSlug, listGalleryImages, UNCATEGORIZED_TITLE } from "../../api/gallery";
import { cloudinaryResize } from "../../lib/cloudinary";

const PAGE_SIZE = 24;

function ImageAlbum() {
  const { album } = useParams();
  const category = categoryFromSlug(album);
  const title = category ?? UNCATEGORIZED_TITLE;

  const [images, setImages] = useState([]);
  const [status, setStatus] = useState("loading");
  const [hasMore, setHasMore] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(null);

  const loadPage = useCallback(
    async (before) => {
      setStatus(before ? "loading-more" : "loading");
      try {
        const page = await listGalleryImages({ category, before, limit: PAGE_SIZE });
        setImages((current) => (before ? [...current, ...page] : page));
        setHasMore(page.length === PAGE_SIZE);
        setStatus("success");
      } catch {
        setStatus("error");
      }
    },
    [category],
  );

  useEffect(() => {
    setImages([]);
    setViewerIndex(null);
    loadPage();
  }, [loadPage]);

  const loadMore = () => loadPage(images[images.length - 1].created_at);

  return (
    <main>
      <Container className="py-10 md:py-14">
        <SubpageHeader title={title} backTo="/media/images" />

        {status === "error" && images.length === 0 && (
          <p className="mt-10 text-center text-body text-secondary">
            We couldn&apos;t load these photos right now. Please try again later.
          </p>
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
                <img
                  src={cloudinaryResize(image.image_url, { width: 600, height: 400 })}
                  alt={image.title ?? ""}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            </li>
          ))}
        </ul>

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <Button variant="secondary" onClick={loadMore} disabled={status === "loading-more"}>
              {status === "loading-more" ? "Loading..." : "Load more"}
            </Button>
          </div>
        )}
        {status === "error" && images.length > 0 && (
          <p role="alert" className="mt-6 text-center text-sm text-primary">
            Couldn&apos;t load more photos. Please try again.
          </p>
        )}
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
