import React, { useEffect, useRef, useState } from "react";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import SuccessPanel from "../../components/ui/SuccessPanel";
import DiscipleshipForm from "./DiscipleshipForm";
import classroomImage from "../../assets/home/home-classroom.jpg";

// The section swaps its left column in place instead of navigating away:
// intro → form → success → (Done) back to intro.
const STEPS = { intro: "intro", form: "form", success: "success" };

const panelPadding = "p-5 sm:p-6";

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
          <Card className={panelPadding}>
            <DiscipleshipForm
              headingRef={headingRef}
              onSubmitted={() => goTo(STEPS.success)}
            />
          </Card>
        )}
        {step === STEPS.success && (
          <Card className={panelPadding}>
            <SuccessPanel
              headingId="discipleship-heading"
              headingRef={headingRef}
              title="You're all set"
              message="Your interest has been submitted successfully. Someone from the team will contact you shortly."
              actionLabel="Done"
              onAction={() => goTo(STEPS.intro)}
            />
          </Card>
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
