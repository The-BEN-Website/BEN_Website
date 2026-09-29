import React from "react";

// 8px red status dot; `pulsing` adds a ripple while a stream is actually live.
function LiveDot({ pulsing = false }) {
  return (
    <span aria-hidden="true" className="relative flex h-2 w-2">
      {pulsing && (
        <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 motion-safe:animate-ping" />
      )}
      <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
    </span>
  );
}

export default LiveDot;
