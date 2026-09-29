import React from "react";
import { IoCloudOfflineOutline, IoRefresh, IoWarningOutline } from "react-icons/io5";
import Button from "./Button";
import { describeLoadError, isOffline } from "../../lib/errors";

// Shared "couldn't load" panel with a retry action.
// `compact` is for inline use inside a section rather than a whole page.
function ErrorState({
  title = "We couldn't load this",
  error,
  message,
  onRetry,
  retryLabel = "Try again",
  compact = false,
  className = "",
}) {
  const offline = isOffline();
  const Icon = offline ? IoCloudOfflineOutline : IoWarningOutline;

  return (
    <div
      role="alert"
      className={`mx-auto flex max-w-md flex-col items-center text-center ${
        compact ? "py-8" : "py-16"
      } ${className}`}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-media-red-soft text-primary">
        <Icon aria-hidden="true" size={24} />
      </span>
      <h2 className="mt-4 text-xl font-semibold text-black">
        {offline ? "You're offline" : title}
      </h2>
      <p className="mt-2 text-base text-secondary">{message ?? describeLoadError(error)}</p>
      {onRetry && (
        <Button variant="secondary" onClick={onRetry} className="mt-6">
          <IoRefresh aria-hidden="true" size={18} />
          {retryLabel}
        </Button>
      )}
    </div>
  );
}

export default ErrorState;
