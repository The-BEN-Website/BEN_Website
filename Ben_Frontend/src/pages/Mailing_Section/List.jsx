import React from 'react'
import ListImg from '../../assets/Home_assets/Class1.webp'
import Form from './Form'
import { LazyLoadImage } from "react-lazy-load-image-component";

const List = () => {
  return (
    <div className="h-[43rem] md:h-[47rem] lg:h-[30rem] w-full flex font-my_font">
        <div className='flex flex-col lg:flex-row w-11/12 sm:w-10/12 lg:w-10/12 mx-auto gap-10 lg:gap-[4rem] items-center text-black mt-10'>
          <LazyLoadImage src={ListImg} className="w-3/5 h-8/12 md:w-6/12 md:h-8/12 lg:w-5/12" alt="" />
          <div className='w-11/12 h-fit md:w-full flex flex-col gap-3 mb-5'>
              <h2 className='text-center text-3xl lg:text-left sm:text-3xl font-black text-my-black font-my_font'>Join Our Mailing List</h2>
              <p className='text-xl text-center lg:text-left font-my_font'>We promise not spam you messages</p>
              <Form />
          </div>
        </div>
    </div>
  )
}

export default List