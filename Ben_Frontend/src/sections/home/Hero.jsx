import React from "react";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import LiveDot from "../../components/ui/LiveDot";
import useAsync from "../../hooks/useAsync";
import { getLiveStreamStatus } from "../../api/liveStream";
import heroImage from "../../assets/home/home-hero.jpg";

// TODO: source from the `service_times` table once the Supabase client is wired up.
const serviceTimes = [
  { label: "Sunday Services", time: "1:00pm" },
  { label: "Tuesday & Thursday Services", time: "4:00pm - 6:00pm" },
];

function Hero() {
  const { data: liveStatus } = useAsync(getLiveStreamStatus);
  const isLive = Boolean(liveStatus?.is_live);

  return (
    <section aria-labelledby="hero-heading">
      <Container className="grid items-center gap-10 py-8 md:py-12 lg:grid-cols-2 lg:gap-16 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <div className="flex flex-col items-start">
          <p className="rounded-[10px] border border-line bg-white px-2.5 py-1 text-body font-medium text-primary shadow-glow">
            ...raising godly seeds
          </p>

          <h1
            id="hero-heading"
            className="mt-4 text-heading font-semibold text-black sm:text-display lg:text-heading xl:text-display"
          >
            Believers Equipping Network
          </h1>

          <p className="mt-6 max-w-md text-body font-medium text-secondary">
            Equipping believers through sound teaching and spiritual empowerment to influence their
            world with the wisdom of the Word and the power of the Holy Spirit.
          </p>

          <div className="mt-12 flex flex-wrap gap-2">
            <Button href="#branches">Join Us This Sunday</Button>
            <Button to="/live" variant="secondary">
              {isLive ? "Watch Live" : "Watch Online"}
              <LiveDot pulsing={isLive} />
            </Button>
          </div>

          <dl className="mt-5 flex">
            {serviceTimes.map(({ label, time }) => (
              <div key={label} className="min-w-0 border-r border-line px-2 py-2">
                <dt className="text-base font-medium leading-tight text-label sm:text-lg sm:leading-none lg:text-base xl:text-lg">
                  {label}
                </dt>
                <dd className="mt-2.5 text-base font-semibold leading-none text-ink-soft sm:text-lg lg:text-base xl:text-lg">
                  {time}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <img
          src={heroImage}
          alt="The pastor speaking at the pulpit during the Holy Spirit Camp Meeting"
          width={1200}
          height={959}
          fetchpriority="high"
          className="aspect-[600/540] w-full rounded-3xl object-cover md:aspect-[16/10] lg:aspect-[600/540]"
        />
      </Container>
    </section>
  );
}

export default Hero;
