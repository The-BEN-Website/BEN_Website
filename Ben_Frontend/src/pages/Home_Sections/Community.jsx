import React from 'react'
import Community1 from '../../assets/Home_assets/Community1.png'
import Community2 from '../../assets/Home_assets/Community2.png'
import Community3 from '../../assets/Home_assets/Community3.png'

const Community = () => {
  return (
    <section id="community" class="p-6 w-10/12 m-auto">
            <h2 class="text-2xl font-semibold sm:text-5xl mb-6 text-my-black ">
            Join the community
            </h2>
            <ul class="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
                <li class="w-2/3 sm:w-5/6 flex flex-col items-start border border-solid border-slate-900 mx-auto">
                    <img src={Community1} alt="rocket" class="mb-6 w-full h-2/4"/>
                    <h3 class="text-lg text-my-black mx-5">Community</h3>
                    <p class="hidden sm:block text-2xl text-my-black mx-5">The Power Of Vulnerability</p>
                    <p class="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">Affordable Exploration</p>
                </li>

                <li class="w-2/3 sm:w-5/6 flex flex-col items-start border border-solid border-slate-900 mx-auto">
                    <img src={Community2} alt="rocket" class="mb-6 w-full h-2/4"/>
                    <h3 class="text-lg text-my-black mx-5">Serve</h3>
                    <p class="hidden sm:block text-2xl text-my-black mx-5">Chistmas At Believers Equipping Network </p>
                    <p class="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">Affordable Exploration</p>
                </li>

                <li class="w-2/3 sm:w-5/6 flex flex-col items-start border border-solid border-slate-900 mx-auto">
                    <img src={Community3} alt="rocket" class="mb-6 w-full h-2/4"/>
                    <h3 class="text-lg text-my-black mx-">Discipleship</h3>
                    <p class="hidden sm:block text-2xl text-my-black mx-5">The Power Of Worship</p>
                    <p class="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">Affordable Exploration</p>
                </li>

            </ul>

        </section>
  )
}

export default Community