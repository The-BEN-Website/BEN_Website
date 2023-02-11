import React from 'react'
import Header from './Home_Sections/Header';
import Words from './Home_Sections/Words';
import Experience from './Home_Sections/Experience';
import Community from './Home_Sections/Community'
import Discipleship from './Home_Sections/Discipleship'
import NewsLetter from './Home_Sections/Newsletter'

const Home = () => {
  return (
    <div className="App flex flex-col gap-20">
      <Header />
      <Words />
      <Experience />
      <Community />
      <Discipleship />
      <NewsLetter />
    </div>
  )
}

export default Home