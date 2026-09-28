import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Container from "../../components/ui/Container";

// Icon colours are each platform's own brand colour, not part of our palette.
const socials = [
  { platform: "Facebook", handle: "The Believers Equipping Network", href: "https://www.facebook.com/share/1BNM4SUmsY/", Icon: FaFacebook, color: "#1877F2" },
  { platform: "Instagram", handle: "@believersequippingnetwork", href: "https://www.instagram.com/believersequippingnetwork", Icon: FaInstagram, color: "#C13584" },
  { platform: "YouTube", handle: "Believers Equipping Network", href: "https://www.youtube.com/@BelieversEquippingNetworkGM", Icon: FaYoutube, color: "#FF0000" },
];

function SocialLink({ platform, handle, href, Icon, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${handle} on ${platform}`}
      className="inline-flex items-center gap-2 text-base font-medium text-black transition-colors hover:text-primary"
    >
      <Icon aria-hidden="true" size={20} style={{ color }} />
      <span>{handle}</span>
    </a>
  );
}

function Socials() {
  return (
    <section aria-labelledby="socials-heading">
      <Container className="flex flex-col items-center py-16 text-center md:py-24">
        <h2 id="socials-heading" className="text-[32px] font-semibold leading-none text-black">
          Follow Us on Socials
        </h2>
        <ul className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8">
          {socials.map((social) => (
            <li key={social.platform}>
              <SocialLink {...social} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Socials;
