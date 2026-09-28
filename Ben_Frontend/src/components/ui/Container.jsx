import React from "react";

// Shared page-width wrapper so every section lines up with the navbar.
function Container({ as: Tag = "div", className = "", children }) {
  return (
    <Tag className={`mx-auto w-full max-w-[1400px] px-4 sm:px-8 md:w-[86%] md:px-0 ${className}`}>
      {children}
    </Tag>
  );
}

export default Container;
