import React from "react";
import { MdCheck } from "react-icons/md";
import Button from "./Button";

// Confirmation shown in place of a form after it's submitted.
function SuccessPanel({ headingId, headingRef, title, message, actionLabel, onAction, className = "" }) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`} role="status">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
        <MdCheck aria-hidden="true" size={30} />
      </span>
      <h2
        id={headingId}
        ref={headingRef}
        tabIndex={-1}
        className="mt-6 text-2xl font-semibold text-black focus:outline-none"
      >
        {title}
      </h2>
      <p className="mt-4 text-body font-medium text-secondary">{message}</p>
      <Button className="mt-8 w-full" onClick={onAction}>
        {actionLabel}
      </Button>
    </div>
  );
}

export default SuccessPanel;
