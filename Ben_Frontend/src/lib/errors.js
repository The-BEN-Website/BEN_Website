// Shared helpers for turning failures into something a visitor can act on.

export function isOffline() {
  return typeof navigator !== "undefined" && navigator.onLine === false;
}

// A lazily loaded page (JS chunk) failed to download: bad network, or the site
// was redeployed and the old chunk file no longer exists.
export function isChunkLoadError(error) {
  const message = String(error?.message ?? error ?? "");
  return (
    error?.name === "ChunkLoadError" ||
    /Failed to fetch dynamically imported module|Importing a module script failed|error loading dynamically imported module|Loading chunk .* failed/i.test(
      message,
    )
  );
}

// supabase-js reports network failures as plain `{ message }` objects
// ("TimeoutError: …"), so check the message as well as the error name.
export function isTimeoutError(error) {
  const text = `${error?.name ?? ""} ${error?.message ?? ""}`;
  return /TimeoutError|AbortError|timed out/i.test(text);
}

// The request never reached the server (DNS, dropped connection, captive portal…).
// Browsers word this differently: Chrome "Failed to fetch", Firefox "NetworkError…",
// Safari "Load failed".
export function isNetworkError(error) {
  const text = `${error?.name ?? ""} ${error?.message ?? ""}`;
  return /Failed to fetch|NetworkError|Load failed|Network request failed/i.test(text);
}

// Short, human explanation for a failed load, used under an error heading.
export function describeLoadError(error) {
  if (isOffline()) return "You appear to be offline. Check your connection and try again.";
  if (isTimeoutError(error)) {
    return "This is taking longer than it should, possibly due to a slow connection. Please try again.";
  }
  if (isNetworkError(error)) {
    return "We couldn't reach our servers. Check your internet connection and try again.";
  }
  return "Something went wrong on our side while loading this. Please try again in a moment.";
}

// Message for a form that failed to send.
export function describeSubmitError(error) {
  if (isOffline()) {
    return "You appear to be offline. Your details haven't been sent — please try again once you're connected.";
  }
  if (isTimeoutError(error)) {
    return "Sending took too long, possibly due to a slow connection. Please try again.";
  }
  if (isNetworkError(error)) {
    return "We couldn't reach our servers, so your details weren't sent. Check your connection and try again.";
  }
  return "Something went wrong while sending. Please try again in a moment.";
}
