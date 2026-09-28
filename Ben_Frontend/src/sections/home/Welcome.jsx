import React from "react";
import Container from "../../components/ui/Container";
import QuoteMark from "../../components/ui/QuoteMark";
import welcomeImage from "../../assets/home/home-welcome.jpg";

function Welcome() {
  return (
    <section aria-label="A welcome from the pastor">
      <Container className="grid items-center gap-10 py-12 md:py-16 lg:grid-cols-2 lg:gap-24 xl:gap-32">
        <figure>
          <QuoteMark className="h-7 w-8 text-primary md:h-8 md:w-10" />

          <blockquote className="mt-6 text-body font-medium text-secondary md:pl-6">
            <p>
              On behalf of Believers Equipping Network, I welcome you here. We pray and trust
              God&apos;s Spirit to open your eyes to truths found in His word via this medium. The
              Word as a message and ministry is our mandate in all the earth. It brings clarity of
              purpose, wholeness, wellness and above all stability in Christ. You are blessed !!!
            </p>
          </blockquote>

          <div className="mt-2 flex justify-end">
            <QuoteMark variant="close" className="h-7 w-8 text-primary md:h-8 md:w-10" />
          </div>

          <figcaption className="text-body font-semibold text-black md:pl-6">
            Pastor Esosa Enoyoze
          </figcaption>
        </figure>

        <img
          src={welcomeImage}
          alt="Pastor Esosa Enoyoze preaching at the pulpit"
          width={2560}
          height={1706}
          loading="lazy"
          className="aspect-[550/510] w-full rounded-3xl object-cover md:aspect-[16/10] lg:aspect-[550/510]"
        />
      </Container>
    </section>
  );
}

export default Welcome;
