import React from 'react'
import Form from './Form'
import Info from './Info'


const Form_Container = () => {
  return (
    <div className="flex flex-col lg:flex-row w-10/12 h-auto m-auto mb-10 gap-10">
      <Form />
      <Info />
    </div>
  )
}

export default Form_Container