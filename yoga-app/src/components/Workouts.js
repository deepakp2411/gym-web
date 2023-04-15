import React from "react";

import { workouts } from "../data";
import WorkoutSlider from "./WorkoutSlider";

const Workouts = () => {
  const { title, icon } = workouts;
  return (
    <section className="">
      <div
        className="section-title-group max-w-[540px] mx-auto px-4 lg:px-0"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <img src={icon} alt="l" />
        <h2 className="h2 section-title">
          {title} <span className="text-primary-200">.</span>
        </h2>
      </div>

      <div data-aos="fade-down" data-aos-delay="500">
        <WorkoutSlider />
      </div>
    </section>
  );
};

export default Workouts;
