import React from 'react'

import ServiceBtn from '../../components/Buttons/button2'
import Enroll from '../../components/Buttons/enroll'

const Header = () => {

    return (
        <div className='flex items-center justify-center relative h-[36rem] w-full font-my_font bg-background-red'>
        
            {/* main header content */}
            <div className = 'w-5/6 flex flex-col items-center justify-center md:items-start gap-7 ' >
               <p className='text-white text-sm font-my_font md:w-1/3 w-2/3 text-center md:text-start uppercase underline underline-offset-1 '>
                B.E.N discipleship School platform
                </p>
                <h2 className='text-white text-5xl font-bold font-my_font text-center md:text-start w-1/3'>Welcome To B.E.N Discipleship Class</h2>
                <span className='flex gap-4 w-full md:w-[20rem]'>
                    <ServiceBtn/>
                </span>
            </div>
            {/* <DeleteIcon className='bg-white'/> */}
            <div className='hidden md:flex flex absolute -bottom-[10%] w-2/3 md:w-3/4 lg:w-2/3 bg-white h-1/3 justify-center items-center m-auto gap-[6rem] drop-shadow-md md:gap-1 lg:gap-[6rem] rounded-xl' id="service">
                <span className='w-full text-center flex flex-col gap-3' >
                    <p className='text-lg font-bold text-my-black font-my_font '>New Enrollment</p>
                    <p className='text-3xl md:text-2xl text-my-black font-semibold font-my_font'>Registration for the Discipleship class</p>
                    <Enroll />
                </span>
            </div>
        </div>
    )
}

export default Header