import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChurchIcon from '@mui/icons-material/Church';
import LaptopIcon from '@mui/icons-material/Laptop';
import EventIcon from '@mui/icons-material/Event';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Experience = () => {
  return (
    <div className='bg-my-black lg:bg-grey-background h-[75rem] md:h-[60rem] lg:h-[30rem] w-full flex font-my_font'>
        {/* flex-col flex-col-reverse md:flex-row items-center justify-center m-auto gap-5 md:gap-3 */}
        <div className='flex flex-col lg:flex-row w-10/12 m-auto gap-10 items-center text-white lg:text-my-black'>
            {/* first div */}
            <div className='flex flex-col gap-3 text-center lg:text-left'>
                <h2 className='text-3xl font-bold font-my_font'>Experience The Believers Equipping Network</h2>
                <p className='text-lg font-my_font'>There are several ways to participate in Mariners’ worship experiences. Whatever your comfort level, there are opportunities for you to join in community and draw nearer to Jesus.</p>
            </div>

            {/* second div with 2 items */}
            <div className='flex flex-col gap-6'>
                <span className='flex flex-col gap-3'>
                    <LocationOnIcon fontSize="large" className='text-my-red' />
                    <h3 className='text-xl font-semibold font-my_font'>Plan a visit</h3>
                    <p className="font-my_font">We gather every weekend as a church to be inspired to follow Jesus. We would love for you to be our guest.</p>
                    <a href="#" className='flex'>
                        <p className='text-base font-semibold underline font-my_font'>Learn More
                        </p>
                    </a>
                </span>
                <span className='flex flex-col gap-3'>
                    <ChurchIcon fontSize="large" className='text-my-red'/>
                    <h3 className='text-xl font-semibold font-my_font'>Church Gathering</h3>
                    <p className="font-my_font">Join us as we gather at one of our believers equipping network campuses..</p>
                    <a href="#">
                        <p className='text-base font-semibold underline font-my_font'>Plan a Visit</p>
                    </a>
                </span>
            </div>

            {/* third div with 2 items */}
            <div className='flex flex-col gap-6'>
                <span className='flex flex-col gap-3'>
                    <LaptopIcon fontSize="large" className='text-my-red' />
                    <h3 className='text-xl font-semibold font-my_font'>Believers Online</h3>
                    <p className="font-my_font">We gather every weekend as a church to be inspired to follow Jesus. We would love for you to be our guest.</p>
                    <a href="#">
                        <p className='text-base font-semibold underline font-my_font'>Learn More</p>
                    </a>
                </span>
                <span className='flex flex-col gap-3'>
                    <EventIcon fontSize="large" className='text-my-red'/>
                    <h3 className='text-xl font-semibold font-my_font'>Events</h3>
                    <p className="font-my_font">Join us as we gather at one of our believers equipping network campuses..</p>
                    <a href="#">
                        <p className='text-base font-semibold underline font-my_font'>Plan an Event</p>
                    </a>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Experience