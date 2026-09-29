import React from "react";
import Container from "./ui/Container";
import ErrorState from "./ui/ErrorState";
import { isChunkLoadError, isOffline } from "../lib/errors";

// Catches crashes and failed page downloads below it and shows a recoverable
// error instead of a blank screen. Give it a `key` that changes on navigation
// (e.g. the pathname) so moving to another page clears the error.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error("Page crashed:", error, info.componentStack);
  }

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;

    const chunkFailed = isChunkLoadError(error);
    let message = "Something unexpected went wrong on this page. Reloading usually fixes it.";
    if (isOffline()) message = "You appear to be offline. Reconnect, then reload the page.";
    else if (chunkFailed) {
      message = "This page didn't finish loading, possibly due to a weak connection. Please reload to try again.";
    }

    return (
      <Container as="main">
        <ErrorState
          title={chunkFailed ? "This page didn't load" : "Something went wrong"}
          message={message}
          onRetry={() => window.location.reload()}
          retryLabel="Reload page"
        />
      </Container>
    );
  }
}

export default ErrorBoundary;
