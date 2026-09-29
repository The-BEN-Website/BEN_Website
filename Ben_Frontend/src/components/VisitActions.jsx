import React from "react";
import Button from "./ui/Button";
import LiveDot from "./ui/LiveDot";
import useAsync from "../hooks/useAsync";
import { getLiveStreamStatus } from "../api/liveStream";

// "Join Us This Sunday" (to the home page's branch list) and a live-aware
// "Watch Live / Watch Online" button, used in page heroes.
function VisitActions({ className = "" }) {
  const { data: liveStatus } = useAsync(getLiveStreamStatus);
  const isLive = Boolean(liveStatus?.is_live);

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <Button to="/#branches">Join Us This Sunday</Button>
      <Button to="/live" variant="secondary">
        {isLive ? "Watch Live" : "Watch Online"}
        <LiveDot pulsing={isLive} />
      </Button>
    </div>
  );
}

export default VisitActions;
