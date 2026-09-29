import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./Router";
import "./App.css";
import PageLoader from "./components/ui/PageLoader";
import Footer from "./components/Footer";
import Back from "./components/BackBtn";
import Navbar from "./components/Navbar/NavHead";
import ScrollManager from "./components/ScrollManager";

function App() {
  return (
    <>
      <Navbar />
      <ScrollManager />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {AppRoutes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Routes>
      </Suspense>
      <Back />
      <Footer />
    </>
  );
}

export default App;
