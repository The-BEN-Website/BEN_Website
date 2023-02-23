import React from 'react'
import Disciple_Img from '../../assets/Home_assets/Discipleship.png' 

const Discipleship = () => {
    return (
    <div className='bg-my-black lg:bg-grey-background h-[68rem] md:h-[60rem] lg:h-[30rem] w-full flex font-my_font'>
        <div className='flex flex-col lg:flex-row w-10/12 m-auto gap-20 items-center text-white lg:text-my-black'>
            <img src={Disciple_Img} className="w-4/5 h-10/12 md:w-6/12 md:h-8/12 lg:w-5/12" alt="" loading="lazy" />
            <div className='w-2/3 h-fit md:w-1/2 flex flex-col gap-5'>
                <h2 className='text-2xl font-semibold font-my_font'>Join the Discipleship Class</h2>
                <blockquote className="relative">
                    <p className="text-lg md:text-base lg:text-lg before:content-['\201C'] before:font-serif before:absolute before:-top-20 before:left-0 before:text-7xl before:text-my-red before:opacity-50 before:transform before:-translate-x-7 before:translate-y-16 after:content-['\201D'] after:font-serif after:absolute after:-bottom-34 after:right-0 after:text-7xl after:text-my-red after:opacity-50 after:transform after:translate-x-6 after:translate-y-2 font-my_font">
                    All scripture is given by inspiration of God and is useful for doctrine, for reproof, for correction and for training in righteousness.”
                    The next most important thing after salvation is knowledge. God desires that you grow in your knowledge of what Christ has done and what you have as a result.
                    </p>
                </blockquote>
                <button className='bg-my-red text-white px-8 py-3 font-semibold rounded-sm  font-my_font'>Learn More</button>
            </div>
        </div>
        
    </div>
    )
}

export default Discipleship