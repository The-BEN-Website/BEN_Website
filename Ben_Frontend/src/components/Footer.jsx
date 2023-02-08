import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='bg-footer-background h-[8rem] flex flex-col'>
        <div className='m-auto text-center text-black flex flex-col gap-y-3'>
        <span className='flex gap-6 justify-center'>
            <a href="#" className='p-3 bg-white rounded-full'><FacebookIcon fontSize="medium" /></a>
            <a href="#" className='p-3 bg-white rounded-full'><InstagramIcon fontSize="medium" /></a>
            <a href="#" className='p-3 bg-white rounded-full'><YouTubeIcon fontSize="medium" /></a>
        </span>
        <p className='font-semibold text-xl text-white'>Believers Equipping Network &copy; 2023</p>
        </div>
    </div>
  )
}

export default Footer