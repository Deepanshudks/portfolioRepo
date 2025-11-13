import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { socialLinks } from "../shared/constant";

const Header: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
        Kuldeep Gaud
      </h1>
      <p className="text-lg md:text-xl text-neutral-300 mb-4">
        Full Stack Developer
      </p>
      <p className="text-sm md:text-base text-neutral-400 leading-relaxed mb-6">
        Full-stack developer specializing in React, Next.js, Node.js, and
        TypeScript. Experienced in scalable backend systems, cloud deployments,
        Prisma + PostgreSQL, MongoDB, and Docker. Passionate about building
        efficient, user-focused applications and solving real-world problems
        through clean, modern engineering.
      </p>

      <div className="flex items-center gap-4 mb-8">
        {socialLinks?.map((e, idx) => {
          const Icon = e.icon;
          return (
            <a
              key={e.href ?? idx}
              href={e.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={e.label}
              className="text-neutral-400 hover:text-teal-400 transition-colors duration-300"
            >
              <Icon className="w-6 h-6" />
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Header;
