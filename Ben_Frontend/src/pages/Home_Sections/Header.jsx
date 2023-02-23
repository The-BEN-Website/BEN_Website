import React from 'react'
import BackgroundImage from '../../assets/Home_assets/Background!.png'
import BackgroundImage1 from '../../assets/Home_assets/newBackground1.png'
import ServiceBtn from '../../components/Buttons/button1'

const Header = () => {

    return (
        <div className='flex items-center justify-center relative h-[36rem] w-full font-my_font'>
            <img
            src={BackgroundImage}
            className="absolute w-full h-full mix-blend-overlay object-fill md:hidden"
            alt=""
            />
            <img
            src={BackgroundImage1}
            className="hidden md:inline-block absolute w-full h-full mix-blend-overlay"
            alt=""
            />
            {/* main header content */}
            <div className = 'w-5/6 flex flex-col items-center justify-center md:items-start gap-3 ' >
                <h2 className='text-white text-5xl font-bold font-my_font text-center md:text-start'>Believers Equipping Network</h2>
                <p className='text-white text-sm font-my_font md:w-1/3 w-2/3 text-center md:text-start '>
                    Heralding the Lordship of the word
                    Demonstrating the influence of the spirit 
                </p>
                <span className='flex gap-4 w-full md:w-[15rem]'>
                    <ServiceBtn/>
                </span>
            </div>
            {/* <DeleteIcon className='bg-white'/> */}
            <div className='hidden md:flex flex absolute -bottom-[10%] w-2/3 md:w-3/4 lg:w-2/3 bg-white h-1/4 justify-center items-center m-auto gap-[6rem] drop-shadow-md md:gap-1 lg:gap-[6rem]' id="service">
                <span className='w-4/12 md:w-5/12 lg:w-4/12' >
                    <p className='text-lg font-semibold text-my-black font-my_font'>Sunday Services</p>
                    <p className='text-3xl md:text-2xl text-my-black font-medium font-my_font'>2:00pm - 4:00pm</p>
                </span>
                <span className='w-4/12 md:w-5/12 lg:w-4/12'>
                    <p className='text-lg font-semibold text-my-black font-my_font'>Tuesday & Thursday Services</p>
                    <p className='text-2xl text-my-black font-medium font-my_font'>4:00pm - 6:00pm</p>
                </span>
            </div>
        </div>
    )
}

export default Header