import React, {useRef} from 'react'
import Partner from '../../assets/Home_assets/contribute.webp'
import { LazyLoadImage } from "react-lazy-load-image-component";

const Others = () => {
  const form = useRef();

  return (
    <div className="h-[60rem] md:h-[60rem] lg:h-[42rem] w-full flex font-my_font">
      <div className="flex flex-col flex-col-reverse lg:flex-row w-10/12 m-auto gap-8 lg:gap-16 items-center text-black">
        <form
          className="w-11/12 h-fit md:w-10/12 lg:w-1/2 flex flex-col gap-5 mb-5"
          ref={form}
        >
          <h2 className="text-center text-3xl sm:text-left sm:text-3xl font-bold text-my-black font-my_font">
            The purpose of Contributions
          </h2>
          <p className="text-xl text-center sm:text-left font-my_font">
            A Potential To Share The Gospel To Hundreds Of Millions Of Homes…
            <br />
            <br />
            Select any option
          </p>
          <select className="flex flex-col gap-3 text-my-black p-2 border border-my-red">
            <option value="no" defaultValue>
              Select any
            </option>
            <option value="no1">Make Contributions</option>
            <option value="no2">Offering</option>
            <option value="no3">Partnership</option>
          </select>
          <a
            href="./payment1"
            className="text-center bg-my-red text-white px-8 py-3 font-semibold rounded-sm  font-my_font"
          >
            Pay Online
          </a>

          <p className="text-center">OR</p>

          <span className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold font-my_font underline">
              Our Account Details
            </h2>
            <p className="text-xl font-semibold font-my_font">
              Account Name: Believers Equipping Nation
            </p>
            <p className="font-my_font">Account Number: 1430458522 </p>
            <p className="font-my_font">Account Bank: Access Bank </p>
          </span>
        </form>
        <LazyLoadImage
          src={Partner}
          loading="lazy"
          className="w-3/5 h-10/12 md:w-6/12 md:h-8/12 lg:w-5/12"
          alt=""
        />
      </div>
    </div>
  );
}

export default Others