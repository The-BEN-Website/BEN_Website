import React, { lazy } from "react";
import { Navigate } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Event = lazy(() => import("./pages/Events"));
const Giving = lazy(() => import("./pages/Giving"));
const Contact = lazy(() => import("./pages/Contact"));
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
const Media = lazy(() => import("./pages/Media"))
const MediaImages = lazy(() => import("./pages/media/Images"))
const ImageAlbum = lazy(() => import("./pages/media/ImageAlbum"))
const MediaSongs = lazy(() => import("./pages/media/Songs"))
const AudioTeachings = lazy(() => import("./pages/media/AudioTeachings"))
const MediaVideos = lazy(() => import("./pages/media/Videos"))
const MediaSermons = lazy(() => import("./pages/media/Sermons"))
const VideoWatch = lazy(() => import("./pages/media/VideoWatch"))


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
    path: "/media",
    element: <Media />,
  },
  {
    path: "/media/images",
    element: <MediaImages />,
  },
  {
    path: "/media/images/:album",
    element: <ImageAlbum />,
  },
  {
    path: "/media/songs",
    element: <MediaSongs />,
  },
  {
    path: "/media/audio",
    element: <AudioTeachings />,
  },
  {
    path: "/media/sermons",
    element: <MediaSermons />,
  },
  {
    path: "/media/videos",
    element: <MediaVideos />,
  },
  {
    path: "/media/videos/:id",
    element: <VideoWatch />,
  },
  {
    path: "/resources",
    element: <Navigate to="/media" replace />,
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
