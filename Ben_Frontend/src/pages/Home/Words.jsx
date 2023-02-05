import React from 'react'
import Pastor_Img from '../../assets/Home_assets/Pastor.png'

const Words = () => {
  return (
    <div className='flex flex-col flex-col-reverse md:flex-row w-10/12 items-center justify-center m-auto gap-5 md:gap-3 h-1/3 '>
      <div className='w-2/3 h-fit md:w-1/2'>
        <p className='text-my-black text-lg md:text-base lg:text-lg'>On behalf of Belivers equipping network, I welcome you here. We pray and trust God's Spirit to open your eyes to truths found in His word via this medium. The Word as a message and ministry is our mandate in all the earth.
        It brings clarity of purpose, wholeness, wellness and above all stability in Christ. This we pray and receive is your experience here. Don't just surf here. Learn here and also tell your friends!
        You are blessed !!!
        </p>
        <br/>
        <h2 className='text-lg font-bold text-my-black md:text-left'>Pastor Esosa Enoyoze</h2>
        <br/>
        <button className='bg-my-red text-white px-8 py-3 font-semibold rounded-sm '>Connect with Us</button>
      </div>
      <img src={Pastor_Img} className="w-2/3 md:w-1/2 md:h-2/3 h-1/2" alt="" />
    </div>
  )
}

export default Words