import React from 'react'
// import Navbar from '../components/Navbar'
import Header from './Home_Sections/Header';
import Words from './Home_Sections/Words';
import Experience from './Home_Sections/Experience';
import Community from './Home_Sections/Community'
import Discipleship from './Home_Sections/Discipleship'
import NewsLetter from './Home_Sections/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="App flex flex-col gap-24">
      <Header />
      <Words />
      <Experience />
      <Community />
      <Discipleship />
      <NewsLetter />
      <Footer/>
    </div>
  )
}

export default Home