import React, { lazy } from "react";
import { Navigate } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Event = lazy(() => import("./pages/Events"));
const Giving = lazy(() => import("./pages/Giving"));
const Contact = lazy(() => import("./pages/Contact"));
const Resources = lazy(() => import("./pages/Resources"));
const EventDeets = lazy(() => import("./pages/Events_Section/EventDeets"))
const ResourceDeets = lazy(() => import("./pages/Resources_Section/ResourceDeets"))
const Map = lazy(() => import("./pages/Map"))
const Payment = lazy(() => import("./pages/Payment"))
const Payment1 = lazy(() => import("./pages/Payment1"))
const items = lazy(() => import("../public/EventData"))
const Anniversary = lazy(() => import("../src/pages/Anniversary.jsx"))
const PrivacyPolicy = lazy(() => import("./pages/Legal/PrivacyPolicy"))
const TermsOfService = lazy(() => import("./pages/Legal/TermsOfService"))
const Live = lazy(() => import("./pages/Live"))


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
    element: <Giving />,
  },
  {
    path: "/resources",
    element: <Resources />,
  },
  {
    path: "/mailing",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/enroll",
    element: <Navigate to="/#discipleship" replace />,
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
    path: "/privacy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms",
    element: <TermsOfService />,
  },
  {
    path: "/live",
    element: <Live />,
  },
  {
    path: "*",
    element: <div>Not found</div>,
  },
];

export default AppRoutes;
