import React from 'react'
import Hero from '../sections/home/Hero';
import Welcome from '../sections/home/Welcome';
import JoinUs from '../sections/home/JoinUs';
import Branches from '../sections/home/Branches';
import Discipleship from '../sections/home/Discipleship';
import NewsLetter from './Home_Sections/Newsletter'

const Home = () => {
  return (
    <div className="App">
      <Hero />
      <Welcome />
      <JoinUs />
      <Branches />
      <Discipleship />
      {/* Legacy sections, replaced one by one during the UI rework */}
      <div className="flex flex-col gap-20">
        <NewsLetter />
      </div>
    </div>
  )
}

export default Home