import React from 'react'
import Header from './Payment_Section/Header'
import PaymentMethod from './Payment_Section/App'

const Payment = () => {
  return (
    <div className="App flex flex-col gap-10 h-fit">
        <Header />
        <PaymentMethod />
    </div>
  )
}

export default Payment