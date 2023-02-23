import React from 'react'
import BackgroundImage from '../../assets/Home_assets/Background!.webp'
import BackgroundImage1 from '../../assets/Home_assets/newBackground1.webp'
import { LazyLoadImage } from "react-lazy-load-image-component";

const Hero = () => {
  return (
    <div className="flex items-center justify-center relative h-[30rem] w-full
    ">
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
      <div className="text-center text-white absolute">
        <h2 className="text-4xl sm:text-5xl mb-5 font-bold leading-7 font-my_font">
          Contact Us
        </h2>
        <p className="text-2xl font-my_font">
            Get connected with the Believers Equipping Network Church
        </p>
      </div>
    </div>
  )
}

export default Hero