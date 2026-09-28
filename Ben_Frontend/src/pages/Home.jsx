import React from 'react'
import Hero from '../sections/home/Hero';
import Words from './Home_Sections/Words';
import Experience from './Home_Sections/Experience';
import Community from './Home_Sections/Community'
import Discipleship from './Home_Sections/Discipleship'
import NewsLetter from './Home_Sections/Newsletter'

const Home = () => {
  return (
    <div className="App flex flex-col gap-20 h-fit">
      <Hero />
      <Words />
      <Experience />
      <Community />
      <Discipleship />
      <NewsLetter />
    </div>
  )
}

export default Home