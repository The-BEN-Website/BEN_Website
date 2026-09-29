import React from "react";

// Light bordered panel used to frame forms and their confirmation states.
function Card({ className = "", children }) {
  return (
    <div className={`rounded-[20px] border border-card-line bg-card ${className}`}>{children}</div>
  );
}

export default Card;
