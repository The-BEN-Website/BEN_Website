import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MAX_ATTEMPTS = 20;
const RETRY_MS = 100;

// Scrolls to the element named in the URL hash (e.g. /#discipleship) after a
// route change. Pages are lazy-loaded, so the target may not exist on the
// first try; retry briefly until it renders.
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return undefined;

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

export default ScrollToHash;
