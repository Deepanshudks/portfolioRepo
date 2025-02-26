import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const ProfileCard = () => {
    return (
        <Link href="/about" className="col-span-2 bg-neutral-900 rounded-md px-5 py-5 flex flex-col space-y-3 hover:drop-shadow-[0_10px_8px_rgba(231,229,228,0.04)] transition ease-in-out delay-150 hover:-translate-y-1 hover:-translate-x-1 duration-300">
            <div>
                <Image
                    className="bg-teal-500 rounded-full"
                    src="/Img/Kuldeep.png"
                    alt="Logo"
                    width={100}
                    height={100}
                />
            </div>
            <div className="font-bold text-2xl font-serif">
                <span className="text-teal-500 font-bold">Kuldeep</span><br />
                <span className="text-white">Gaud</span>
            </div>
            <div className="flex justify-between items-center">
                <p className="font-sans text-lg font-semibold">
                    Full Stack Developer 💻
                </p>
                <MdKeyboardDoubleArrowRight className="w-8 h-8 hover:text-teal-500" />
            </div>
        </Link>
    );
};

export default ProfileCard;
