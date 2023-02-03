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
            <div className='w-5/6 border-2 border-red-700 flex flex-col gap-3'>
                <h2 className='text-white text-5xl font-bold'>Believers Equipping<br/>Network</h2>
                <p className='text-white text-sm'>
                    Heralding the Lordship of the word
                    <br/>
                    Demonstrating the influence of the spirit 
                </p>
                <span className='flex gap-4'>
                    <button className='bg-my-red text-white px-6 py-3 rounded-sm'>ABOUT US</button>
                    <button className='border-2 border-white rounded-sm text-white px-6 py-3'>Service Times</button>
                </span>
            </div>
            {/* <DeleteIcon className='bg-white'/> */}
        </div>
    )
}

export default Header