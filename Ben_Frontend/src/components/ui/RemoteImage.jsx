import React, { useState } from "react";
import { IoImageOutline } from "react-icons/io5";

// <img> for images served from outside the site (Cloudinary, YouTube). If the
// image fails to load it shows a quiet placeholder instead of the browser's
// broken-image icon. Size and shape come from `className` as usual.
function RemoteImage({ src, alt = "", className = "", ...imgProps }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <span
        role={alt ? "img" : undefined}
        aria-label={alt || undefined}
        aria-hidden={alt ? undefined : true}
        className={`flex items-center justify-center bg-placeholder text-subtitle ${className}`}
      >
        <IoImageOutline size={28} />
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={className}
      {...imgProps}
    />
  );
}

export default RemoteImage;
