import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MAX_ATTEMPTS = 20;
const RETRY_MS = 100;

// Client-side navigation keeps the previous page's scroll position, so reset it:
// - a new page starts at the top;
// - a URL hash (e.g. /#discipleship) scrolls to that element instead. Pages are
//   lazy-loaded, so the target may not exist yet; retry briefly until it renders.
// Query-string changes on the same page (e.g. switching Videos tabs) are left alone.
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return undefined;
    }

    let attempts = 0;
    let timer;
    const tryScroll = () => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView();
      } else if (attempts < MAX_ATTEMPTS) {
        attempts += 1;
        timer = setTimeout(tryScroll, RETRY_MS);
      }
    };
    tryScroll();

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

export default ScrollManager;
