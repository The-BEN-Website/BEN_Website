import React from 'react'
// import BackgroundImage from '../../assets/Home_assets/Background!.webp'
import BackgroundImage from '../../assets/Home_assets/hero_Img1.webp'
// import BackgroundImage1 from '../../assets/Home_assets/Header.webp'
import ServiceBtn from '../../components/Buttons/button1'
import { LazyLoadImage } from "react-lazy-load-image-component";

const Header = () => {

    return (
        <div className='flex items-center justify-center relative h-[35rem] lg:h-[28rem] w-11/12 mx-auto font-my_font'>
            <section className='w-11/12 md:h-[25rem] lg:h-full flex flex-col lg:flex-row flex-col-reverse sm:flex-col'>
                {/* main header content */}
                <div className = 'w-full lg:w-1/2 flex flex-col items-center justify-center md:items-center lg:items-start gap-3' >
                    <h2 className='text-black text-4xl lg:text-5xl font-bold font-my_font text-center md:text-start tracking-wide'>Contact Us Directly</h2>
                    <p className='tracking-widest text-black text-sm font-my_font w-2/3 text-center md:text-start'>
                    Looking for more information? Submit your information and BEN representative will follow up with you as soon as possible.
                    </p>
                    
                </div>
                {/* image */}
                <LazyLoadImage src={BackgroundImage} className="w-10/12 sm:w-2/3 md:w-3/5 lg:w-1/2 h-fit flex items-center mx-auto lg:my-9" alt="" />
            </section>
            {/* <hr className='bg-red-300 border-0 h-0.5 w-full absolute bottom-[11%]'/> */}
            {/* <DeleteIcon className='bg-white'/> */}
            
        </div>
    )
}

export default Header