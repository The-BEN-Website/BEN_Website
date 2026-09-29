import React from "react";
import { IoImage, IoLogoYoutube, IoMic, IoMusicalNote, IoPlay } from "react-icons/io5";
import Container from "../components/ui/Container";
import MediaCard from "../sections/media/MediaCard";
import Socials from "../sections/shared/Socials";
import tones from "../sections/media/tones";

const categories = [
  {
    to: "/live",
    label: "Live Stream",
    description: "Join the service as it happens",
    Icon: IoPlay,
    tone: tones.red,
  },
  {
    to: "/media/images",
    label: "Images",
    description: "Photos from services and events",
    Icon: IoImage,
    tone: tones.green,
  },
  {
    to: "/media/videos",
    label: "Videos",
    description: "Sermons, classes and past services",
    Icon: IoLogoYoutube,
    tone: tones.blue,
  },
  {
    to: "/media/audio",
    label: "Audio",
    description: "Recorded teachings to listen to anytime",
    Icon: IoMic,
    tone: tones.violet,
  },
  {
    to: "/media/songs",
    label: "Songs",
    description: "Worship music to listen to anytime",
    Icon: IoMusicalNote,
    tone: tones.pink,
  },
];

function Media() {
  return (
    <main>
      <Container className="py-12 md:py-20">
        <header className="text-center">
          <h1 className="text-heading font-semibold text-black">Media</h1>
          <p className="mt-4 text-body font-medium text-secondary">
            Explore messages, worship, and moments that keep you connected.
          </p>
        </header>

        <ul className="mx-auto mt-10 grid max-w-[1176px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <MediaCard key={category.label} {...category} />
          ))}
        </ul>
      </Container>

      <Socials />
    </main>
  );
}

export default Media;
