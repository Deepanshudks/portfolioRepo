import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { resumeLink } from "../shared/constant";

const Banner = () => {
    return (
        <div className="p-6 rounded-md bg-teal-500 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <p className="font-sans text-neutral-900 text-lg font-semibold text-center">
            Open to SDE/SWE internship and full-time positions, focusing on designing and implementing strong frontend and backend solutions.
            </p>
            <div className="mt-4 text-center">
                <Link href={resumeLink}>
                    <span className="flex items-center justify-center space-x-2 transition ease-in-out duration-300 transform hover:-translate-y-0.5 hover:-translate-x-0.5 cursor-pointer">
                        <span className="text-neutral-900">Resume:</span>
                        <MdArrowOutward className="w-5 h-5 text-neutral-900" />
                    </span>
                </Link>
            </div>
            <div className="mt-4 text-center">
                <Link href="mailto:kuldeepgaud.0810@gmail.com">
                    <span className="flex items-center justify-center space-x-2 transition ease-in-out duration-300 transform hover:-translate-y-0.5 hover:-translate-x-0.5 cursor-pointer">
                        <AiOutlineMail className="w-5 h-5 text-neutral-900" />
                        <span className="text-neutral-900">kuldeepgaud.0810@gmail.com</span>
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Banner;
