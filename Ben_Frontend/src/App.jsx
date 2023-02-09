import React, { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./Router";
import "./App.css";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'


function App() {

  return (
    <>
    <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        { <Routes>
          {AppRoutes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Routes> }
        
        
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
