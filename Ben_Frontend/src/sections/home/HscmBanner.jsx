import React from "react";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import RemoteImage from "../../components/ui/RemoteImage";
import useAsync from "../../hooks/useAsync";
import { cloudinaryResize } from "../../lib/cloudinary";
import { getHscmSettings } from "../../api/hscm";
import { HSCM_NAME, hscmShortName } from "../../config/hscm";

// Points visitors to /hscm while an admin has registration open. Renders
// nothing while loading, when closed, or if the settings can't be loaded, so
// it never pushes the page around or shows an error on Home.
function HscmBanner() {
  const { status, data: settings } = useAsync(getHscmSettings);
  if (status !== "success" || !settings.isOpen) return null;

  const shortName = hscmShortName(settings.year);

  return (
    <section aria-labelledby="hscm-banner-heading" className="motion-safe:animate-fade-in">
      <Container className="pb-4 md:pb-8">
        <div className="flex flex-col gap-6 rounded-3xl border border-card-line bg-media-red-soft p-6 sm:flex-row sm:items-center sm:p-8">
          {settings.flyerUrl && (
            <RemoteImage
              src={cloudinaryResize(settings.flyerUrl, { width: 240, height: 240, gravity: "auto" })}
              alt=""
              loading="lazy"
              className="hidden h-24 w-24 shrink-0 rounded-2xl object-cover sm:block"
            />
          )}
          <div className="flex-1">
            <p className="text-base font-medium text-primary">{shortName}</p>
            <h2 id="hscm-banner-heading" className="mt-1 text-2xl font-semibold text-black">
              {HSCM_NAME} registration is open
            </h2>
            <p className="mt-2 text-body font-medium text-secondary">
              Coming to camp meeting? Register now so we can prepare for you.
            </p>
          </div>
          <Button to="/hscm" className="shrink-0 self-start sm:self-center">
            Register now
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default HscmBanner;
