import React from 'react'
import Pastor_Img from '../../assets/Home_assets/Pastor.png'

const Words = () => {
  return (
    <div className='flex w-10/12 items-center justify-center m-auto gap-5 h-1/3'>
      <div className='w-1/2 h-fit'>
        <p className='text-my-black text-md'>On behalf of Belivers equipping network, I welcome you here. We pray and trust God's Spirit to open your eyes to truths found in His word via this medium. The Word as a message and ministry is our mandate in all the earth.
        It brings clarity of purpose, wholeness, wellness and above all stability in Christ. This we pray and receive is your experience here. Don't just surf here. Learn here and also tell your friends!
        You are blessed !!!
        </p>
        <br/>
        <h2 className='text-lg font-bold text-my-black'>Pastor Esosa Enoyoze</h2>
        <br/>
        <button className='bg-my-red text-white px-6 py-3 font-semibold rounded-sm'>Connect with Us</button>
      </div>
      <img src={Pastor_Img} className="w-1/2 h-1/4" alt="" />
    </div>
  )
}

export default Words