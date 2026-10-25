import React from "react";
import Hero from "../sections/home/Hero";
import BirthdayBanner from "../sections/home/BirthdayBanner";
import HscmBanner from "../sections/home/HscmBanner";
import Welcome from "../sections/home/Welcome";
import JoinUs from "../sections/home/JoinUs";
import Branches from "../sections/home/Branches";
import Discipleship from "../sections/home/Discipleship";
import Socials from "../sections/shared/Socials";
import usePageMeta from "../hooks/usePageMeta";

function Home() {
  usePageMeta({});
  return (
    <>
      <Hero />
      <BirthdayBanner />
      {/* <HscmBanner /> */}
      <Welcome />
      <JoinUs />
      <Branches />
      <Discipleship />
      <Socials />
    </>
  );
}

export default Home;
