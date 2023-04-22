import React, {useState} from 'react';
import NavBar from './Nav1';
import Logo from '../../../src/assets/Home_assets/Logo1.webp';
import { NavLink } from 'react-router-dom';
import useWindowDimension from '../../hooks/useWindowDimension';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineClose } from "react-icons/md";
import { IconContext } from 'react-icons';

function Header() {
    const [isOpen, setOpen] = useState(true);
    const { width } = useWindowDimension();

    const handleOpen = () => {
      return setOpen(!isOpen)
    }

    return (
      <header className="header w-full relative fixed z-10 text-black sm:text-white">
        <div className="xl:container mx-auto">
          <div className="flex flex-row items-center justify-between md:flex md:justify-between sm:px-12 lg:px-[0.01rem] px-4">
            <NavLink
              to="/home"
              className={["block my-3", width > 600 ? "w-36" : "w-20"].join(
                " "
              )}
            >
              <div className="brand-logo cursor-pointer">
                <img src={Logo} alt="BEN logo" />
              </div>
            </NavLink>
            {width < 768 ? (
              <div onClick={() => handleOpen()}>
                <IconContext.Provider 
                  value={{ color: "#000000", size: "2rem" }}
                >
                  {/* ISOPEN, CHANGES IT TO X, WHILE !ISOPEN CHANGES IT TO HAMBURGER */}
                  {!isOpen ? <MdOutlineClose /> : <GiHamburgerMenu />}
                </IconContext.Provider>
              </div>
            ) : (
              <NavBar width={width} onOpen={isOpen}/>
            )}
          </div>
          {/* note the first isopen. isOpen, opens the mobile nav. !isopen closes it
          while the isoPEN FOR THE SECOND ONE, REMOVES THE WIDTH OF THE MOBILE. WHILE !ISOPEN, OPENS IT
          */}
            {!isOpen && <NavBar width={width} onOpen={!isOpen}/>}
        </div>
      </header>
    );
}

export default Header;