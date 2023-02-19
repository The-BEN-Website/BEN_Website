import React from 'react';
import { NavLink } from 'react-router-dom';


const NavLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Resources", href: "/resources" },
  { title: "Events", href: "/event" },
  { title: "Contact Us", href: "/contact" },
  { title: "Partnership", href: "/partnership" },
];

export default function NavBar({ width, onOpen }) {

  const displayNavLinks = () => {
    return NavLinks.map((link) => {
      return (
        <NavLink
          key={link.title}
          to={link.href}
          className={({ isActive }) =>
            [
              "btn py-2 px-3 mx-3 text-center   hover:text-my-red ",
              isActive ? "underline decoration-2 decoration-red-500 " : "",
              width < 768 ? " block my-5 text-black" : "inline-block my-2 ml-0 text-white",
            ].join(" ")
          }
        >
          {link.title}
        </NavLink>
      );
    });
  };
  
  return (
    <nav
      className={[
        "p-5  justify-between items-center flex",
        width < 768 ? "flex-col" : "flex-row",
      ].join(" ")}
    >
      {width < 768 && !onOpen ? (
        <ul className="h-[100vh] z-10 fixed top-12">{displayNavLinks()}</ul>
        ) : (
        <ul className="md:flex md:items-center ">{displayNavLinks()}</ul>
      )}
    </nav>
  );
}