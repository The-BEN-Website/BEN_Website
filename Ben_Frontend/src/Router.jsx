import React, { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Event = lazy(() => import("./pages/Events"));
const Partnership = lazy(() => import("./pages/Partnership"));
const Contact = lazy(() => import("./pages/Contact"));
const Resources = lazy(() => import("./pages/Resources"));
const Mailing = lazy(() => import("./pages/Mailing"))
const Enroll = lazy(() => import("./pages/Enroll"))
const EventDeets = lazy(() => import("./pages/Events_Section/EventDeets"))
const ResourceDeets = lazy(() => import("./pages/Resources_Section/ResourceDeets"))
const Map = lazy(() => import("./pages/Map"))
const Payment = lazy(() => import("./pages/Payment"))
const Payment1 = lazy(() => import("./pages/Payment1"))
const items = lazy(() => import("../public/EventData"))
const Anniversary = lazy(() => import("../src/pages/Anniversary.jsx"))


const AppRoutes = [
  // {
  //   path: "/",
  //   element: <Anniversary />,
  // },
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
    path: "/giving",
    element: <Partnership />,
  },
  {
    path: "/resources",
    element: <Resources />,
  },
  {
    path: "/mailing",
    element: <Mailing />,
  },
  {
    path: "/enroll",
    element: <Enroll />,
  },
  {
    path: "/visit",
    element: <Map />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: `/event/:id`,
    element: <EventDeets />,
  },
  {
    path: `/resources/:id`,
    element: <ResourceDeets />,
  },
  {
    path: `/payment`,
    element: <Payment />,
  },
  {
    path: `/payment1`,
    element: <Payment1 />,
  },
  {
    path: "*",
    element: <div>Not found</div>,
  },
];

export default AppRoutes;
