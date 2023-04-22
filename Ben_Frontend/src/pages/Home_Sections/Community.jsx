import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import Community1 from '../../assets/Home_assets/Community1.webp'
import Community2 from '../../assets/Home_assets/Community2.webp'
import Community3 from '../../assets/Home_assets/Discipleship1.webp'

const Community = () => {
  return (
    <section
      id="community"
      className="p-6 w-full md:w-[45rem] lg:w-11/12 m-auto"
    >
      <h2 className="text-3xl text-center font-semibold sm:text-4xl mb-6 text-my-black sm:text-center lg:text-left font-my_font">
        Join Us Today!
      </h2>
      <ul className="list-none mx-auto my-12 flex flex-col lg:flex-row items-center gap-6">
        <li className="w-11/12 md:w-10/12 h-[26rem] lg:w-full flex flex-col items-start mx-auto span-through relative grid content-end drop-shadow-2xl">
          <LazyLoadImage
            src={Community1}
            alt="comm1"
            loading="lazy"
            className="mb-6 w-full h-full absolute mix-blend-overlay "
          />
          <span className="mb-7">
            <h3 className="text-lg text-white mx-5 bg-community-blue bg-opacity-100 w-fit px-5 font-semiboldfont-my_font">
              Spiritual Growth
            </h3>
            <p className="sm:block text-2xl text-white mx-5 font-my_font">
              Training believers in the Ministry
            </p>
          </span>
        </li>

        <li className="w-11/12 md:w-10/12 h-[26rem] lg:w-full flex flex-col items-start mx-auto span-through relative grid content-end drop-shadow-2xl">
          <LazyLoadImage
            src={Community2}
            alt="comm2"
            loading="lazy"
            className="mb-6 w-full h-full absolute mix-blend-overlay "
          />
          <span className="mb-7">
            <h3 className="text-lg text-white mx-5 bg-community-blue bg-opacity-100 w-fit px-5 font-semibold font-my_font">
              Act of Service
            </h3>
            <p className="sm:block text-2xl text-white mx-5 font-my_font">
              Send-forth Celebration
            </p>
          </span>
        </li>

        <li className="w-11/12 md:w-10/12 h-[26rem] lg:w-full flex flex-col items-start mx-auto span-through relative grid content-end drop-shadow-2xl">
          <LazyLoadImage
            src={Community3}
            alt="comm3"
            loading="lazy"
            className="mb-6 w-full h-full absolute mix-blend-overlay brightness-75"
          />
          <span className="mb-7">
            <h3 className="text-lg text-white mx-5 bg-community-blue bg-opacity-100 w-fit px-5 font-semibold font-my_font">
              Discipleship
            </h3>
            <p className="sm:block text-2xl text-white mx-5 font-my_font">
              The Essence of Discipleship
            </p>
          </span>
        </li>
      </ul>
    </section>
  );
}

export default Community