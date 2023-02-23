import React, {useState, useEffect} from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import ddata from './ResourcesData'
import { List } from 'semantic-ui-react'
import Hero from './Hero'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { VideoLibraryOutlined } from '@mui/icons-material';
import { Headphones } from '@mui/icons-material';
import { DownloadingOutlined } from '@mui/icons-material';




function EventDeets () {

    const {id} = useParams()
    const thisItem = ddata.find(item => item.id === id)

    return (
        <div className="App font-my_font">
        <Hero />
            <div className='flex'>
                
                    <div className='w-2/3 h-max mx-10 mt-20 px-5 py-5 shadow-md'>
                        <img src={thisItem.image} className='rounded-lg mb-3' />
                        <div className='flex gap-3 m-5 cursor-pointer'>
                        <a className='flex gap-1 cursor-pointer group hover:underline'>
                        <VideoLibraryOutlined className='hover:underline text-red-800 text-5xl w-10 font-bold'/>
                        <p className='group-hover:underline'>
                         Watch </p>
                         </a>
                        <a className='flex gap-1 cursor-pointer group hover:underline'>
                        <Headphones className='hover:underline text-red-800 text-5xl w-10 font-bold'/>
                        <p className='group-hover:underline'>
                         Listen </p>
                         </a>
                        <a className='flex gap-1 cursor-pointer group hover:underline'>
                        <DownloadingOutlined className='hover:underline text-red-800 text-5xl w-10 font-bold'/>
                        <p className='group-hover:underline'>
                         Download </p>
                         </a>
                
                         </div>
                         <p className='font-my_font'>Symphony

                         Romans 12:1
                         Reasonable service is the way God wants to be served.
                         If you serve  Reasonable service is the way God wants to be served.
                         If you serve
                         It is not about eloquen Reasonable service is the way God wants to be served.
                         If you serve
                         It is not about eloquence. Reasonable service is the way God wants to be served.
                         If you serve
                         It is not about eloquence. Reasonable service is the way God wants to be served.
                         If you serve
                         It is not about eloquence.ce.
                         It is not about eloquence. If you get the omans 12:1
                         Reasonable service is the way God wants to be served.
                         If you serve  Reasonable service is the way God wants to be served.
                         If you serve
                         It is not about eloquen Reasonable service is the way God wants to be served.
                         If you serve
                         It is not about eloquence. Reasonable service is the way God wants to be served.
                         If you serve
                         It is not about eloquence. Reasonable service is the way God wants to be served.
                         If you serve
                         It is not about eloquence.ce.
                         It is not about eloquence. If you get the omans 12:1
                         Reasonable service is the way God wants to be served.
                         If you serve  Reasonable service is the way God wants to be served.
                         If you serve
                         It is not about eloquen Reasonable service is the way God wants to be served.
                         If you serve
                         It is not about eloquence. Reasonable service is the way God wants to be served.
                         If you serve
                         It is not about eloquence. Reasonable service is the way God wants to be served.
                         If you serve
                         It is not about eloquence.ce.
                         It is not about eloquence. If you get the protocol right, it does not really matter what </p>
                    </div>
                <div className='h-auto mt-20 mb-10 px-5 py-5 shadow-md'>

                    <h2 className='uppercase font-bold m-3'>In this series</h2>
                    <td className='hidden md:block md:w-80 h-[1px] bg-gray-200'/>
                    <p className='mt-7'>
                    <div className='flex gap-2 mt-5 -space-y-1 cursor-pointer group hover:underline'>
                        <a className='flex gap-2 -space-y-3 cursor-pointer group hover:underline'>
                        <PlayCircleOutlineIcon className='hover:underline text-red-800 text-5xl w-10 font-bold'/>
                        <p className='font-my_font group-hover:underline text-xl font-extrabold'>
                            His Silence Is Not Absence 
                            <p className='font-medium font-my_font'>Listen to message</p>
                        </p>
                     </a>
            
                     </div>
                    </p>
                    <p className='mt-7'>
                    <div className='flex gap-2 mt-5 -space-y-1 cursor-pointer group hover:underline'>
                        <a className='flex gap-2 -space-y-3 cursor-pointer group hover:underline'>
                        <PlayCircleOutlineIcon className='hover:underline text-red-800 text-5xl w-10 font-bold'/>
                        <p className='font-my_font group-hover:underline text-xl font-extrabold'>
                            His Silence Is Not Absence 
                            <p className='font-medium font-my_font'>Listen to message</p>
                        </p>
                     </a>
            
                     </div>
                    </p>
                    <p className='mt-7'>
                    <div className='flex gap-2 mt-5 -space-y-1 cursor-pointer group hover:underline'>
                        <a className='flex gap-2 -space-y-3 cursor-pointer group hover:underline'>
                        <PlayCircleOutlineIcon className='hover:underline text-red-800 text-5xl w-10 font-bold'/>
                        <p className='font-my_font group-hover:underline text-xl font-extrabold'>
                            His Silence Is Not Absence 
                            <p className='font-medium font-my_font'>Listen to message</p>
                        </p>
                     </a>
            
                     </div>
                    </p>
                    <p className='mt-7'>
                    <div className='flex gap-2 mt-5 -space-y-1 cursor-pointer group hover:underline'>
                        <a className='flex gap-2 -space-y-3 cursor-pointer group hover:underline'>
                        <PlayCircleOutlineIcon className='hover:underline text-red-800 text-5xl w-10 font-bold'/>
                        <p className='font-my_font group-hover:underline text-xl font-extrabold'>
                            His Silence Is Not Absence 
                            <p className='font-medium font-my_font'>Listen to message</p>
                        </p>
                     </a>
            
                     </div>
                    </p>
                    <p className='mt-7'>
                    <div className='flex gap-2 mt-5 -space-y-1 cursor-pointer group hover:underline'>
                        <a className='flex gap-2 -space-y-3 cursor-pointer group hover:underline'>
                        <PlayCircleOutlineIcon className='hover:underline text-red-800 text-5xl w-10 font-bold'/>
                        <p className='font-my_font group-hover:underline text-xl font-extrabold'>
                            His Silence Is Not Absence 
                            <p className='font-medium font-my_font'>Listen to message</p>
                        </p>
                     </a>
            
                     </div>
                    </p>
                    <p className='mt-7'>
                    <div className='flex gap-2 mt-5 -space-y-1 cursor-pointer group hover:underline'>
                        <a className='flex gap-2 -space-y-3 cursor-pointer group hover:underline'>
                        <PlayCircleOutlineIcon className='hover:underline text-red-800 text-5xl w-10 font-bold'/>
                        <p className='font-my_font group-hover:underline text-xl font-extrabold'>
                            His Silence Is Not Absence 
                            <p className='font-medium font-my_font'>Listen to message</p>
                        </p>
                     </a>
            
                     </div>
                    </p>
                    <div>
                <button className='rounded-md w-20 md:w-[10rem] mx-3 bg-red-600 py-3 md:mx-3 md:mb-5 mt-5 text-white font-semibold'>
                    <a href="/event" className='mb-32'>Back</a>
                </button>
            </div>
                </div>
                

            </div>
        </div>
      )
}

export default EventDeets

