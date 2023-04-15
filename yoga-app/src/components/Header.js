import React, { useEffect, useState } from "react";

import { header } from "../data";

import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";

import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  const [navMobile, setNavMobile] = useState(false);

  const { logo, btnLoginText, btnSignupText } = header;

  return (
    <header
      className={`${
        isActive ? "bg-neutral-500 py-[16px]" : "bg-transparent py-[20px]"
      } fixed max-w-[1440px] flex justify-between items-center mx-auto z-30 left-0 right-0 px-[20px] lg:px-[80px] transition-all duration-500`}
    >
      {/* logo  */}
      <a href="/">
        <img className="h-[30px]" src={logo} alt="loho" />
      </a>

      {/* nav  */}
      <Nav />
      {/* btns  */}
      <div className="hidden lg:flex space-x-4">
        <button className="btn btn-sm text-white hover:text-primary-200 transition-all duration-500">{btnLoginText}</button>
        <button className="btn btn-sm btn-primary">{btnSignupText}</button>
      </div>

      {/* nav menu  */}
      <div
        className="lg:hidden absolute right-4 "
        onClick={() => setNavMobile(!navMobile)}
      >
        {navMobile ? (
          <RiCloseFill className="text-primary-200 cursor-pointer text-3xl transition-all duration-500 ease-linear" />
        ) : (
          <RiMenu4Fill className="text-primary-200 cursor-pointer text-3xl transition-all duration-700 ease-out" />
        )}
      </div>
      <NavMobile navMobile={navMobile} />
    </header>
  );
};

export default Header;
