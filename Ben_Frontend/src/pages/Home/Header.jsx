import React from 'react'
import BackgroundImage from '../../assets/Home_assets/background.png'
import DeleteIcon from '@mui/icons-material/Delete';

const Header = () => {
    return (
        <div className='span-through flex items-center justify-center relative h-[32rem] 
        w-screen'>
            <img
            src={BackgroundImage}
            className="absolute w-full h-full mix-blend-overlay"
            alt=""
            />
            {/* main header content */}
            <div className='w-5/6 flex flex-col gap-3'>
                <h2 className='text-white text-5xl font-bold'>Believers Equipping<br/>Network</h2>
                <p className='text-white text-sm'>
                    Heralding the Lordship of the word
                    <br/>
                    Demonstrating the influence of the spirit 
                </p>
                <span className='flex gap-4'>
                    <button className='bg-my-red text-white px-6 py-3 rounded-sm font-semibold'>ABOUT US</button>
                    <button className='border-2 border-white rounded-sm text-white px-6 py-3 font-semibold'>Service Times</button>
                </span>
            </div>
            {/* <DeleteIcon className='bg-white'/> */}
            <div className='hidden md:flex flex absolute -bottom-[10%] w-2/3 md:w-3/4 lg:w-2/3 bg-white h-1/4 justify-center items-center m-auto gap-[6rem] drop-shadow-md md:gap-4 lg:gap-[6rem]'>
                <span className='w-4/12 md:w-5/12 lg:w-4/12' >
                    <p className='text-lg font-semibold text-my-black'>Sunday Services</p>
                    <p className='text-3xl text-my-black font-medium'>2:00pm - 4:00pm</p>
                </span>
                <span className='w-4/12 md:w-5/12 lg:w-4/12'>
                    <p className='text-lg font-semibold text-my-black'>Tuesday & Thursday Services</p>
                    <p className='text-3xl text-my-black font-medium'>4:00pm - 6:00pm</p>
                </span>
            </div>
        </div>
    )
}

export default Header