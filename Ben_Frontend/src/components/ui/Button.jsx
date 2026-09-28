import React from "react";
import { Link } from "react-router-dom";

const variants = {
  primary: "bg-primary text-white hover:bg-primary/90",
  secondary: "border border-line bg-white text-ink hover:bg-surface",
};

// Renders a router Link for internal paths, an <a> for external URLs,
// and a <button> when neither `to` nor `href` is given.
function Button({ variant = "primary", to, href, className = "", children, ...rest }) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-base leading-none transition-colors",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
    variants[variant],
    className,
  ].join(" ");

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}

export default Button;
