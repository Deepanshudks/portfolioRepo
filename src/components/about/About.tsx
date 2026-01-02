"use client";

import React from "react";
import Banner from "./Banner";
import Projects from "./Projects";
import Header from "./Header";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] text-neutral-100">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="mb-12">
          <Header />
          <Banner />
        </div>

        <div className="space-y-16">
          <section>
            <Projects />
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800 text-center">
          <p className="text-neutral-500 text-sm">
            This journey continues... 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
