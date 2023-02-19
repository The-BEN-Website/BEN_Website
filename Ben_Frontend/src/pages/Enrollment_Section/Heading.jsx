import React from 'react'

const Heading = () => {
  return (
    <div className='hidden md:flex flex w-2/3 md:w-3/4 lg:w-2/3 bg-white h-1/3 justify-center items-center m-auto gap-[6rem] drop-shadow-md md:gap-1 lg:gap-[6rem] rounded-xl' id="service">
        <span className='w-full text-center flex flex-col gap-3 p-5' >
            <p className='text-3xl md:text-2xl text-my-black font-semibold font-my_font'>New Enrollment</p>
            <p>We promise not spam you messages</p>
        </span>
    </div>
  )
}

export default Heading