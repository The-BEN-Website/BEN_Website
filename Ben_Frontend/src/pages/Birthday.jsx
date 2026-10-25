import React, { useEffect, useRef, useState } from "react";
import { IoGiftOutline } from "react-icons/io5";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import ErrorState from "../components/ui/ErrorState";
import PageLoader from "../components/ui/PageLoader";
import SuccessPanel from "../components/ui/SuccessPanel";
import BirthdayForm from "../sections/birthday/BirthdayForm";
import useAsync from "../hooks/useAsync";
import usePageMeta from "../hooks/usePageMeta";
import { getBirthdayMessagesOpen } from "../api/birthday";
import { PASTOR_NAME } from "../config/pastor";
import portraitImage from "../assets/birthday/pastor-portrait.jpg";
import agbadaImage from "../assets/birthday/pastor-agbada.jpg";
import deskSmileImage from "../assets/birthday/pastor-desk-smile.jpg";
import deskBooksImage from "../assets/birthday/pastor-desk-books.jpg";

const photoClass = "h-full w-full rounded-3xl object-cover";

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

// Three more shots from the birthday photoshoot. The wide desk photo spans two
// columns, on its own row on phones and between the portraits from tablet up.
function Photos() {
  return (
    <section aria-label={`Photos of ${PASTOR_NAME}`}>
      <Container className="grid grid-cols-2 gap-4 pb-12 sm:grid-cols-4 sm:gap-6 md:pb-20">
        <img
          src={deskBooksImage}
          alt={`${PASTOR_NAME} smiling at his desk beside stacks of books`}
          width={1800}
          height={1200}
          loading="lazy"
          className={`${photoClass} col-span-2 aspect-[3/2] sm:order-2 sm:aspect-auto`}
        />
        <img
          src={agbadaImage}
          alt={`${PASTOR_NAME} standing in a cream agbada and red cap`}
          width={800}
          height={1200}
          loading="lazy"
          className={`${photoClass} aspect-[2/3] object-top sm:order-1`}
        />
        <img
          src={deskSmileImage}
          alt={`${PASTOR_NAME} laughing at his desk`}
          width={800}
          height={1200}
          loading="lazy"
          className={`${photoClass} aspect-[2/3] object-top sm:order-3`}
        />
      </Container>
    </section>
  );
}

function Birthday() {
  const { status, data: isOpen, error, reload } = useAsync(getBirthdayMessagesOpen);
  const [step, setStep] = useState("form");
  const successHeadingRef = useRef(null);

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
          message="Thank you for celebrating our Pastor with us."
          actionLabel="Send another message"
          onAction={() => setStep("form")}
        />
      </Card>
    );
  } else {
    content = (
      <Card className="p-6 sm:p-10">
        <BirthdayForm onSubmitted={() => setStep("success")} onClosed={() => setStep("closed")} />
      </Card>
    );
  }

  return (
    <main>
      <Container className="grid items-center gap-10 py-12 md:py-20 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-16">
        <header className="text-center lg:text-left">
          <p className="inline-block rounded-[10px] border border-line bg-white px-2.5 py-1 text-body font-medium text-primary shadow-glow">
            Happy Birthday
          </p>
          <h1 className="mt-4 text-[32px] font-semibold leading-tight text-black sm:text-heading">
            Celebrating {PASTOR_NAME}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-body font-medium text-secondary lg:mx-0">
            It&apos;s our Pastor&apos;s birthday! Join us in thanking God for his life and ministry,
            and send him a message of love, prayer and appreciation.
          </p>
          {acceptingMessages && (
            <Button href="#birthday-message" className="mt-8">
              Write a message
            </Button>
          )}
        </header>

        <img
          src={portraitImage}
          alt={`Portrait of ${PASTOR_NAME} smiling in a cream agbada and red cap`}
          width={997}
          height={1600}
          fetchpriority="high"
          className="mx-auto aspect-[4/5] w-full max-w-md rounded-3xl object-cover object-top lg:max-w-none"
        />
      </Container>

      <Photos />

      <section
        id="birthday-message"
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
