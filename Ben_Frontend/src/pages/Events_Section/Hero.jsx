import React from 'react'
import BackgroundImage from '../../assets/Home_assets/Background!.webp'
import BackgroundImage1 from '../../assets/Home_assets/newBackground1.webp'
const Hero = () => {
  return (
    <div className="flex items-center justify-center font-my_font relative h-[30rem] w-full
    ">
        <img
        src={BackgroundImage}
        className="absolute w-full h-full mix-blend-overlay object-fill md:hidden"
        alt=""
        />
        <img
        src={BackgroundImage1}
        className="hidden md:inline-block absolute w-full h-full mix-blend-overlay"
        alt=""
        />
      <div className="text-center text-white">
        <h2 className="font-my_font text-4xl sm:text-5xl mb-5 font-bold leading-7">
         Events
        </h2>
        <p className="text-2xl font-my_font">
        Join us at any of our special events taking place across 
        <p>Believers Equipping Nation</p>
        </p>
      </div>
    </div>
  )
}

export default Hero