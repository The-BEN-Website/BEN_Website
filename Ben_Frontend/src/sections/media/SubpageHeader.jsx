import React from "react";
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

// "Back" link on the left with the page title centred, used on Media sub-pages.
function SubpageHeader({ title, backTo = "/media", backLabel = "Back" }) {
  return (
    <header className="relative flex min-h-[48px] items-center justify-center">
      <Link
        to={backTo}
        className="absolute left-0 inline-flex items-center gap-2 rounded text-base font-medium text-black hover:text-primary sm:left-10"
      >
        <IoChevronBack aria-hidden="true" size={16} />
        {backLabel}
      </Link>
      <h1 className="max-w-[60%] truncate text-center text-lg font-medium text-black">{title}</h1>
    </header>
  );
}

export default SubpageHeader;
