import React from 'react'

const Header = () => {

    return (
        <div className='flex flex-col h-[18rem] w-full font-my_font justify-center bg-background-red'>
        
            {/* main header content */}
            <div className = 'w-5/6 mx-auto mt-20 flex flex-col items-center justify-center md:items-start gap-7' >
                <p className='text-white text-sm font-my_font md:w-1/3 w-2/3 text-center md:text-start uppercase underline underline-offset-1 '>
                B.E.N discipleship School platform
                </p>
                <h2 className='text-white text-5xl font-bold font-my_font text-center md:text-start w-1/3'>B.E.N Registration</h2>
            </div>
        </div>
    )
}

export default Header