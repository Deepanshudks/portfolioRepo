import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const ProfileCard: React.FC = () => {
  return (
    <Link
      href="/about"
      className="col-span-2 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 flex flex-col space-y-4 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-2 group"
    >
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity"></div>
        <Image
          className="relative rounded-full ring-4 ring-teal-500/20 group-hover:ring-teal-500/40 transition-all object-cover"
          src="/Img/Kuldeep.png"
          alt="Kuldeep Gaud"
          width={96}
          height={96}
          priority
        />
      </div>

      <div>
        <div className="text-3xl font-bold mb-1">
          <span className="text-teal-400">Kuldeep</span>{" "}
          <span className="text-neutral-200">Gaud</span>
        </div>
        <div className="text-neutral-400 text-base leading-relaxed">
          Full Stack Developer 💻
        </div>
      </div>

      <div className="flex items-center gap-2 text-teal-400 font-semibold pt-2">
        <span>Learn More</span>
        <MdKeyboardDoubleArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};

export default ProfileCard;
