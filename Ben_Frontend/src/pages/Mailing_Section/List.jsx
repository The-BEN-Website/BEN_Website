import React from 'react'
import ListImg from '../../assets/Home_assets/Class1.webp'
import Form from './Form'
import { LazyLoadImage } from "react-lazy-load-image-component";

const List = () => {
  return (
    <div className="h-[35rem] md:h-[40rem] lg:h-[30rem] w-full flex font-my_font ">
        <div className='flex flex-col lg:flex-row w-10/12 m-auto gap-10 lg:gap-[5rem] items-center text-black'>
          <LazyLoadImage src={ListImg} className="w-3/5 h-8/12 md:w-6/12 md:h-8/12 lg:w-5/12 lg:ml-16" alt="" />
          <div className='w-10/12 h-fit md:w-1/2 flex flex-col gap-3 mb-5 '>
              <h2 className='text-center text-3xl sm:text-left sm:text-3xl font-black text-my-black font-my_font'>Join Our Mailing List</h2>
              <p className='text-xl text-center sm:text-left font-my_font'>We promise not spam you messages</p>
              <Form />
          </div>
        </div>
    </div>
  )
}

export default List