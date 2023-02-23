import React, {useState, useEffect} from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import ddata from './EventData'
import { List } from 'semantic-ui-react'
import Hero from './Hero'


function EventDeets () {

    const {id} = useParams()
    const thisItem = ddata.find(item => item.id === id)

    return (
        <div className="App font-my_font">
        <Hero />
            <div>
            <div className='flex'>
                <div className='flex-column'>
                    <div className=' md:w-96 md:h-60 mx-20 mt-20 px-5 py-5 h-full shadow-md'>
                    <h2 className='text-xl font-bold'>{thisItem.title}</h2>
                    <p className='mb-7'>Once on 1/2023 by 4:00pm</p>
                    <h2 className='text-xl font-bold'> Where:</h2>
                    <p>Admin</p>
                    <p>Lecture Hall 1</p>
                </div>
                <div>
                    <button className='rounded-md w-48 md:w-96 mx-20 bg-red-600 py-3 md:mx-20 md:mb-5 mt-5 text-white font-semibold'>
                        <a href="/event" className='mb-32'>Back</a>
                    </button>
                </div>
                <div>
                <button className='rounded-md w-48 md:w-96 mx-20 bg-red-600 py-3 md:mx-20 md:mb-5 mt-5 text-white font-semibold'> Add to Calendar</button>
                </div>
                <button className='rounded-md w-48 md:w-96 mx-20 bg-red-600 py-3 md:mx-20 text-white font-semibold'> Attending the meeting?</button>
                </div>
                <div className=' md:w-[600px] md:h-auto mx-20 mt-20 mb-10 px-5 py-5 h-full shadow-md'>
                
                    <img src={thisItem.image} className='rounded-lg mb-3' />         
                    <p className='mb-7'>Once on 1/2023 by 4:00pm</p>
                    <p className='mb-4'>Come join us for the 4:00pm service ibn the lecture hall 1 for food, trivia and fun</p>
                    <td className='w-80 h-[1px] bg-gray-200'/>
                    <p className='mt-4'>Join us at the Decipleship session at 4:00pm saturday service in the worship center</p>
                    <List bulleted>
                        <List.Item as='li'>Aple</List.Item>
                        <List.Item as='li'>Orange</List.Item>
                        <List.Item as='li'>Guava</List.Item>
                  </List>
                </div>
                

            </div>
            </div>
        </div>
      )
}

export default EventDeets

