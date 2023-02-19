import React from 'react'
import Header from './Enrollment_Section/Header'
import Headings from './Enrollment_Section/Heading'
import EnrollmentList from './Enrollment_Section/List'


const Enroll = () => {
  return (
    <div className="App flex flex-col gap-10">
        <Header />
        <Headings />
        <EnrollmentList />
    </div>
  )
}

export default Enroll