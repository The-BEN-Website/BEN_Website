import React from 'react'
import Header from './Events_Section/Hero'
import Evets from './Events_Section/Evets'
import { Route, Routes } from 'react-router-dom'


const Events = () => {
    return (
        <div className="App flex flex-col gap-20 font-my_font h-fit">
        
        <Header />
        <Evets />
        
        
        </div>
    )
}
export default Events