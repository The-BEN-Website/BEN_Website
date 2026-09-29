import React from "react";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";

function NotFound() {
  return (
    <Container as="main" className="flex flex-col items-center py-20 text-center md:py-28">
      <p className="rounded-[10px] border border-line bg-white px-2.5 py-1 text-body font-medium text-primary shadow-glow">
        404
      </p>
      <h1 className="mt-4 text-heading font-semibold text-black">Page not found</h1>
      <p className="mt-6 max-w-md text-body font-medium text-secondary">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        <Button to="/">Go to Home</Button>
        <Button to="/media" variant="secondary">
          Browse Media
        </Button>
      </div>
    </Container>
  );
}

export default NotFound;
