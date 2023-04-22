import React from 'react'
import Believe_Img from '../../assets/Believe.webp' 
import { LazyLoadImage } from "react-lazy-load-image-component";

const Discipleship = () => {
    return (
    <div className='bg-white h-[52rem] md:h-[48rem] lg:h-[30rem] w-full'>
        <h2 className="text-4xl font-semibold text-center mb-12 font-my_font">What We Believe</h2>
        <div className='flex flex-col lg:flex-row w-10/12 m-auto gap-20 items-center text-white lg:text-my-black'>
            <LazyLoadImage src={Believe_Img} className="w-4/5 h-10/12 md:w-6/12 md:h-8/12 lg:w-5/12" alt="" />
            <div className='w-2/3 h-fit md:w-1/2 flex flex-col gap-5'>
            <blockquote className="relative">
                    <p className="text-xl md:text-lg lg:text-lg before:content-['\201C'] before:font-serif before:absolute before:-top-20 before:left-0 before:text-7xl before:text-my-red before:opacity-50 before:transform before:-translate-x-7 before:translate-y-16 after:content-['\201D'] after:font-serif after:absolute after:-bottom-34 after:right-0 after:text-7xl after:text-my-red after:opacity-50 after:transform after:translate-x-6 after:translate-y-2 text-my-black font-my_font">
                    We believe that with the mandate given to us in Christ Jesus, we fulfil our purpose by preaching and teaching the gospel. we are not weary or tired!! we walk in the spirit always because we are lead by the spirit! Glory to God!!!
                    </p>
                </blockquote>
            </div>
        </div>
        
    </div>
    )
}

export default Discipleship