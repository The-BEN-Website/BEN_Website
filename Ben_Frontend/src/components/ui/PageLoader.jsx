import React, { useEffect, useState } from "react";
import LogoMark from "../../assets/brand/logo-mark.png";

// Delay before showing anything, so fast page loads don't flash a loader.
const SHOW_AFTER_MS = 200;

// Full-page loading state used while a lazily loaded page downloads:
// the logo mark inside a spinning brand-red ring.
function PageLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), SHOW_AFTER_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex min-h-[60vh] items-center justify-center transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative flex h-20 w-20 items-center justify-center">
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full border-2 border-primary/15 border-t-primary motion-safe:animate-spin"
        />
        <img src={LogoMark} alt="" className="h-11 w-11" />
      </div>
      <span className="sr-only">Loading page</span>
    </div>
  );
}

export default PageLoader;
