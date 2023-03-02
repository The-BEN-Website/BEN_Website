import React from 'react'

const Header = () => {

    return (
        <div className='flex flex-col h-[18rem] w-full font-my_font justify-center bg-background-red'>
        
            {/* main header content */}
            <div className = 'w-10/12 lg:w-5/6 lg:mx-auto md:mx-20 mt-20 flex flex-col items-center justify-center md:items-start gap-7 mx-auto' >
                <p className='text-white text-sm font-my_font md:w-2/3 w-10/12 text-center md:text-start uppercase underline underline-offset-1'>
                    Plan a Visit to our Centers
                </p>
                <h2 className='text-white text-5xl font-bold font-my_font text-center md:text-start sm:w-full lg:w-2/3'>Fellowship with Us!</h2>
            </div>
        </div>
    )
}

export default Header