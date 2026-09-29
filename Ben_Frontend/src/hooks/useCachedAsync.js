import { useEffect, useState } from "react";

// Stale-while-revalidate for small, rarely changing data (e.g. service times):
// returns the last successful result saved on this device immediately, while
// fetching a fresh copy in the background and saving it for next time.
//
// `data` is the freshest value available (fresh > cached > null).
// status: "loading" (nothing to show yet) | "success" | "error".
// `stale` is true while `data` is still the cached copy.
//
// Storage failures (private browsing, quota) just mean no cache.

const PREFIX = "ben:cache:";

function readCache(key) {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeCache(key, value) {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    // Not critical: the next visit will just fetch again.
  }
}

function useCachedAsync(key, loader) {
  const [state, setState] = useState(() => {
    const cached = readCache(key);
    return { data: cached, status: cached ? "success" : "loading", stale: Boolean(cached) };
  });

  useEffect(() => {
    let active = true;
    loader()
      .then((data) => {
        writeCache(key, data);
        if (active) setState({ data, status: "success", stale: false });
      })
      .catch(() => {
        // Keep showing a cached copy if there is one; otherwise report the error.
        if (active) setState((current) => (current.data ? current : { ...current, status: "error" }));
      });
    return () => {
      active = false;
    };
    // The loader is expected to be a stable module-level function.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return state;
}

export default useCachedAsync;
