import React from "react";
import Button from "./Button";
import { describeLoadError } from "../../lib/errors";

// "Load more" footer for paginated lists, including the retry state when a
// follow-up page fails (the items already shown stay on screen).
function LoadMore({ status, hasMore, error, itemCount, onLoadMore, onRetry }) {
  if (status === "error" && itemCount > 0) {
    return (
      <div role="alert" className="mt-10 flex flex-col items-center gap-3 text-center">
        <p className="text-sm text-secondary">{describeLoadError(error)}</p>
        <Button variant="secondary" onClick={onRetry}>
          Try again
        </Button>
      </div>
    );
  }

  if (!hasMore || status === "loading") return null;

  return (
    <div className="mt-10 flex justify-center">
      <Button variant="secondary" onClick={onLoadMore} disabled={status === "loading-more"}>
        {status === "loading-more" ? "Loading..." : "Load more"}
      </Button>
    </div>
  );
}

export default LoadMore;
