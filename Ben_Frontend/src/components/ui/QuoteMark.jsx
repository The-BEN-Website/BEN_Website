import React from "react";

// Decorative quotation mark; the closing mark is the opening one rotated 180°.
function QuoteMark({ variant = "open", className = "" }) {
  return (
    <svg
      viewBox="0 0 40 34"
      aria-hidden="true"
      focusable="false"
      className={`fill-current ${variant === "close" ? "rotate-180" : ""} ${className}`}
    >
      <path d="M9 0h8l-1.5 34H0V24z" />
      <path d="M31 0h8l-1.5 34H22V24z" />
    </svg>
  );
}

export default QuoteMark;
