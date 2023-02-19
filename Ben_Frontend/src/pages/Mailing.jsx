import React from 'react'
import Header from '../pages/Mailing_Section/Header'
import MailingList from '../pages/Mailing_Section/List'


const Mailing = () => {
  return (
    <div className="App flex flex-col gap-20">
        <Header />
        <MailingList />
    </div>
  )
}

export default Mailing