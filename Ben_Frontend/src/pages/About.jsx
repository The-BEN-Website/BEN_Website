import React from 'react'
import Header from './About_Section/Hero'
import Values from './About_Section/Values'
import Quotes from './About_Section/Quote'
import Believe from './About_Section/Believe'

const About = () => {
  return (
    <div className="App flex flex-col gap-24 font-my_font h-fit">
      <Header />
      <Values />
      <Quotes />
      <Believe />
    </div>
  )
}

export default About