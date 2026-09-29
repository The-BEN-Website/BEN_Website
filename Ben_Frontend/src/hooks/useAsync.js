import { useEffect, useState } from "react";

// Runs an async loader on mount (and again whenever `deps` change) and tracks
// its result. Results from a load that finishes after unmount, or after a newer
// load has started, are ignored.
function useAsync(loader, deps = []) {
  const [state, setState] = useState({ status: "loading", data: null, error: null });

  useEffect(() => {
    let active = true;
    setState({ status: "loading", data: null, error: null });

    loader()
      .then((data) => active && setState({ status: "success", data, error: null }))
      .catch((error) => active && setState({ status: "error", data: null, error }));

    return () => {
      active = false;
    };
    // Callers list the loader's inputs in `deps`; the loader itself may be an inline closure.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
}

export default useAsync;
