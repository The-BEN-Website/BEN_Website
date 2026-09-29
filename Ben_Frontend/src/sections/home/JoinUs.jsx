import React from "react";
import Container from "../../components/ui/Container";
import RemoteImage from "../../components/ui/RemoteImage";
import useCachedAsync from "../../hooks/useCachedAsync";
import { listServiceTimes } from "../../api/serviceTimes";
import { cloudinaryResize } from "../../lib/cloudinary";
import { weeklyLabel } from "../../lib/serviceTimes";
import classroomImage from "../../assets/home/home-classroom.jpg";
import foundationClassImage from "../../assets/home/join-foundation-class.jpg";
import thursdayMeetingImage from "../../assets/home/join-thursday-meeting.jpg";

// Shown only if the services can't be loaded and none are remembered on this device.
const fallbackGatherings = [
  { id: "sunday", name: "Sunday Service", schedule: "Sundays · 8:30am", image: classroomImage },
  { id: "foundation", name: "Foundation Class", schedule: "Mondays · 4:00pm", image: foundationClassImage },
  { id: "thursday", name: "Midweek Service", schedule: "Thursdays · 8:00pm", image: thursdayMeetingImage },
];

const cardClass =
  "relative aspect-[376/309] w-[80%] shrink-0 snap-start overflow-hidden rounded-3xl bg-placeholder sm:w-[45%] lg:w-auto";

function GatheringCard({ name, schedule, image }) {
  return (
    <li className={cardClass}>
      {image && (
        <RemoteImage
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
        <p className="rounded-br-md bg-white px-3 text-base font-medium leading-[27px] text-black">
          {schedule}
        </p>
      </div>
    </li>
  );
}

// Every public service from the admin's Service Times page (running or not),
// in the admin's order, each with its photo if one was uploaded. Shares the cached
// "service-times" data with the hero.
function JoinUs() {
  const { status, data } = useCachedAsync("service-times", listServiceTimes);

  const gatherings =
    data?.length > 0
      ? data.map((service) => ({
          id: service.id,
          name: service.name,
          schedule: weeklyLabel(service),
          image: service.image_url ? cloudinaryResize(service.image_url, { width: 800, height: 656 }) : null,
        }))
      : fallbackGatherings;

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

        <ul
          aria-busy={status === "loading"}
          className="-mx-4 mt-12 flex snap-x snap-mandatory scroll-px-4 gap-6 overflow-x-auto scrollbar-none px-4 sm:-mx-8 sm:scroll-px-8 sm:px-8 md:mx-0 md:scroll-px-0 md:px-0 lg:grid lg:grid-cols-3 lg:overflow-visible"
        >
          {status === "loading"
            ? Array.from({ length: 3 }, (_, i) => (
                <li key={i} aria-hidden="true" className={`${cardClass} animate-pulse`} />
              ))
            : gatherings.map(({ id, ...gathering }) => <GatheringCard key={id} {...gathering} />)}
        </ul>
      </Container>
    </section>
  );
}

export default JoinUs;
