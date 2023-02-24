import React from 'react'
import Header from '../pages/Mailing_Section/Header'
import Header2 from '../pages/Mailing_Section/HeaderRes'
import MailingList from '../pages/Mailing_Section/List'


const Mailing = () => {
  return (
    <div className="App flex flex-col gap-10 h-fit">
        <Header />
        <Header2 />
        <MailingList />
    </div>
  )
}

export default Mailing