import React, {useState, useEffect} from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import ddata from './EventData'
import { List } from 'semantic-ui-react'
import Hero from './Hero'


function EventDeets () {

    const {id} = useParams()
    const thisItem = ddata.find(item => item.id === id)

    return (
      <div className="App flex flex-col gap-6 font-my_font">
        <Hero />
        <div>
          <div className="flex-column md:flex lg:gap-20">
            <div className="hidden md:block lg:ml-10 lg:-mr-20 flex-column lg:max-w-max md:w-2/3">
              <div className="mx-10 lg:w-96 md:w-60 md:h-60 md:mx-10 items-center justify-center mt-20 px-5 py-5 h-full shadow-md">
                <h2 className="text-xl font-bold">{thisItem.title}</h2>
                <p className="mb-7">Once on 1/2023 by 4:00pm</p>
                <h2 className="text-xl font-bold"> Where:</h2>
                <p>Admin</p>
                <p>Lecture Hall 1</p>
              </div>
              <div>
                <button className="hidden md:block btneffect outline items-center px-5 md:px-0 w-56 justify-center rounded-md lg:w-96 md:w-50 ml-20  md:ml-[60px] bg-[#F74946] py-3 lg:ml-10 mt-5 mb-5 text-white font-semibold">
                  {" "}
                  Add to Calendar
                </button>
              </div>
              <div>
                <button className="btneffectred hidden md:block rounded-md px-5 md:px-0 items-center w-56 justify-center lg:w-96 md:w-50 ml-20 md:ml-[60px] bg-white py-3 lg:ml-10 mb-5  text-[#F74946] outline font-semibold">
                  {" "}
                  Attending the meeting?
                </button>
              </div>

              <button className="btneffect hidden md:block rounded-md w-48 lg:w-96 md:w-50 ml-20 md:ml-[60px] py-3 lg:ml-10 mb-5 lg:pl-0 md:pl-5  text-[#F74946] font-semibold">
                <a href="/event" className="mb-32">
                  Go back to the Events Page
                </a>
              </button>
            </div>
            <div className=" md:max-w-max md:h-auto md:mr-10 md:mt-20 mt-10 mb-10 px-5 py-5 h-full shadow-md">
              <img src={thisItem.image} className="rounded-lg mb-3" />
              <p className="mb-7">Once on 1/2023 by 4:00pm</p>
              <p className="mb-4">
                Come join us for the 4:00pm service ibn the lecture hall 1 for
                food, trivia and fun
              </p>
              <td className="w-80 h-[1px] bg-gray-200" />
              <p className="mt-4">
                Join us at the Discipleship session at 4:00pm saturday service in
                the worship center
              </p>
              <List bulleted>
                <List.Item as="li">Come and be edified</List.Item>
                <List.Item as="li">Come and be blessed</List.Item>
                <List.Item as="li">Come with a heart to recieve</List.Item>
              </List>
            </div>
            <div className="md:hidden flex-column">
              <div className="mx-3 lg:w-96 items-center justify-center mt-5 mb-10 px-5 py-5 h-full shadow-md">
                <h2 className="text-xl font-bold">{thisItem.title}</h2>
                <p className="mb-7">Once on 1/2023 by 4:00pm</p>
                <h2 className="text-xl font-bold"> Where:</h2>
                <div className="flex relative">
                  <p>
                    Admin
                    <p className="max-w-max">Lecture Hall 1</p>
                  </p>
                  <button className="absolute -bottom-[20px] right-0 btneffect outline items-end w-[130px] rounded-md justify-end bg-[#F74946] py-3  mt-5 mb-5 text-white font-semibold">
                    {" "}
                    Add to Calendar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default EventDeets

