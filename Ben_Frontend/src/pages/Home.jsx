import React from 'react'
import Header from './Home_Sections/Header';
import Words from './Home_Sections/Words';
import Experience from './Home_Sections/Experience';
import Community from './Home_Sections/Community'
import Discipleship from './Home_Sections/Discipleship'

const Home = () => {
  return (
    <div className="App flex flex-col gap-24">
      <Header />
      <Words />
      <Experience />
      <Community />
      <Discipleship />
    </div>
  )
}

export default Home