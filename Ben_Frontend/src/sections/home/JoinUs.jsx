import React from "react";
import Container from "../../components/ui/Container";
import classroomImage from "../../assets/home/home-classroom.jpg";
import thursdayMeetingImage from "../../assets/home/join-thursday-meeting.jpg";

// Images are added as they're exported from Figma; cards without one show a neutral placeholder.
const gatherings = [
  { name: "Sunday Service", time: "1pm", image: classroomImage },
  { name: "Foundation Class", time: "4pm", image: null },
  { name: "Thursday Meeting", time: "4pm", image: thursdayMeetingImage },
];

function GatheringCard({ name, time, image }) {
  return (
    <li className="relative aspect-[376/309] w-[80%] shrink-0 snap-start overflow-hidden rounded-3xl bg-placeholder sm:w-[45%] lg:w-auto">
      {image && (
        <img
          src={image}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute bottom-3.5 left-0 flex flex-col items-start">
        <h3 className="rounded-r-md bg-primary px-2 py-0.5 text-xl font-medium leading-[27px] text-white">
          {name}
        </h3>
        <p className="w-28 rounded-br-md bg-white text-center text-base font-medium leading-[27px] text-black">
          {time}
        </p>
      </div>
    </li>
  );
}

function JoinUs() {
  return (
    <section aria-labelledby="join-us-heading">
      <Container className="py-12 md:py-16">
        <h2 id="join-us-heading" className="text-heading font-semibold text-black">
          Join Us Today!
        </h2>
        <p className="mt-6 max-w-md text-body font-medium text-secondary">
          Be a part of our life-transforming gatherings and experience the power of God&apos;s Word
          and Spirit in a community of faith.
        </p>

        <ul className="-mx-4 mt-12 flex snap-x snap-mandatory scroll-px-4 gap-6 overflow-x-auto scrollbar-none px-4 sm:-mx-8 sm:scroll-px-8 sm:px-8 md:mx-0 md:scroll-px-0 md:px-0 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {gatherings.map((gathering) => (
            <GatheringCard key={gathering.name} {...gathering} />
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default JoinUs;
