import React from 'react'
import Hero from './Contact_Section/Hero'
import Form_Body from './Contact_Section/Form_Container'

const Contact = () => {
  return (
    <div className="App flex flex-col gap-14 font-my_font">
      <Hero />
      <Form_Body />
    </div>
  )
}

export default Contact