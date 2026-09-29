import React from "react";
import VideoListPage from "../../sections/media/VideoListPage";
import usePageMeta from "../../hooks/usePageMeta";

function Videos() {
  usePageMeta({
    title: "Videos",
    description: "Worship, events and more videos from Believers Equipping Network.",
  });
  return <VideoListPage type="videos" />;
}

export default Videos;
