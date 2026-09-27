import React from "react";
import Logo from "../assets/Home_assets/Logo1.webp";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.believersequippingnetwork.app";

const Live = () => {
  return (
    <div className="App font-my_font flex min-h-screen flex-col items-center justify-center gap-6 px-4 pt-32 pb-20 text-center">
      <img src={Logo} alt="BEN Logo" className="h-16 w-16 rounded-xl bg-white object-contain" />

      <div className="flex max-w-md flex-col gap-3">
        <h1 className="text-2xl font-bold text-my-black">Watch Live in the App</h1>
        <p className="text-sm leading-relaxed text-contact-text">
          Our live services stream inside the Believers Equipping Network app. If you already have
          it installed, this link should have opened it directly — if you're seeing this instead,
          get the app below to join in.
        </p>
      </div>

      <div className="flex flex-col items-center gap-3">
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-my-red px-6 py-3 text-sm font-semibold text-white"
        >
          Get it on Google Play
        </a>
        <p className="text-xs text-contact-text">
          On iPhone or iPad, search &quot;Believers Equipping Network&quot; on the App Store.
        </p>
      </div>
    </div>
  );
};

export default Live;
