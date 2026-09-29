import React from "react";
import Container from "../components/ui/Container";
import VisitActions from "../components/VisitActions";
import AboutBlock, {
  AboutImage,
  AboutText,
} from "../sections/about/AboutBlock";
import Socials from "../sections/shared/Socials";
import heroImage from "../assets/about/about-hero.jpg";
import identityImage from "../assets/about/about-identity.jpg";
import missionImage from "../assets/about/about-mission.jpg";

// Photos are added as they're exported; blocks without one show a neutral placeholder.
const images = {
  hero: heroImage,
  identity: identityImage,
  mission: missionImage,
};

const missionStatements = [
  "To Know the Gospel",
  "To live it",
  "To preach it",
  "To demonstrate the authority of the Gospel",
  "To disciple others through it",
];

function About() {
  return (
    <main>
      <section aria-labelledby="about-heading">
        <Container className="grid items-center gap-10 py-8 md:py-12 lg:grid-cols-2 lg:gap-16 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div className="flex flex-col items-start">
            <h1
              id="about-heading"
              className="text-heading font-semibold text-black sm:text-display lg:text-heading xl:text-display"
            >
              About Us [BEN]
            </h1>
            <p className="mt-6 max-w-md text-body font-medium text-secondary">
              We are a church ministry; with a passion to see souls saved, saved
              souls discipled and trained for the work of the ministry. We
              emphasise on the proper and accurate teaching and practice of
              God&apos;s word.
            </p>
            <VisitActions className="mt-10" />
          </div>

          <AboutImage
            src={images.hero}
            alt="The pastor ministering with a microphone"
            priority
          />
        </Container>
      </section>

      <AboutBlock
        image={images.identity}
        imageAlt="Church members seated during a service"
        imageSide="left"
      >
        <AboutText title="Our Identity">
          We are a Bible-believing church that considers God&apos;s word to be
          the primary and only source of guidance for our conduct and practices.
          We believe in the Bible&apos;s doctrine of salvation by faith alone in
          Christ Jesus.
        </AboutText>
        <AboutText title="The Local Church">
          We train believers in the work of the ministry in an atmosphere of
          love, fellowship, faith and power. We equip believers with the Word to
          the intent that the same is grounded and able to teach others the same
          also.
        </AboutText>
      </AboutBlock>

      <section
        aria-labelledby="mission-heading"
        className="py-8 md:py-12 lg:py-16"
      >
        <Container className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-12 xl:gap-16">
          <div>
            <h2
              id="mission-heading"
              className="text-[40px] font-semibold leading-[100%] tracking-[-0.04em] text-black sm:text-[44px] md:text-[48px] lg:text-[40px]"
            >
              Our Mission
            </h2>

            <div className="mt-8 space-y-4">
              {missionStatements.map((statement) => (
                <div
                  key={statement}
                  className="rounded-[18px] border border-[#FFFFFF] bg-[#FBFBFB] px-5 py-4 text-[16px] font-medium leading-[24px] text-[#717171] sm:text-[17px] sm:leading-[25px] md:px-6 md:text-[18px] md:leading-[27px]"
                >
                  {statement}
                </div>
              ))}
            </div>
          </div>

          <AboutImage
            src={images.mission}
            alt="A large group photo of the congregation"
            className="h-full rounded-[30px]"
          />
        </Container>
      </section>

      <Socials />
    </main>
  );
}

export default About;
