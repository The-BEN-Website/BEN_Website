import { lazy } from "react";
import { isChunkLoadError } from "./errors";

const RETRIES = 2;
const RETRY_DELAY_MS = 1000;
const RELOAD_FLAG = "ben:chunk-reload";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// sessionStorage can throw (e.g. some private-browsing modes); treat that as "no flag".
const session = {
  get: (key) => {
    try {
      return sessionStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set: (key, value) => {
    try {
      sessionStorage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  },
  remove: (key) => {
    try {
      sessionStorage.removeItem(key);
    } catch {
      // nothing to clean up
    }
  },
};

// React.lazy with resilience for flaky networks and redeploys:
// 1. retry the page download a couple of times (brief network blips);
// 2. if it still fails while online, the site was probably redeployed and the old
//    file is gone, so reload once to fetch the new version. A session flag stops
//    this from looping; the error boundary handles anything that still fails.
function lazyWithRetry(importer) {
  return lazy(async () => {
    for (let attempt = 0; ; attempt += 1) {
      try {
        const module = await importer();
        session.remove(RELOAD_FLAG);
        return module;
      } catch (error) {
        if (attempt < RETRIES && navigator.onLine) {
          await wait(RETRY_DELAY_MS * (attempt + 1));
          continue;
        }
        // Only auto-reload if the flag can be stored, otherwise a reload could loop.
        if (
          isChunkLoadError(error) &&
          navigator.onLine &&
          !session.get(RELOAD_FLAG) &&
          session.set(RELOAD_FLAG, "1")
        ) {
          window.location.reload();
          return new Promise(() => {}); // keep the loader up while the page reloads
        }
        throw error;
      }
    }
  });
}

export default lazyWithRetry;
