import React from "react";
import VideoListPage from "../../sections/media/VideoListPage";
import usePageMeta from "../../hooks/usePageMeta";

function Sermons() {
  usePageMeta({
    title: "Sermons",
    description: "Watch sermons and messages from Believers Equipping Network services.",
  });
  return <VideoListPage type="sermons" />;
}

export default Sermons;
