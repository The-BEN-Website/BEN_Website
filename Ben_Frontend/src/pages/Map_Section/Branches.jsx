import React from 'react'
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";


const Branches = () => {
  return (
    <section className="w-full bg-my-black text-white">
      <div className="w-10/12 m-auto h-auto flex flex-col gap-5 pt-10 pb-10">
        <h2 className="font-bold text-3xl text-center mb-5 font-my_font text-white">
            
          Visit any of our Branches
        </h2>
        <section className="flex md:flex-row flex-col w-full gap-10 ">
          <span className="flex flex-col gap-3">
            <PinDropOutlinedIcon />
            <h2 className="text-2xl font-semibold w-fit text-my-red font-my_font">
              Abuja Branch
            </h2>
            <p className="text-lg font-medium font-my_font ">
              National hospital Garki, The hospital's chapel, Garki, Abuja
            </p>
          </span>
          <span className="flex flex-col gap-3 ">
            <PinDropOutlinedIcon />
            <h2 className="w-fit text-my-red text-2xl font-semibold text-center font-my_font ">
              Benin Branch
            </h2>
            <p className="text-lg font-medium font-my_font">
              No 5, Blessed Avenue, Jamb Office and Civil Defense Street, Limit
              Road, Sapele Road.
            </p>
          </span>
        </section>
      </div>
    </section>
  );
}

export default Branches