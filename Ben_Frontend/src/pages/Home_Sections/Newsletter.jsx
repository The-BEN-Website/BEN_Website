import React from 'react'
import Subscribe from '../../assets/Home_assets/Subscribe.png'
const Newsletter = () => {
  return (
    <div className="h-[30rem] md:h-[30rem] lg:h-[30rem] w-full flex">
        <div className='flex flex-col lg:flex-row w-10/12 m-auto gap-8 lg:gap-16 items-center text-black'>
            <img src={Subscribe} className="w-3/5 h-7/12 md:w-6/12 md:h-8/12 lg:w-5/12" alt="" />
            <div className='w-2/3 h-fit md:w-1/2 flex flex-col gap-5'>
                <h2 className='text-2xl font-semibold'>Subscribe to Our Newsletter</h2>
                <p>Subscribe to our newsletter and stay updated!</p>
                <button className='bg-my-red text-white px-8 py-3 font-semibold rounded-sm '>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter