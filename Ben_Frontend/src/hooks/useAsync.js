import { useEffect, useState } from "react";

// Runs an async loader once on mount and tracks its result.
// Results from a load that finishes after unmount are ignored.
function useAsync(loader) {
  const [state, setState] = useState({ status: "loading", data: null, error: null });

  useEffect(() => {
    let active = true;

    loader()
      .then((data) => active && setState({ status: "success", data, error: null }))
      .catch((error) => active && setState({ status: "error", data: null, error }));

    return () => {
      active = false;
    };
    // The loader is expected to be a stable module-level function.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
}

export default useAsync;
