import React from 'react'
import Header from './Partner/Header'
import Partner from './Partner/Partner'
import Others from "./Partner/Others"
import Directions from './Partner/Directions'

const Partnership = () => {
  return (
    <div className='text-xl font-my_font h-fit'>
      <Header />
      <Partner />
      <hr className='bg-my-red h-[0.15rem]'/>
      <Others />
      <Directions />
    </div>
  )
}

export default Partnership