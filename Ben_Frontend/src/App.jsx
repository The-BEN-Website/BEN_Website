import React, { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AppRoutes from "./Router";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import OfflineBanner from "./components/OfflineBanner";
import PageLoader from "./components/ui/PageLoader";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/NavHead";
import ScrollManager from "./components/ScrollManager";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar />
      <ScrollManager />
      {/* Keyed by path so navigating away from a crashed page clears the error. */}
      <ErrorBoundary key={pathname}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {AppRoutes.map((route) => (
              <Route path={route.path} element={route.element} key={route.path} />
            ))}
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <Footer />
      <OfflineBanner />
    </>
  );
}

export default App;
