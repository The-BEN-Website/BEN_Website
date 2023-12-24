import React from 'react'
import BackgroundImage from '../../assets/Home_assets/directions.webp'
import BackgroundImage1 from '../../assets/Home_assets/directions.webp'
import { LazyLoadImage } from "react-lazy-load-image-component";

const Hero = () => {
  return (
    <div
      className="flex items-center justify-center relative h-[50rem] w-full
    "
    >
      <LazyLoadImage
        src={BackgroundImage}
        className="absolute w-full h-full mix-blend-overlay object-fill md:hidden"
        alt=""
      />
      <LazyLoadImage
        src={BackgroundImage1}
        className="hidden md:inline-block absolute w-full h-full"
        alt=""
      />
      <div className="text-center absolute text-white w-2/3 flex flex-col gap-5">
        <h2 className="text-4xl sm:text-5xl font-bold leading-7 font-my_font">
          Worship with Us
        </h2>
        <p className="text-2xl font-my_font">
          We are Believers Equipping Network, we considers God's word to be the
          primary and only source of guidance for our conduct and practices. We
          believe that Christ is the explanation of all things Jesus. Join us
          for a <b>Wonderful Experience!!</b>
        </p>
        <button className="bg-white border border-my-red w-fit text-my-red px-8 py-3 font-medium rounded-md font-my_font mx-auto">
          <a href="https://forms.gle/W6YVruT9qz8ayyxH8" target='_blank'>Plan a Visit</a>
        </button>
      </div>
    </div>
  );
}

export default Hero