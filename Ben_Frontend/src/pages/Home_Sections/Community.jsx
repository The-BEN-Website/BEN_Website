import React from 'react'
import BackgroundImage from '../../assets/Home_assets/newBackground1.png' 

const Community = () => {
  return (
    <div className='border border-red-500 h-[25rem]'>
      <h2>Join the Community</h2>
      <div className='w-full h-[20rem] border border-blue-500'>
        <div className='border border-green-600 w-1/3 h-full'>
          <img
          src = {BackgroundImage}
          className="w-[29.5rem] h-[19.8rem] absolute mix-blend-overlay object-fill"
          alt=""
          />
          <span className="self-end">
            <p>Community</p>
            <p>The Power Of Vulnerability</p>
          </span>
        </div>

        {/* <span>
          <img
                src={BackgroundImage}
                className="absolute w-full h-full mix-blend-overlay object-fill md:hidden"
                alt=""
              />
        </span>

        <span>
          <img
              src={BackgroundImage}
              className="absolute w-full h-full mix-blend-overlay object-fill md:hidden"
              alt=""
            />
        </span> */}
      </div>
    </div>
  )
}

export default Community