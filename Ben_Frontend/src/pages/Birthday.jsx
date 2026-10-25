import React, { useEffect, useRef, useState } from "react";
import { IoGiftOutline } from "react-icons/io5";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import ErrorState from "../components/ui/ErrorState";
import PageLoader from "../components/ui/PageLoader";
import SuccessPanel from "../components/ui/SuccessPanel";
import Balloons from "../sections/birthday/Balloons";
import BirthdayForm from "../sections/birthday/BirthdayForm";
import PhotoDeck from "../sections/birthday/PhotoDeck";
import useAsync from "../hooks/useAsync";
import usePageMeta from "../hooks/usePageMeta";
import { getBirthdayMessagesOpen } from "../api/birthday";
import { PASTOR_NAME } from "../config/pastor";

function ClosedNotice() {
  return (
    <Card className="flex flex-col items-center p-8 text-center sm:p-10">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-media-red-soft text-primary">
        <IoGiftOutline aria-hidden="true" size={24} />
      </span>
      <h2 className="mt-6 text-2xl font-semibold text-black">Birthday messages are closed</h2>
      <p className="mt-4 text-body font-medium text-secondary">
        We&apos;re not collecting birthday messages right now. Thank you to everyone who sent one.
      </p>
      <Button to="/" variant="secondary" className="mt-8">
        Back to Home
      </Button>
    </Card>
  );
}

function Birthday() {
  const { status, data: isOpen, error, reload } = useAsync(getBirthdayMessagesOpen);
  const [step, setStep] = useState("form");
  // Bumped after each message is sent, to send up another round of balloons.
  const [launch, setLaunch] = useState(0);
  const successHeadingRef = useRef(null);
  const messageSectionRef = useRef(null);

  usePageMeta({
    title: "Happy Birthday, Pastor",
    description: `Send ${PASTOR_NAME} a birthday message from Believers Equipping Network.`,
  });

  useEffect(() => {
    // Bring the confirmation into view and focus it so screen readers announce it.
    if (step === "success") {
      successHeadingRef.current?.focus({ preventScroll: true });
      successHeadingRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, [step]);

  if (status === "loading") return <PageLoader />;
  if (status === "error") {
    return (
      <Container as="main">
        <ErrorState title="We couldn't load this page" error={error} onRetry={reload} />
      </Container>
    );
  }

  const acceptingMessages = isOpen && step !== "closed";

  // Scrolls to the form without adding #birthday-message to the URL, which
  // would bring the visitor back down to the form on every reload.
  const startMessage = () => {
    messageSectionRef.current.scrollIntoView();
    messageSectionRef.current.querySelector("input, textarea")?.focus({ preventScroll: true });
  };

  let content;
  if (!acceptingMessages) {
    content = <ClosedNotice />;
  } else if (step === "success") {
    content = (
      <Card className="p-6 sm:p-10">
        <SuccessPanel
          headingId="birthday-success-heading"
          headingRef={successHeadingRef}
          title="Your message has been sent"
          message="Thank you for celebrating our Pastor."
          actionLabel="Send another message"
          onAction={() => setStep("form")}
        />
      </Card>
    );
  } else {
    content = (
      <Card className="p-6 sm:p-10">
        <BirthdayForm
          onSubmitted={() => {
            setStep("success");
            setLaunch((current) => current + 1);
          }}
          onClosed={() => setStep("closed")}
        />
      </Card>
    );
  }

  return (
    <main>
      <Balloons launch={launch} />

      <Container className="grid items-center gap-14 overflow-x-clip py-12 md:py-20 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-16">
        <header className="text-center motion-safe:animate-rise-in lg:text-left">
          <h1 className="font-semibold text-black">
            <span className="block font-hand text-[52px] leading-none text-primary sm:text-[64px]">
              Happy Birthday,
            </span>
            <span className="mt-3 block text-[32px] leading-tight sm:text-heading">{PASTOR_NAME}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-body font-medium text-secondary lg:mx-0">
            It&apos;s our Pastor&apos;s birthday! Let&apos;s thank God together for his life and ministry,
            and send him a message of love, prayer and appreciation.
          </p>
          {acceptingMessages && (
            <Button onClick={startMessage} className="mt-8">
              Write a message
            </Button>
          )}
        </header>

        <div className="relative motion-safe:animate-rise-in [animation-delay:150ms]">
          <div aria-hidden="true" className="absolute inset-[8%] rounded-full bg-media-red-soft blur-3xl" />
          <div className="relative">
            <PhotoDeck />
          </div>
        </div>
      </Container>

      <section
        ref={messageSectionRef}
        aria-labelledby={acceptingMessages ? "birthday-message-heading" : undefined}
        className="scroll-mt-24 bg-surface py-12 md:py-20"
      >
        <Container>
          <div className="mx-auto max-w-[760px]">
            {acceptingMessages && (
              <h2
                id="birthday-message-heading"
                className="mb-8 text-center text-[28px] font-semibold leading-tight text-black sm:text-[32px] md:mb-10"
              >
                Send your birthday wishes
              </h2>
            )}
            {content}
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Birthday;
