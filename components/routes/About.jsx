import React from "react";
import Projects from "../about/Projects";
import Banner from "../about/Banner";
import { Experience } from "../about/Experience";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-between space-y-5 mx-5 my-8 text-neutral-200">
        <Banner />
{/*         <Experience /> */}
        <Projects />
      </div>
    </>
  );
};

export default About;
