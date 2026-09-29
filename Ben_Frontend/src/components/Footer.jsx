import React from "react";
import { Link } from "react-router-dom";
import Container from "./ui/Container";
import Lockup from "../assets/brand/logo-lockup-large.png";

const legalLinks = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Service" },
];

function Footer() {
  return (
    <footer>
      <Container className="pb-12 md:pb-20">
        <nav aria-label="Legal">
          <ul className="flex items-center justify-center gap-2 text-body text-primary">
            {legalLinks.map(({ to, label }, i) => (
              <li key={to} className="flex items-center gap-2">
                {i > 0 && (
                  <span aria-hidden="true" className="text-black">
                    ·
                  </span>
                )}
                <Link to={to} className="underline underline-offset-2 hover:no-underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Decorative watermark of the full logo lockup. */}
        <img
          src={Lockup}
          alt=""
          width={1600}
          height={586}
          loading="lazy"
          className="mt-12 w-full select-none opacity-10 md:mt-16"
        />
      </Container>
    </footer>
  );
}

export default Footer;
