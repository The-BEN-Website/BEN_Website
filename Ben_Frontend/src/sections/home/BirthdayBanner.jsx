import React from "react";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import useAsync from "../../hooks/useAsync";
import { getBirthdayMessagesOpen } from "../../api/birthday";
import portraitImage from "../../assets/birthday/pastor-portrait.jpg";

// Points visitors to /birthday while an admin has birthday messages open.
// Renders nothing while loading, when closed, or if the setting can't be
// loaded, so it never pushes the page around or shows an error on Home.
function BirthdayBanner() {
  const { status, data: isOpen } = useAsync(getBirthdayMessagesOpen);
  if (status !== "success" || !isOpen) return null;

  return (
    <section
      aria-labelledby="birthday-banner-heading"
      className="motion-safe:animate-fade-in"
    >
      <Container className="pb-4 md:pb-8">
        <div className="flex flex-col gap-6 rounded-3xl border border-card-line bg-media-red-soft p-6 sm:flex-row sm:items-center sm:p-8">
          <img
            src={portraitImage}
            alt=""
            loading="lazy"
            className="hidden h-24 w-24 shrink-0 rounded-2xl object-cover object-top sm:block"
          />
          <div className="flex-1">
            <p className="text-base font-medium text-primary">
              Happy Birthday, Pastor
            </p>
            <h2
              id="birthday-banner-heading"
              className="mt-1 text-2xl font-semibold text-black"
            >
              Send Pastor a birthday message
            </h2>
            <p className="mt-2 text-body font-medium text-secondary">
              Let&apos;s celebrate him together. Send him your wishes and prayers.
            </p>
          </div>
          <Button to="/birthday" className="shrink-0 self-start sm:self-center">
            Send a message
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default BirthdayBanner;
