import React from 'react';
import { NavLink } from 'react-router-dom';

const SIGNUP = 'Signup';
const LOGIN = 'Login';

const NavLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "FAQs", href: "/faqs" },
  { title: "Contact", href: "/contact" },
  { title: "Article", href: "/article" },
  { title: "Community", href: "/community" },
  { title: "Login", href: "/login" },
  { title: "Signup", href: "/signup" },
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
              "btn py-2 px-3 mx-3 text-center   hover:text-blue-700 ",
              isActive ? "underline decoration-2 active-link" : "",
              width < 1024 ? "block my-5" : "inline-block my-2 ml-0",
              link.title === LOGIN
                ? "login-btn ml-3 hover:bg-indigo-700 hover:text-white"
                : link.title === SIGNUP
                ? "signup-btn ml-3 hover:bg-white hover:text-indigo-700"
                : "",
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
        width < 1024 ? "flex-col" : "flex-row",
      ].join(" ")}
    >
      {width < 1024 && !onOpen ? (
        <ul className="h-[100vh] z-10 fixed top-12">{displayNavLinks()}</ul>
        ) : (
        <ul className="md:flex md:items-center ">{displayNavLinks()}</ul>
      )}
    </nav>
  );
}
