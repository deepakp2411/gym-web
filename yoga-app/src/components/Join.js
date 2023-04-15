import React from "react";
import { join } from "../data";

const Join = () => {
  const { image, title, subtitle, btnText } = join;

  return (
    <section className="bg-neutral-500 min-h-[537px]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:-space-x-12 -space-y-24 lg:-space-y mb-[80px]">
          <div className="-mt-[80px] max-w-[276px] md:max-w-[442px] lg:max-w-full">
            <img src={image} alt="s" />
          </div>

          <div className="max-w-[350px] md:max-w-[492px] lg:max-w-full ml-[30px]" data-aos="fade-right" data-aos-offset="100" data-aos-delay="100">
            <h2 className="text-white h1 md:text-[60px] md:leading-[62px] mb-4 lg:mb-6">
              Want to Join <span className="text-primary-200">&</span> have fun
            </h2>
            <p className="text-body-sm text-white mb-4 lg:mb-6 max-w-[348px] md:max-w-[450px] lg:max-w-[492px]">
              {subtitle}
            </p>
            <button className="btn btn-secondary btn-lg">{btnText}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
