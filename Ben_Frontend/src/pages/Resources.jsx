import React from 'react'
import Header from './Resources_Section/Hero'
import Resorces from './Resources_Section/Resorces'
import { Route, Routes } from 'react-router-dom'


const Resources = () => {
    return (
        <div className="App flex flex-col gap-20 font-my_font">
        
        <Header />
        <Resorces />
        
        
        </div>
    )
}
export default Resources