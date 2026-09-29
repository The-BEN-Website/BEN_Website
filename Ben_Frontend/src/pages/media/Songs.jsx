import React from "react";
import { IoMusicalNote } from "react-icons/io5";
import TrackListPage from "../../sections/media/TrackListPage";
import mediaTones from "../../sections/media/tones";
import { listSongs } from "../../api/songs";
import usePageMeta from "../../hooks/usePageMeta";

function Songs() {
  usePageMeta({
    title: "Songs",
    description: "Worship songs from the Believers Equipping Network music ministry. Listen or download.",
  });
  return (
    <TrackListPage
      title="Songs"
      load={listSongs}
      describe={(song) => song.singer}
      Icon={IoMusicalNote}
      tone={mediaTones.pink}
      emptyMessage="No songs yet. Check back soon."
      errorMessage="We couldn't load the songs"
    />
  );
}

export default Songs;
