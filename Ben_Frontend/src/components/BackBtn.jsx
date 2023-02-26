import React from 'react'
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';

const BackBtn = () => {
  return (
    <div>
        <button className="bg-red-400 text-white border p-1 rounded-full w-fit h-fit underline fixed bottom-20 right-5">
            <a href="#">
              <ExpandLessOutlinedIcon/>
            </a>
        </button>
    </div>
  )
}

export default BackBtn