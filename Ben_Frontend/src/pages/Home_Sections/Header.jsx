import React from 'react'
// import BackgroundImage from '../../assets/Home_assets/Background!.webp'
import BackgroundImage from '../../assets/Home_assets/header_group.webp'
// import BackgroundImage1 from '../../assets/Home_assets/Header.webp'
import ServiceBtn from '../../components/Buttons/button1'
import { LazyLoadImage } from "react-lazy-load-image-component";

const Header = () => {

    return (
        <div className='flex items-center justify-center relative h-fit md:h-[40rem] w-11/12 mx-auto font-my_font'>
            <section className='w-11/12 md:h-[25rem] lg:h-full flex flex-col lg:flex-row flex-col-reverse'>
                {/* main header content */}
                <div className = 'w-full lg:w-1/2 flex flex-col items-center justify-center md:items-center lg:items-start gap-3 ' >
                    <h2 className='text-black text-4xl lg:text-5xl font-bold font-my_font text-center md:text-start tracking-wide'>Believers Equipping Nation</h2>
                    <p className='tracking-widest text-black text-sm font-my_font md:w-1/2 w-2/3 text-center md:text-start'>
                        Heralding the Lordship of the word
                        Demonstrating the influence of the spirit 
                    </p>
                    <span className='flex gap-4 w-full md:w-[15rem]'>
                        <ServiceBtn/>
                    </span>
                </div>
                {/* image */}
                <LazyLoadImage src={BackgroundImage} className="w-10/12 sm:w-2/3 md:w-1/2 h-fit flex items-center mx-auto lg:my-9" alt="" />
            </section>
            {/* <hr className='bg-red-300 border-0 h-0.5 w-full absolute bottom-[11%]'/> */}
            {/* <DeleteIcon className='bg-white'/> */}
<<<<<<< HEAD
            <div className='hidden md:flex flex absolute sm:-bottom-[7%] lg:-bottom-[9%] w-2/3 md:w-3/4 lg:w-2/3 bg-white h-1/4 justify-center items-center m-auto gap-[6rem] drop-shadow-xl md:gap-1 lg:gap-[6rem]' id="service">
=======
            <div className='hidden md:flex flex absolute sm:-bottom-[7%] lg:-bottom-[10%] w-2/3 md:w-3/4 lg:w-2/3 bg-white h-1/4 justify-center items-center m-auto gap-[6rem] drop-shadow-xl md:gap-1 lg:gap-[6rem]' id="service">
>>>>>>> b5332e8613d6b37604648d512ee66850418ab46e
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