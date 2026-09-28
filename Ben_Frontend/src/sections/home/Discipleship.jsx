import React, { useEffect, useRef, useState } from "react";
import { MdCheck } from "react-icons/md";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import DiscipleshipForm from "./DiscipleshipForm";
import classroomImage from "../../assets/home/home-classroom.jpg";

// The section swaps its left column in place instead of navigating away:
// intro → form → success → (Done) back to intro.
const STEPS = { intro: "intro", form: "form", success: "success" };

const panelCard = "rounded-[20px] border border-line bg-card p-5 sm:p-6";

function Intro({ headingRef, onStart }) {
  return (
    <div className="flex flex-col items-start">
      <h2
        id="discipleship-heading"
        ref={headingRef}
        tabIndex={-1}
        className="max-w-lg text-heading font-semibold text-black focus:outline-none"
      >
        Join the Discipleship Class
      </h2>
      <p className="mt-6 max-w-xl text-body font-medium text-subtle md:mt-10">
        &ldquo;All scripture is given by inspiration of God, and is profitable for doctrine, for
        reproof, for correction, for instruction in righteousness&rdquo; (2 Timothy 3:16, KJV). The
        next most important thing after salvation is knowledge.
      </p>
      <Button className="mt-10" onClick={onStart}>
        Join the Class
      </Button>
    </div>
  );
}

function Success({ headingRef, onDone }) {
  return (
    <div className={`${panelCard} flex flex-col items-center text-center`} role="status">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
        <MdCheck aria-hidden="true" size={30} />
      </span>
      <h2
        id="discipleship-heading"
        ref={headingRef}
        tabIndex={-1}
        className="mt-6 text-2xl font-semibold text-black focus:outline-none"
      >
        You&apos;re all set
      </h2>
      <p className="mt-4 text-body font-medium text-secondary">
        Your interest has been submitted successfully. Someone from the team will contact you
        shortly.
      </p>
      <Button className="mt-8 w-full" onClick={onDone}>
        Done
      </Button>
    </div>
  );
}

function Discipleship() {
  const [step, setStep] = useState(STEPS.intro);
  const headingRef = useRef(null);
  const hasInteracted = useRef(false);

  // Move focus to the new panel's heading so keyboard and screen-reader users
  // follow the swap. Skipped on first render so the page doesn't jump here.
  useEffect(() => {
    if (hasInteracted.current) headingRef.current?.focus();
  }, [step]);

  const goTo = (next) => {
    hasInteracted.current = true;
    setStep(next);
  };

  return (
    <section aria-labelledby="discipleship-heading">
      <Container className="grid items-center gap-10 py-12 md:py-16 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        {step === STEPS.intro && (
          <Intro headingRef={headingRef} onStart={() => goTo(STEPS.form)} />
        )}
        {step === STEPS.form && (
          <div className={panelCard}>
            <DiscipleshipForm
              headingRef={headingRef}
              onSubmitted={() => goTo(STEPS.success)}
            />
          </div>
        )}
        {step === STEPS.success && (
          <Success headingRef={headingRef} onDone={() => goTo(STEPS.intro)} />
        )}

        <img
          src={classroomImage}
          alt="Students listening during a discipleship class"
          width={1000}
          height={666}
          loading="lazy"
          className="aspect-[600/484] w-full rounded-3xl object-cover md:aspect-[16/10] lg:aspect-[600/484]"
        />
      </Container>
    </section>
  );
}

export default Discipleship;
