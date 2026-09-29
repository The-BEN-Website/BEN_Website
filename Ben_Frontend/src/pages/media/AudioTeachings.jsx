import React from "react";
import { IoMic } from "react-icons/io5";
import TrackListPage from "../../sections/media/TrackListPage";
import mediaTones from "../../sections/media/tones";
import { listAudioTeachings } from "../../api/audio";

const publishedFormat = new Intl.DateTimeFormat(undefined, {
  day: "numeric",
  month: "short",
  year: "numeric",
});

function AudioTeachings() {
  return (
    <TrackListPage
      title="Audio"
      load={listAudioTeachings}
      describe={(teaching) =>
        teaching.category ?? publishedFormat.format(new Date(teaching.published_at))
      }
      Icon={IoMic}
      tone={mediaTones.violet}
      emptyMessage="No teachings have been uploaded yet. Recordings of our teachings will appear here — check back soon."
      errorMessage="We couldn't load the teachings"
    />
  );
}

export default AudioTeachings;
