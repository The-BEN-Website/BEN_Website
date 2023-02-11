import React from 'react'
import BackgroundImage from '../../assets/Home_assets/Background!.png'
import BackgroundImage1 from '../../assets/Home_assets/newBackground1.png'
const Hero = () => {
  return (
    <div className="span-through flex items-center justify-center relative h-[28rem] w-full">
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
        <h2 className="text-4xl sm:text-5xl mb-5 font-bold leading-7">
          About Us
        </h2>
        <p className="text-2xl">
            Get connected with the Believers Equipping Network Church
        </p>
      </div>
    </div>
  )
}

export default Hero