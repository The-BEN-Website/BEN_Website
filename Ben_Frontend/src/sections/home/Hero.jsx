import React from "react";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import heroImage from "../../assets/home/home-hero.jpg";

// TODO: source from the `service_times` table once the Supabase client is wired up.
const serviceTimes = [
  { label: "Sunday Services", time: "1:00pm" },
  { label: "Tuesday & Thursday Services", time: "4:00pm - 6:00pm" },
];

function Hero() {
  return (
    <section aria-labelledby="hero-heading">
      <Container className="grid items-center gap-10 py-8 md:py-12 lg:grid-cols-2 lg:gap-16 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <div className="flex flex-col items-start">
          <p className="rounded-[10px] border border-line bg-white px-2.5 py-1 text-lg font-medium leading-[27px] text-primary shadow-glow">
            ...raising godly seeds
          </p>

          <h1
            id="hero-heading"
            className="mt-4 text-[40px] font-semibold leading-none text-black sm:text-[50px] lg:text-[40px] xl:text-[50px]"
          >
            Believers Equipping Network
          </h1>

          <p className="mt-6 max-w-md text-lg font-medium leading-[27px] text-secondary">
            Equipping believers through sound teaching and spiritual empowerment to influence their
            world with the wisdom of the Word and the power of the Holy Spirit.
          </p>

          <div className="mt-12 flex flex-wrap gap-2">
            <Button to="/visit">Join Us This Sunday</Button>
            <Button to="/live" variant="secondary">
              Watch Live
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-primary" />
            </Button>
          </div>

          <dl className="mt-5 flex">
            {serviceTimes.map(({ label, time }) => (
              <div key={label} className="min-w-0 border-r border-line px-2 py-2">
                <dt className="text-base font-medium leading-tight text-label sm:text-lg sm:leading-none lg:text-base xl:text-lg">{label}</dt>
                <dd className="mt-2.5 text-base font-semibold leading-none text-ink-soft sm:text-lg lg:text-base xl:text-lg">{time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <img
          src={heroImage}
          alt="The pastor speaking at the pulpit with church members beside him"
          width={1080}
          height={870}
          fetchpriority="high"
          className="aspect-[600/540] w-full rounded-3xl md:aspect-[16/10] lg:aspect-[600/540] object-cover"
        />
      </Container>
    </section>
  );
}

export default Hero;
