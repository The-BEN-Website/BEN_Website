import React from 'react'

const Form = () => {
  return (
    <form className="w-11/12 lg:w-1/2 h-[36rem] bg-white rounded drop-shadow-[0_35px_35px_rgba(0,0,0,0.13)] flex flex-col gap-6 m-auto justify-center">
      <span className="flex flex-col w-10/12 mx-auto ">
        <label className="font-my_font">Name</label>
        <input type="text" placeholder="Enter Your Name" className="text-gray-400 border border-gray-200 rounded w-full py-3 px-2 font-my_font"/>
      </span>

      <span className="flex flex-col w-10/12 mx-auto ">
        <label className="font-my_font">Email</label>
        <input type="email" placeholder="Enter Your Email" className="text-gray-400 border border-gray-200 rounded w-full py-3 px-2 font-my_font"/>
      </span>

      <span className="flex flex-col w-10/12 mx-auto ">
        <label className="font-my_font">Message</label>
        <textarea rows="8" className="text-gray-400 border border-gray-200 rounded w-full py-3 px-2 font-my_font">Message</textarea>
      </span>

      <button className="text-white bg-my-red w-10/12 mx-auto py-3 rounded font-my_font">Submit</button>
    </form>
  )
}

export default Form