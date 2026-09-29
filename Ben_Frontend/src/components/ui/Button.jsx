import React from "react";
import { Link } from "react-router-dom";

const variants = {
  primary: "bg-primary text-white hover:bg-primary/90",
  secondary: "border border-line-strong bg-white text-black hover:bg-surface",
};

// Renders a router Link for internal paths, an <a> for URLs and in-page anchors,
// and a <button> when neither `to` nor `href` is given.
function Button({ variant = "primary", to, href, className = "", children, ...rest }) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-[10px] px-3 py-[9px] text-body font-medium transition-colors",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
    "disabled:cursor-not-allowed disabled:opacity-60",
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
    // In-page anchors (#id) stay in the tab; other URLs open in a new one.
    const external = !href.startsWith("#");
    return (
      <a
        href={href}
        className={classes}
        {...(external && { target: "_blank", rel: "noreferrer" })}
        {...rest}
      >
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
