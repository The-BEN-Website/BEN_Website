import React, { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./Router";
import "./App.css";
import Loader from '../src/assets/Home_assets/Loader.gif'
import Footer from './components/Footer'
import Back from './components/BackBtn'
import Navbar from './components/Navbar/NavHead'

function App() {

  return (
    <>
    {/* <Nav /> */}
    <Navbar />
      <Suspense fallback={
      <div className="flex flex-col justify-center items-center">
        <img src={Loader} className="w-40 h-40" />
        <p className="text-2xl font-bold mb-10">Page is Loading...</p>
      </div>
      }>
        { <Routes>
          {AppRoutes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Routes> }
      </Suspense>
      <Back />
      <Footer />
    </>
  );
}

export default App;
