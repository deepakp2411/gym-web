import React from "react";
import { footer } from "../data";

const Footer = () => {
  const { copyrightText, logo } = footer;

  return (
    <footer className="bg-neutral-500 h-[125px] md:h-[195px] px-[20px]">
      <div
        className="container mx-auto h-full flex justify-between items-center md:items-end md:mb-[20px]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <a href="/">
          <img src={logo} alt="ak" />
        </a>
        <p className="text-neutral-300 text-sm">{copyrightText}</p>
      </div>
    </footer>
  );
};

export default Footer;
