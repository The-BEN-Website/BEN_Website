import React, { useEffect, useRef, useState } from "react";
import { IoCalendarOutline } from "react-icons/io5";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import ErrorState from "../components/ui/ErrorState";
import PageLoader from "../components/ui/PageLoader";
import RemoteImage from "../components/ui/RemoteImage";
import SuccessPanel from "../components/ui/SuccessPanel";
import RegistrationForm from "../sections/hscm/RegistrationForm";
import useAsync from "../hooks/useAsync";
import usePageMeta from "../hooks/usePageMeta";
import { cloudinaryResize } from "../lib/cloudinary";
import { getHscmSettings, listServiceUnits } from "../api/hscm";
import { HSCM_NAME, hscmShortName } from "../config/hscm";

const loadPage = () => Promise.all([getHscmSettings(), listServiceUnits()]);

// Flyers come in any shape, so the image keeps its own aspect ratio: never
// cropped, at most full width, and no taller than the screen (a tall poster
// would otherwise push the form far down on phones, or outgrow the sticky
// column on desktop). The frame shrinks to fit the image.
function Flyer({ url, year }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="mx-auto block w-fit max-w-full overflow-hidden rounded-3xl border border-card-line bg-placeholder focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <RemoteImage
        src={cloudinaryResize(url, { width: 900 })}
        alt={`${HSCM_NAME} ${year} flyer`}
        className="block h-auto max-h-[75vh] min-h-24 w-auto min-w-24 max-w-full lg:max-h-[calc(100vh-9rem)]"
      />
      <span className="sr-only">(opens full size in a new tab)</span>
    </a>
  );
}

function ClosedNotice({ year }) {
  return (
    <Card className="mx-auto flex max-w-xl flex-col items-center p-8 text-center sm:p-10">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-media-red-soft text-primary">
        <IoCalendarOutline aria-hidden="true" size={24} />
      </span>
      <h2 className="mt-6 text-2xl font-semibold text-black">Registration is closed</h2>
      <p className="mt-4 text-body font-medium text-secondary">
        Registration for {hscmShortName(year)} isn&apos;t open right now. Check back soon, or
        reach out to us if you have any questions.
      </p>
      <Button to="/contact" variant="secondary" className="mt-8">
        Contact us
      </Button>
    </Card>
  );
}

function Hscm() {
  const { status, data, error, reload } = useAsync(loadPage);
  const [step, setStep] = useState("form");
  const [registrationNumber, setRegistrationNumber] = useState(null);
  const successHeadingRef = useRef(null);
  const [settings, units] = data ?? [];
  const shortName = settings ? hscmShortName(settings.year) : "HSCM";

  usePageMeta({
    title: `${shortName} Registration`,
    description: `Register for the ${HSCM_NAME}, Believers Equipping Network's end-of-year camp.`,
  });

  useEffect(() => {
    // Bring the confirmation (and the registration number under it) into view,
    // and focus it so screen readers announce it.
    if (step === "success") {
      successHeadingRef.current?.focus({ preventScroll: true });
      successHeadingRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, [step]);

  if (status === "loading") return <PageLoader />;
  if (status === "error") {
    return (
      <Container as="main">
        <ErrorState title="We couldn't load the registration form" error={error} onRetry={reload} />
      </Container>
    );
  }

  const isOpen = settings.isOpen && step !== "closed";
  // No intro once registered, so the registration number sits higher on screen.
  const intro = !isOpen
    ? "Our end-of-year camp meeting for worship, the Word and fellowship in the Holy Spirit."
    : step === "form"
      ? "Planning to attend this year's camp meeting? Fill in your details below so we can prepare well for you."
      : null;
  const hasFlyer = Boolean(settings.flyerUrl);

  let content;
  if (!isOpen) {
    content = <ClosedNotice year={settings.year} />;
  } else if (step === "success") {
    content = (
      <Card className="p-6 sm:p-10">
        <SuccessPanel
          headingId="hscm-success-heading"
          headingRef={successHeadingRef}
          title={`You're registered for ${shortName}`}
          message="Thank you for registering. We look forward to seeing you at camp meeting."
          actionLabel="Register someone else"
          onAction={() => setStep("form")}
        >
          <div className="mt-8 w-full rounded-[20px] border border-primary/20 bg-media-red-soft px-6 py-6">
            <p className="text-base font-medium text-secondary">Your registration number</p>
            <p className="mt-2 text-display font-semibold tabular-nums text-primary">
              {registrationNumber}
            </p>
            <p className="mt-4 text-sm text-secondary">
              Take a screenshot or write it down. You&apos;ll need it for accreditation at camp.
            </p>
          </div>
        </SuccessPanel>
      </Card>
    );
  } else {
    content = (
      <Card className="p-6 sm:p-10">
        <RegistrationForm
          units={units}
          onSubmitted={(number) => {
            setRegistrationNumber(number);
            setStep("success");
          }}
          onClosed={() => setStep("closed")}
        />
      </Card>
    );
  }

  return (
    <Container as="main" className="py-12 md:py-20">
      <header className={`mx-auto max-w-2xl text-center ${hasFlyer ? "lg:hidden" : ""}`}>
        <HeaderText shortName={shortName} intro={intro} />
      </header>

      {hasFlyer ? (
        <div className="mx-auto mt-10 grid max-w-[1180px] items-start gap-10 md:mt-14 lg:mt-0 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          <aside className="mx-auto w-full max-w-md self-stretch lg:max-w-none">
            <header className="mb-8 hidden lg:block">
              <HeaderText shortName={shortName} intro={intro} align="left" />
            </header>
            {/* Only the flyer stays in view while the form scrolls; the heading scrolls away. */}
            <div className="lg:sticky lg:top-28">
              <Flyer url={settings.flyerUrl} year={settings.year} />
            </div>
          </aside>
          <div>{content}</div>
        </div>
      ) : (
        <div className="mx-auto mt-10 max-w-[760px] md:mt-14">{content}</div>
      )}
    </Container>
  );
}

function HeaderText({ shortName, intro, align = "center" }) {
  return (
    <>
      <p
        className={`inline-block rounded-[10px] border border-line bg-white px-2.5 py-1 text-body font-medium text-primary shadow-glow ${
          align === "left" ? "" : "mx-auto"
        }`}
      >
        {shortName}
      </p>
      <h1 className="mt-4 text-[32px] font-semibold leading-tight text-black sm:text-heading">
        {HSCM_NAME}
      </h1>
      {intro && <p className="mt-6 text-body font-medium text-secondary">{intro}</p>}
    </>
  );
}

export default Hscm;
