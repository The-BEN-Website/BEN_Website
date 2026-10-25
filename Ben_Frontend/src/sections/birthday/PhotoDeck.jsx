import React, { useState } from "react";
import { IoShuffle } from "react-icons/io5";
import { PASTOR_NAME } from "../../config/pastor";
import portraitImage from "../../assets/birthday/pastor-portrait.jpg";
import agbadaImage from "../../assets/birthday/pastor-agbada.jpg";
import deskSmileImage from "../../assets/birthday/pastor-desk-smile.jpg";
import deskBooksImage from "../../assets/birthday/pastor-desk-books.jpg";

const photos = [
  {
    src: portraitImage,
    alt: `Portrait of ${PASTOR_NAME} smiling in a cream agbada and red cap`,
    caption: "Happy birthday, Pastor!",
    crop: "object-top",
  },
  {
    src: deskSmileImage,
    alt: `${PASTOR_NAME} laughing at his desk`,
    caption: "Full of joy",
    crop: "object-top",
  },
  {
    src: agbadaImage,
    alt: `${PASTOR_NAME} standing in a cream agbada and red cap`,
    caption: "Many more years",
    crop: "object-top",
  },
  {
    src: deskBooksImage,
    alt: `${PASTOR_NAME} smiling at his desk beside stacks of books`,
    caption: "A man of the Word",
    crop: "object-[42%_center]",
  },
];

// Where a card rests by its place in the stack, front first: the next two fan
// out behind it (wider on hover), and the last hides straight behind the front.
const slots = [
  "z-40 rotate-0",
  "z-30 -translate-x-[16%] translate-y-2 -rotate-6 group-hover:-translate-x-[22%] group-hover:-rotate-[10deg]",
  "z-20 translate-x-[16%] translate-y-3 rotate-[7deg] group-hover:translate-x-[22%] group-hover:rotate-[11deg]",
  "z-10 translate-y-1 rotate-2",
];

// The birthday photos as a stack of polaroids. Tapping the stack sends the
// front photo to the back, revealing the next.
function PhotoDeck() {
  const [front, setFront] = useState(0);
  const slotOf = (index) => (index - front + photos.length) % photos.length;

  return (
    <figure className="flex flex-col items-center">
      <div className="group relative aspect-[4/5] w-full max-w-[228px] sm:max-w-[320px] xl:max-w-[340px]">
        {photos.map((photo, index) => (
          <div
            key={photo.src}
            className={`absolute inset-0 flex flex-col rounded-md bg-white p-3 shadow-polaroid transition-[transform,z-index] duration-500 ease-out motion-reduce:transition-none sm:p-4 ${
              slots[slotOf(index)]
            }`}
          >
            <img
              src={photo.src}
              alt={slotOf(index) === 0 ? photo.alt : ""}
              loading={index === 0 ? "eager" : "lazy"}
              fetchpriority={index === 0 ? "high" : undefined}
              className={`min-h-0 w-full flex-1 rounded-sm object-cover ${photo.crop}`}
            />
            <p aria-hidden="true" className="pt-2 text-center font-hand text-2xl text-ink sm:pt-3 sm:text-[28px]">
              {photo.caption}
            </p>
          </div>
        ))}
        <button
          type="button"
          onClick={() => setFront((current) => (current + 1) % photos.length)}
          className="absolute inset-0 z-50 cursor-pointer rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <span className="sr-only">Show the next photo</span>
        </button>
      </div>
      <figcaption className="mt-8 flex items-center gap-2 text-sm font-medium text-secondary">
        <IoShuffle aria-hidden="true" size={18} />
        Tap the photos to shuffle them
      </figcaption>
    </figure>
  );
}

export default PhotoDeck;
