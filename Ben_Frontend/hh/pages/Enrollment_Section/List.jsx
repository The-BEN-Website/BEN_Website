import React from 'react'
import Form from './Form'

const List = () => {
  return (
    <div className="h-[40rem] md:h-[17rem] lg:h-[17rem] w-full flex font-my_font ">
        <div className='flex flex-col lg:flex-row w-10/12 m-auto gap-10 lg:gap-[5rem] items-center text-black'>
        <Form />
        </div>
    </div>
  )
}

export default List