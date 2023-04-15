import React from "react";

import { about } from "../data";

import { IoIosArrowDroprightCircle } from "react-icons/io";

const About = () => {
  const { title, subtitle1, subtitle2, icon, link } = about;

  return (
    <section className="py-[80px] md:[110px] lg:pt-[140px] lg:pb-[180px]">
      <div className="container-mx-auto px-[20px] lg:px-[135px] ">
        <div
          className="section-title-group justify-start"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <img src={icon} alt="l" />
          <h2 className="h2 section-title">
            {title} <span className="text-primary-200">.</span>
          </h2>
        </div>

        <p
          className="md:text-body-md mb-12"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {subtitle1}
        </p>
        <p className="md:text-body-md mb-8">{subtitle2}</p>

        <div>
          <a
            href="/"
            className="link flex items-center gap-x-4 hover:gap-x-6 transition-all ease-out duration-500 "
          >
            {link}
            <IoIosArrowDroprightCircle className="text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
