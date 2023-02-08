import React from 'react'
import Disciple_Img from '../../assets/Home_assets/Discipleship.png' 

const Discipleship = () => {
    return (
    <div className='bg-my-black lg:bg-grey-background h-[60rem] md:h-[50rem] lg:h-[30rem] w-full flex'>
        <div className='flex flex-col lg:flex-row w-10/12 m-auto gap-20 items-center text-white lg:text-my-black'>
            <img src={Disciple_Img} className="w-4/5 h-10/12 md:w-6/12 md:h-8/12 lg:w-6/12" alt="" />
            <div className='w-2/3 h-fit md:w-1/2 flex flex-col gap-5'>
                <h2 className='text-2xl font-semibold'>Join the Discipleship Class</h2>
                <blockquote class="relative">
                    <p class="text-lg md:text-base lg:text-lg before:content-['\201C'] before:font-serif before:absolute before:-top-20 before:left-0 before:text-7xl before:text-my-red before:opacity-50 before:transform before:-translate-x-7 before:translate-y-16 after:content-['\201D'] after:font-serif after:absolute after:-bottom-34 after:right-0 after:text-7xl after:text-my-red after:opacity-50 after:transform after:translate-x-6 after:translate-y-2">
                    All scripture is given by inspiration of God and is useful for doctrine, for reproof, for correction and for training in righteousness.”
                    The next most important thing after salvation is knowledge. God desires that you grow in your knowledge of what Christ has done and what you have as a result. Celebration Church is committed to your progress and joy in the faith and we have a spiritual curriculum to partner with you towards that purpose – to know Christ and to make Him known
                    </p>
                </blockquote>
                <button className='bg-my-red text-white px-8 py-3 font-semibold rounded-sm '>Learn More</button>
            </div>
        </div>
        
    </div>
    )
}

export default Discipleship