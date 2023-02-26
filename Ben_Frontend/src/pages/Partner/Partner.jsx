import React, {useRef} from 'react'
import Partner from '../../assets/Home_assets/Partner1.png'
import { LazyLoadImage } from "react-lazy-load-image-component";

const Partnership = () => {
  const form = useRef();

  return (
    <div className="h-[50rem] md:h-[50rem] lg:h-[35rem] w-full flex font-my_font">
        <div className='flex flex-col lg:flex-row w-10/12 m-auto gap-8 lg:gap-16 items-center text-black'>
            <LazyLoadImage src={Partner} loading="lazy" className="w-3/5 h-10/12 md:w-6/12 md:h-8/12 lg:w-5/12" alt="" />
            <form className='w-11/12 h-fit md:w-10/12 lg:w-1/2 flex flex-col gap-5 mb-5' ref={form} >
                <h2 className='text-center text-3xl sm:text-left sm:text-3xl font-bold text-my-black font-my_font'>Partnership Programs</h2>
                <p className='text-xl text-center sm:text-left font-my_font'>A Potential To Share The Gospel To Hundreds Of Millions Of Homes…</p>
                <span className='flex flex-col gap-3'>
                    <h2 className='text-2xl font-semibold font-my_font underline'>Partnership Account Details</h2>
                    <p className='text-xl font-semibold font-my_font'>Account Name: Believers Equipping Nation</p>
                    <p className="font-my_font">Account Number 1: ########## [UBA]</p>
                    <p className="font-my_font">Account Number 2: ########## [Access]</p>
                </span>
                <p className='text-center'>OR</p>
                <button className='bg-my-red text-white px-8 py-3 font-semibold rounded-sm  font-my_font'>Pay Online</button>
            </form>
        </div>
    </div>
  )
}

export default Partnership