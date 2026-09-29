import React from "react";
import Container from "../../components/ui/Container";

// Image beside one or more titled text blocks. `imageSide` sets which side the
// image sits on from `lg` up; on smaller screens the text comes first.
export function AboutImage({ src, alt, priority = false, className = "" }) {
  const shape = `aspect-[600/485] w-full rounded-3xl md:aspect-[16/10] lg:aspect-[600/485] ${className}`;

  if (!src) return <div aria-hidden="true" className={`${shape} bg-placeholder`} />;

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchpriority={priority ? "high" : undefined}
      className={`${shape} object-cover`}
    />
  );
}

export function AboutText({ title, children }) {
  return (
    <div>
      <h2 className="text-[32px] font-semibold leading-tight text-black">{title}</h2>
      <p className="mt-5 text-body text-secondary">{children}</p>
    </div>
  );
}

function AboutBlock({ image, imageAlt, imageSide = "left", children }) {
  const imageFirst = imageSide === "left";

  return (
    <section>
      <Container className="grid items-center gap-10 py-12 md:py-16 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        <div className={`flex flex-col gap-12 ${imageFirst ? "lg:order-2" : ""}`}>{children}</div>
        <AboutImage src={image} alt={imageAlt} className={imageFirst ? "lg:order-1" : ""} />
      </Container>
    </section>
  );
}

export default AboutBlock;
