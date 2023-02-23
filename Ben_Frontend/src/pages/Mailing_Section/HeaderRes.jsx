import React from 'react'
import ServiceBtn from '../../components/Buttons/button2'
import Enroll from '../../components/Buttons/enroll'

const HeaderRes = () => {
  return (
    <div className='md:hidden flex flex-col bg-white h-1/3 justify-center items-center m-auto gap-[2rem] rounded-xl w-full' id="service">
        <span className='w-full text-center flex flex-col gap-3' >
            <p className='text-lg font-bold text-my-black font-my_font '>New Enrollment</p>
            <p className='text-3xl md:text-2xl text-my-black font-semibold font-my_font'>Registration for the Discipleship class</p>
            <Enroll />
        </span>
        <hr className='bg-red-400 w-full h-[0.1rem]'/>
      </div>
  )
}

export default HeaderRes