import React from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";

// Shared building blocks for long-form legal pages (Privacy Policy, Terms).

export function LegalPage({ title, lastUpdated, children }) {
  return (
    <Container as="main" className="py-12 md:py-20">
      <article className="mx-auto max-w-3xl">
        <header className="border-b border-line pb-8">
          <p className="inline-block rounded-[10px] border border-line bg-white px-2.5 py-1 text-base font-medium text-primary shadow-glow">
            Legal
          </p>
          <h1 className="mt-4 text-[40px] font-semibold leading-none text-black md:text-display">
            {title}
          </h1>
          <p className="mt-4 text-small text-caption">Last updated: {lastUpdated}</p>
        </header>

        <div className="mt-10 flex flex-col gap-10 text-body text-secondary">{children}</div>
      </article>
    </Container>
  );
}

export function LegalSection({ title, children }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold leading-tight text-subheading">{title}</h2>
      {children}
    </section>
  );
}

export function LegalSubheading({ children }) {
  return <h3 className="mt-2 text-xl font-semibold text-black">{children}</h3>;
}

export function LegalList({ children }) {
  return <ul className="flex list-disc flex-col gap-3 pl-6 marker:text-primary">{children}</ul>;
}

// Bold lead-in for a list item, e.g. "Giving." followed by the explanation.
export function Term({ children }) {
  return <span className="font-semibold text-black">{children}</span>;
}

const linkClass = "font-medium text-primary underline underline-offset-2 hover:no-underline";

// Pass `to` for a page on this site, or `href` for mailto:/external links.
export function LegalLink({ to, href, children }) {
  if (to) {
    return (
      <Link to={to} className={linkClass}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={linkClass}>
      {children}
    </a>
  );
}
