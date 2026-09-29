import React from "react";
import { IoMusicalNote } from "react-icons/io5";
import TrackListPage from "../../sections/media/TrackListPage";
import mediaTones from "../../sections/media/tones";
import { listSongs } from "../../api/songs";

function Songs() {
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
