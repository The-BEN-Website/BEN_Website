import React from "react";
import Container from "./ui/Container";
import Lockup from "../assets/brand/logo-lockup-large.png";

function Footer() {
  return (
    <footer>
      <Container className="py-12 md:py-20">
        {/* Decorative watermark of the full logo lockup. */}
        <img
          src={Lockup}
          alt=""
          width={1600}
          height={586}
          loading="lazy"
          className="w-full select-none opacity-10"
        />
      </Container>
    </footer>
  );
}

export default Footer;
