import React from 'react'
import Hero from '../sections/home/Hero';
import Welcome from '../sections/home/Welcome';
import Experience from './Home_Sections/Experience';
import Community from './Home_Sections/Community'
import Discipleship from './Home_Sections/Discipleship'
import NewsLetter from './Home_Sections/Newsletter'

const Home = () => {
  return (
    <div className="App">
      <Hero />
      <Welcome />
      {/* Legacy sections, replaced one by one during the UI rework */}
      <div className="flex flex-col gap-20">
        <Experience />
        <Community />
        <Discipleship />
        <NewsLetter />
      </div>
    </div>
  )
}

export default Home