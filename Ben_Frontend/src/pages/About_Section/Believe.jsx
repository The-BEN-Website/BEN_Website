import React from 'react'
import Believe_Img from '../../assets/About_assets/Believe.png' 

const Discipleship = () => {
    return (
    <div className='bg-white h-[52rem] md:h-[48rem] lg:h-[30rem] w-full'>
        <h2 className="text-4xl font-semibold text-center mb-12">What We Believe</h2>
        <div className='flex flex-col lg:flex-row w-10/12 m-auto gap-20 items-center text-white lg:text-my-black'>
            <img src={Believe_Img} className="w-4/5 h-10/12 md:w-6/12 md:h-8/12 lg:w-5/12" alt="" />
            <div className='w-2/3 h-fit md:w-1/2 flex flex-col gap-5'>
            <blockquote class="relative">
                    <p class="text-xl md:text-lg lg:text-lg before:content-['\201C'] before:font-serif before:absolute before:-top-20 before:left-0 before:text-7xl before:text-my-red before:opacity-50 before:transform before:-translate-x-7 before:translate-y-16 after:content-['\201D'] after:font-serif after:absolute after:-bottom-34 after:right-0 after:text-7xl after:text-my-red after:opacity-50 after:transform after:translate-x-6 after:translate-y-2 text-my-black">
                    Who we believe we are dictates how we operate in life. We have a passion for connecting people to their identity in God, so we can explore the fullness of the life we have been created to experience. Knowing God is key to understanding our own identity and being comfortable in our own skin.
                    </p>
                </blockquote>
            </div>
        </div>
        
    </div>
    )
}

export default Discipleship