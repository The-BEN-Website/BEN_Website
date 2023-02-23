import React from 'react'
import Pastor_Img from '../../assets/Home_assets/Pastor.png'
import Connect from '../../components/Buttons/mailing'

const Words = () => {
  return (
    <div className='flex flex-col flex-col-reverse md:flex-row w-10/12 items-center justify-center m-auto gap-7 md:gap-3 h-1/3'>
      <div className='w-2/3 h-fit md:w-1/2'>
        <blockquote className="relative">
          <p className="text-my-black text-lg md:text-base lg:text-lg
          before:content-['\201C'] before:font-serif before:absolute before:-top-20 before:left-0 before:text-7xl before:text-my-red before:opacity-40 before:transform before:-translate-x-7 before:translate-y-16 after:content-['\201D'] after:font-serif after:absolute after:-bottom-34 after:right-0 after:text-7xl after:text-my-red after:opacity-40 after:transform after:translate-x-1 after:-translate-y-1 font-my_font">On behalf of Belivers equipping network, I welcome you here. We pray and trust God's Spirit to open your eyes to truths found in His word via this medium. The Word as a message and ministry is our mandate in all the earth.
          It brings clarity of purpose, wholeness, wellness and above all stability in Christ. You are blessed !!!
          </p>
        </blockquote>
        <br/>
        <h2 className='text-lg font-bold text-my-black md:text-left font-my_font'>Pastor Esosa Enoyoze</h2>
        <br/>
        <Connect />
      </div>
      <img src={Pastor_Img} className="w-4/5 h-10/12 md:w-6/12 md:h-3/5 lg:w-6/12" alt="" />
    </div>
  )
}

export default Words