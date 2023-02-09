import React, { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Event = lazy(() => import("./pages/Events"));
const Partnership = lazy(() => import("./pages/Partnership"));
const Contact = lazy(() => import("./pages/Contact"));
const Resources = lazy(() => import("./pages/Resources"));

const AppRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/event",
    element: <Event />,
  },
  {
    path: "/partnership",
    element: <Partnership/>,
  },
  {
    path: "/resources",
    element: <Resources />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <div>Not found</div>,
  },
];

export default AppRoutes;
