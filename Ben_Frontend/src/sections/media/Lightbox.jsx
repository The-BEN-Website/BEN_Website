import React, { useEffect, useRef, useState } from "react";
import { IoChevronBack, IoChevronForward, IoClose, IoDownloadOutline } from "react-icons/io5";
import { cloudinaryDownload, cloudinaryResize } from "../../lib/cloudinary";

const SWIPE_THRESHOLD_PX = 50;
const VIEW_WIDTH = 1920;

const viewUrl = (image) => cloudinaryResize(image.image_url, { width: VIEW_WIDTH });

const iconButton =
  "flex h-10 w-10 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white";

function NavButton({ direction, onClick }) {
  const isPrev = direction === "prev";
  const Icon = isPrev ? IoChevronBack : IoChevronForward;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isPrev ? "Previous photo" : "Next photo"}
      className={`group absolute top-1/2 -translate-y-1/2 ${
        isPrev ? "left-2 sm:left-6" : "right-2 sm:right-6"
      } focus-visible:outline-none`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors group-hover:bg-white/25 group-focus-visible:ring-2 group-focus-visible:ring-white sm:h-12 sm:w-12">
        <Icon size={24} />
      </span>
    </button>
  );
}

// Full-screen photo viewer built on the native <dialog> (focus trap, Esc to close).
// Arrow keys and swipes move between photos; clicking the backdrop closes it.
function Lightbox({ images, index, onClose, onIndexChange }) {
  const dialogRef = useRef(null);
  const touchStartX = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const open = index !== null;
  const image = open ? images[index] : null;
  const hasPrev = open && index > 0;
  const hasNext = open && index < images.length - 1;

  const goPrev = () => hasPrev && onIndexChange(index - 1);
  const goNext = () => hasNext && onIndexChange(index + 1);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();

    // Keep the page behind from scrolling while the viewer is up.
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Reset the fade-in for each photo and warm the cache for its neighbours.
  useEffect(() => {
    if (!open) return;
    setLoaded(false);
    setFailed(false);
    [images[index - 1], images[index + 1]].filter(Boolean).forEach((neighbour) => {
      new Image().src = viewUrl(neighbour);
    });
  }, [open, index, images]);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") goPrev();
    if (event.key === "ArrowRight") goNext();
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (deltaX > SWIPE_THRESHOLD_PX) goPrev();
    if (deltaX < -SWIPE_THRESHOLD_PX) goNext();
  };

  // Clicks on the empty stage (not the photo or controls) close the viewer.
  const handleStageClick = (event) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onKeyDown={handleKeyDown}
      aria-label="Photo viewer"
      className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none bg-black/95 p-0 text-white backdrop:bg-black"
    >
      {image && (
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <p className="text-sm font-medium text-white/80" aria-live="polite">
              {index + 1} of {images.length}
            </p>
            <div className="flex items-center gap-1">
              <a
                href={cloudinaryDownload(image.image_url)}
                download
                aria-label="Download photo"
                title="Download"
                className={iconButton}
              >
                <IoDownloadOutline size={22} />
              </a>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                title="Close"
                className={iconButton}
              >
                <IoClose size={26} />
              </button>
            </div>
          </div>

          <div
            className="relative flex min-h-0 flex-1 items-center justify-center px-2 pb-4 sm:px-24 sm:pb-10"
            onClick={handleStageClick}
            onTouchStart={(event) => {
              touchStartX.current = event.touches[0].clientX;
            }}
            onTouchEnd={handleTouchEnd}
          >
            {failed && (
              <p role="alert" className="absolute max-w-xs text-center text-sm text-white/80">
                This photo couldn&apos;t load. Check your connection, or try the next one.
              </p>
            )}
            {!loaded && !failed && (
              <span
                aria-hidden="true"
                className="absolute h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white"
              />
            )}
            <img
              key={image.id}
              src={viewUrl(image)}
              alt={image.title ?? `Photo ${index + 1} of ${images.length}`}
              onLoad={() => setLoaded(true)}
              onError={() => setFailed(true)}
              className={`max-h-full max-w-full select-none object-contain transition-opacity duration-200 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            />

            {hasPrev && <NavButton direction="prev" onClick={goPrev} />}
            {hasNext && <NavButton direction="next" onClick={goNext} />}
          </div>
        </div>
      )}
    </dialog>
  );
}

export default Lightbox;
