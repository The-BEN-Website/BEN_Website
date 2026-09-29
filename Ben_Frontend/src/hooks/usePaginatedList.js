import { useCallback, useEffect, useRef, useState } from "react";

// Cursor-paginated list with error recovery.
// `fetchPage(cursor)` returns one page of items (cursor is undefined for the first
// page); `getCursor(lastItem)` gives the cursor for the next page. The list
// resets whenever `fetchPage` changes (memoise it with useCallback on its inputs).
//
// status: "loading" | "loading-more" | "success" | "error"
// A failure while loading more keeps the items already shown; `retry` repeats
// whichever load failed, and failed loads are retried automatically when the
// browser comes back online.
function usePaginatedList(fetchPage, getCursor, pageSize) {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(false);
  const requestId = useRef(0);

  const load = useCallback(
    async (cursor) => {
      const id = ++requestId.current;
      setStatus(cursor ? "loading-more" : "loading");
      setError(null);
      try {
        const page = await fetchPage(cursor);
        if (id !== requestId.current) return;
        setItems((current) => (cursor ? [...current, ...page] : page));
        setHasMore(page.length === pageSize);
        setStatus("success");
      } catch (loadError) {
        if (id !== requestId.current) return;
        setError(loadError);
        setStatus("error");
      }
    },
    [fetchPage, pageSize],
  );

  useEffect(() => {
    setItems([]);
    load();
  }, [load]);

  const loadMore = useCallback(() => {
    if (items.length) load(getCursor(items[items.length - 1]));
  }, [items, load, getCursor]);

  const retry = useCallback(() => (items.length ? loadMore() : load()), [items.length, loadMore, load]);

  useEffect(() => {
    if (status !== "error") return undefined;
    window.addEventListener("online", retry);
    return () => window.removeEventListener("online", retry);
  }, [status, retry]);

  return { items, status, error, hasMore, loadMore, retry };
}

export default usePaginatedList;
