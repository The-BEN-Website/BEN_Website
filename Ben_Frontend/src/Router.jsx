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
const items = lazy(() => import("../public/EventData"))


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
    path: "/giving",
    element: <Partnership/>,
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
    element: <EventDeets />
  },
  {
    path: `/resources/:id`,
    element: <ResourceDeets />
  },
  {
    path: "*",
    element: <div>Not found</div>,
  },

];

export default AppRoutes;
