import React, {useState} from 'react'
import BackgroundImage from '../../assets/Resource_assets/image.webp'
import BackgroundImage1 from '../../assets/Home_assets/Header.webp'
import ddata from './ResourcesDataLatest'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';


//make last p dynamic


const Hero = () => {
  const [hero, setHero] = useState(ddata)
  return hero.map((hero) => {  
  return (
    <div key={hero.id['1']} className="flex bg-gradient-to-r from-transparent to-red-900 items-center justify-start font-my_font relative h-[30rem] w-full
    ">
        <img
        src={BackgroundImage1}
        className="absolute h-full mix-blend-overlay object-fill md:hidden"
        alt=""
        />
        <img
        src={BackgroundImage}
        className="hidden absolute md:flex w-1/2 h-full items-start mix-blend-overlay"
        alt=""
        />
        
      <div className="text-white mt-20 ml-10 absolute">
      <p className="text-2xl font-my_font uppercase font-bold justify-start items-start">
        Latest Messsage
      </p>
        <p className="font-my_font text-2xl sm:text-8xl font-bold leading-7">
         Navigating Our New World
        </p>
        
        <p className="text-xl font-my_font">
        
        Jan 1, 2023 By Pastor Esosa 
        <div className='flex gap-2 mt-5 -space-y-1 cursor-pointer group hover:underline'>
        <a href={hero.file} className='flex gap-2 -space-y-1 cursor-pointer group hover:underline'>
        <PlayCircleOutlineIcon className='hover:underline text-red-800 text-5xl w-10 font-bold'/>
        <p className='group-hover:underline'>
         Listen to Message </p>
         </a>

         </div>
        </p>
      </div>
    </div>
  )
  }
  )
}

export default Hero