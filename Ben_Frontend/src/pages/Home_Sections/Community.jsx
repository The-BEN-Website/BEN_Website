import React from 'react'
import Community1 from '../../assets/Home_assets/Community1.png'
import Community2 from '../../assets/Home_assets/Community2.png'
import Community3 from '../../assets/Home_assets/Community3.png'

const Community = () => {
  return (
    <section id="community" class="p-6 w-full md:w-[45rem] lg:w-11/12 m-auto">
            <h2 class="text-3xl text-center font-semibold sm:text-4xl mb-6 text-my-black sm:text-center lg:text-left">Join the community</h2>
            <ul class="list-none mx-auto my-12 flex flex-col lg:flex-row items-center gap-8">
                <li class="w-11/12 md:w-10/12 h-[26rem] lg:w-5/6 flex flex-col items-start mx-auto span-through relative grid content-end drop-shadow-2xl">
                    <img src={Community1} alt="rocket" class="mb-6 w-full h-full absolute mix-blend-overlay "/>
                    <span className='mb-7'>
                      <h3 class="text-lg text-white mx-5 bg-blue-400 bg-opacity-100 w-fit px-5 font-semibold">Community</h3>
                      <p class="sm:block text-2xl text-white mx-5">The Power Of Vulnerability</p>
                    </span>
                </li>

                <li class="w-11/12 md:w-10/12 h-[26rem] lg:w-5/6 flex flex-col items-start mx-auto span-through relative grid content-end drop-shadow-2xl">
                    <img src={Community2} alt="rocket" class="mb-6 w-full h-full absolute mix-blend-overlay "/>
                    <span className='mb-7'>
                      <h3 class="text-lg text-white mx-5 bg-blue-400 bg-opacity-100 w-fit px-5 font-semibold">Act of Service</h3>
                      <p class="sm:block text-2xl text-white mx-5">Christmas At BEN </p>
                    </span>
                </li>

                <li class="w-11/12 md:w-10/12 h-[26rem] lg:w-5/6 flex flex-col items-start mx-auto span-through relative grid content-end drop-shadow-2xl">
                    <img src={Community3} alt="rocket" class="mb-6 w-full h-full absolute mix-blend-overlay "/>
                    <span className='mb-7'>
                      <h3 class="text-lg text-white mx-5 bg-blue-400 bg-opacity-100 w-fit px-5 font-semibold">Discipleship</h3>
                      <p class="sm:block text-2xl text-white mx-5">The Power Of Discipleship</p>
                    </span>
                </li>

            </ul>

        </section>
  )
}

export default Community