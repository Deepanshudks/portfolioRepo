import React from "react";
import Image from "next/image";

const Greeting: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6 lg:px-20 relative overflow-hidden">
      <div className="absolute top-20 -left-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <div className="inline-block">
              <span className="px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium">
                👋 Welcome to my portfolio
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl text-neutral-300 font-light">
              Hi, I'm{" "}
              <span className="block mt-2 text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-teal-400 via-teal-300 to-yellow-500 bg-clip-text text-transparent">
                Kuldeep
              </span>
            </h2>

            <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold font-Rampart bg-gradient-to-r from-teal-200 via-teal-300 to-teal-400 bg-clip-text text-transparent drop-shadow-2xl">
              I Code.
            </h1>
          </div>

          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed">
            Full-stack developer focused on building polished, efficient, and
            user-centric web experiences. Turning complex ideas into simple,
            functional products is what I do best.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/about"
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-neutral-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
            >
              View My Work
            </a>
          </div>
        </div>

        <div className="relative lg:order-last order-first">
          <div className="relative w-full max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 via-teal-400/20 to-yellow-500/30 rounded-full blur-3xl opacity-50 animate-pulse"></div>

            <div className="relative">
              <Image
                src="/Img/2.svg"
                alt="Kuldeep - Developer Portfolio"
                width={600}
                height={800}
                className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
