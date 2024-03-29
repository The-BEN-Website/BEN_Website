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
        <div className="flex-column md:flex">
          <div className="md:w-3/5 h-max mx-5 md:mx-10 mt-10 px-5 py-5 shadow-md">
            <img src={thisItem.image} className="rounded-lg mb-3 h-[30rem]" />
            <div className="flex gap-3 md:m-5 my-5 cursor-pointer">
              <a
                href={thisItem.link}
                target="_blank"
                className="flex gap-1 cursor-pointer group hover:underline"
              >
                <VideoLibraryOutlined className="hover:underline text-red-800 text-5xl w-10 font-bold" />
                <p className="group-hover:underline">Play</p>
              </a>
              <a
                href={thisItem.link}
                target="_blank"
                className="flex gap-1 cursor-pointer group hover:underline"
              >
                <Headphones className="hover:underline text-red-800 text-5xl w-10 font-bold" />
                <p className="group-hover:underline">Listen</p>
              </a>
              <a
                href={thisItem.link}
                target="_blank"
                className="flex gap-1 cursor-pointer group hover:underline"
              >
                <DownloadingOutlined className="hover:underline text-red-800 text-5xl w-10 font-bold" />
                <p className="group-hover:underline">Download</p>
              </a>
            </div>
            <p className="font-my_font mb-1">
              Symphony for <b>{thisItem.title} </b>
            </p>
            <p className="font-my_font">{thisItem.descripition}</p>
          </div>
          <div className="h-auto md:mt-10 mb-10 px-5 py-5 shadow-md">
            <h2 className="uppercase font-bold m-3">Older Messages</h2>
            <td className="hidden md:block md:w-80 h-[1px] bg-gray-200" />
            <p className="mt-7">
              <div className="flex gap-2 mt-5 -space-y-1 cursor-pointer group hover:underline">
                <a
                  href="https://whyp.it/tracks/88535/christian-service?token=I6vkc"
                  className="flex gap-2 -space-y-3 cursor-pointer group hover:underline"
                >
                  <PlayCircleOutlineIcon className="hover:underline text-red-800 text-5xl w-10 font-bold" />
                  <p className="font-my_font group-hover:underline text-xl font-extrabold">
                    Angles - Are they not part of Ministering Spirits?
                    <p className="font-medium font-my_font">
                      Listen to message
                    </p>
                  </p>
                </a>
              </div>
            </p>
            <p className="mt-7">
              <div className="flex gap-2 mt-5 -space-y-1 cursor-pointer group hover:underline">
                <a className="flex gap-2 -space-y-3 cursor-pointer group hover:underline">
                  <PlayCircleOutlineIcon className="hover:underline text-red-800 text-5xl w-10 font-bold" />
                  <p className="font-my_font group-hover:underline text-xl font-extrabold">
                    Christian Service - 3
                    <p className="font-medium font-my_font">
                      Listen to message
                    </p>
                  </p>
                </a>
              </div>
            </p>
            <p className="mt-7">
              <div className="flex gap-2 mt-5 -space-y-1 cursor-pointer group hover:underline">
                <a className="flex gap-2 -space-y-3 cursor-pointer group hover:underline">
                  <PlayCircleOutlineIcon className="hover:underline text-red-800 text-5xl w-10 font-bold" />
                  <p className="font-my_font group-hover:underline text-xl font-extrabold">
                    Christian Service - 2
                    <p className="font-medium font-my_font">
                      Listen to message
                    </p>
                  </p>
                </a>
              </div>
            </p>
            <p className="mt-7">
              <div className="flex gap-2 mt-5 -space-y-1 cursor-pointer group hover:underline">
                <a
                  href="../../assets/Resource_assets/Christian Service.m4a"
                  className="flex gap-2 -space-y-3 cursor-pointer group hover:underline"
                >
                  <PlayCircleOutlineIcon className="hover:underline text-red-800 text-5xl w-10 font-bold" />
                  <p className="font-my_font group-hover:underline text-xl font-extrabold">
                    Christian Service 1
                    <p className="font-medium font-my_font">
                      Listen to message
                    </p>
                  </p>
                </a>
              </div>
            </p>
            <div>
              <button className="rounded-md w-20 md:w-[10rem] mx-3 bg-red-600 py-3 md:mx-3 md:mb-5 mt-5 text-white font-semibold">
                <a href="/resources" className="mb-32">
                  Back
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default EventDeets

