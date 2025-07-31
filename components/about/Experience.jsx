import Link from "next/link";
import { experienceData } from "../shared/constant";
import { MdArrowOutward } from "react-icons/md";

export const Experience = () => {
  return (
    <div className="w-full">
      <h1 className="text-xl font-bold">Experience</h1>
      <div className="mt-5">
        {experienceData.slice().map((data, index) => (
          <div
            key={index}
            className="border-l-2 pl-1 transition ease-in-out duration-300 hover:border-teal-500"
          >
            <div className="group relative mb-8 p-4 transition duration-300 ease-in-out">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-lg">{data.position}</p>
                  <div className="text-sm italic space-x-2 flex items-center mt-1">
                    <p>at</p>
                    <Link
                      href={data.websiteUrl || ""}
                      className="transition ease-in-out duration-300 transform hover:-translate-y-0.5 hover:-translate-x-0.5 cursor-pointer"
                    >
                      <span className="flex items-center">
                        {data.companyName}
                        <MdArrowOutward className="w-4 h-4 ml-1" />
                      </span>
                    </Link>
                  </div>
                </div>
                <p className="font-light text-sm">
                  <span>{data.joinAt}</span>
                  <span> - </span>
                  <span>{data.leaveAt}</span>
                </p>
              </div>

              <div className="text-neutral-500">
                <ul className="mt-4 text-sm list-disc list-inside space-y-1">
                  {data.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
