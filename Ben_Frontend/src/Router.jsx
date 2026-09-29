import React from "react";
import lazyWithRetry from "./lib/lazyWithRetry";
import { Navigate } from "react-router-dom";

const Home = lazyWithRetry(() => import("./pages/Home"));
const About = lazyWithRetry(() => import("./pages/About"));
const Giving = lazyWithRetry(() => import("./pages/Giving"));
const Contact = lazyWithRetry(() => import("./pages/Contact"));
const PrivacyPolicy = lazyWithRetry(() => import("./pages/Legal/PrivacyPolicy"))
const TermsOfService = lazyWithRetry(() => import("./pages/Legal/TermsOfService"))
const Live = lazyWithRetry(() => import("./pages/Live"))
const NotFound = lazyWithRetry(() => import("./pages/NotFound"))
const Media = lazyWithRetry(() => import("./pages/Media"))
const MediaImages = lazyWithRetry(() => import("./pages/media/Images"))
const ImageAlbum = lazyWithRetry(() => import("./pages/media/ImageAlbum"))
const MediaSongs = lazyWithRetry(() => import("./pages/media/Songs"))
const AudioTeachings = lazyWithRetry(() => import("./pages/media/AudioTeachings"))
const MediaVideos = lazyWithRetry(() => import("./pages/media/Videos"))
const MediaSermons = lazyWithRetry(() => import("./pages/media/Sermons"))
const VideoWatch = lazyWithRetry(() => import("./pages/media/VideoWatch"))

// Old addresses from the previous site redirect to their closest new page.
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
    element: <Navigate to="/media" replace />,
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
    element: <Navigate to="/#branches" replace />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: `/event/:id`,
    element: <Navigate to="/media" replace />,
  },
  {
    path: `/resources/:id`,
    element: <Navigate to="/media" replace />,
  },
  {
    path: `/payment`,
    element: <Navigate to="/giving" replace />,
  },
  {
    path: `/payment1`,
    element: <Navigate to="/giving" replace />,
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
    element: <NotFound />,
  },
];

export default AppRoutes;
