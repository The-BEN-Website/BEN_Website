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
        
      <div className="hidden md:block text-white mt-20 ml-10 absolute">
      <p className="text-2xl font-my_font uppercase font-bold justify-start items-start">
        Latest Messsage
      </p>
        <p className="font-my_font text-2xl md:text-7xl font-bold leading-7">
            Evangelism and Prayers
        </p>
        
        <p className="text-xl font-my_font pt-3">
        
        April 20th, 2023 By Pastor Esosa Enoyoze
        <div className='flex gap-2 mt-5 -space-y-1 cursor-pointer group hover:underline'>
        <a href={hero.file} target='_blank' className='flex gap-2 -space-y-1 cursor-pointer group hover:underline'>
        <PlayCircleOutlineIcon className='hover:underline text-red-800 text-5xl w-10 font-bold'/>
        <p className='group-hover:underline'>
         Listen to Message </p>
         </a>

         </div>
        </p>
      </div>
      <div className="md:hidden text-center text-white">
        <h2 className="font-my_font text-4xl sm:text-5xl mb-5 font-bold leading-7">
         Resources
        </h2>
        <p className="text-[22px] font-my_font">
        Heralding the Lordship of the word
        Demonstrating the influence 
        <p className='font-my_font'>of the spirit</p>
        </p>
      </div>
    </div>
  )
  }
  )
}

export default Hero