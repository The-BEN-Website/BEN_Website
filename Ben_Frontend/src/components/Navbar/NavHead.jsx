import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import Logo from "../../assets/brand/logo-lockup.png";
import Container from "../ui/Container";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/resources", label: "Media" },
  { to: "/giving", label: "Giving" },
  { to: "/contact", label: "Contact" },
];

const linkClass = ({ isActive }) =>
  [
    "text-lg font-medium leading-none transition-colors",
    isActive
      ? "text-primary underline underline-offset-4"
      : "text-muted hover:text-ink",
  ].join(" ");

function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-30 w-full bg-white">
      <Container className="flex items-center justify-between py-6 md:py-10">
        <NavLink to="/" aria-label="Believers Equipping Network home">
          <img src={Logo} alt="Believers Equipping Network" className="h-9 w-auto md:h-12" />
        </NavLink>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end={to === "/"} className={linkClass}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <MdOutlineClose size={28} /> : <GiHamburgerMenu size={24} />}
        </button>
      </Container>

      {open && (
        <nav className="border-t border-line bg-white md:hidden">
          <ul className="flex flex-col px-4 py-2 sm:px-8">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end={to === "/"} className={(s) => `block py-3 ${linkClass(s)}`}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
