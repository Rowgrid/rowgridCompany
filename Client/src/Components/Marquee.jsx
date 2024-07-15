import React from "react";
import Marquee from "react-fast-marquee";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiNextdotjs } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TfiHtml5 } from "react-icons/tfi";
import { SiExpress } from "react-icons/si";

const MarqueeTech = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-left pb-10 font-sen leading-8">
      <h2 className="text-gray-300 text-2xl sm:text-3xl pb-6">Tech Trends</h2>
      <div className="self-stretch flex flex-row justify-center items-center mb-6 md:mb-12">
        <Marquee className="h-24 overflow-hidden" gradient={false}>
          <div className="rounded-2xl border-4 border-neutral-800 p-5 sm:p-8 md:p-10 mx-2">
            <RiReactjsLine className="icon text-5xl sm:text-6xl md:text-7xl text-[#61dafb]" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-5 sm:p-8 md:p-10 mx-2">
            <TbBrandNextjs className="icon text-5xl sm:text-6xl md:text-7xl text-sky-700" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-5 sm:p-8 md:p-10 mx-2">
            <SiMongodb className="icon text-5xl sm:text-6xl md:text-7xl text-green-500" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-5 sm:p-8 md:p-10 mx-2">
            <SiNextdotjs className="icon text-5xl sm:text-6xl md:text-7xl text-cyan-400" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-5 sm:p-8 md:p-10 mx-2">
            <TbBrandRedux className="icon text-5xl sm:text-6xl md:text-7xl text-violet-700" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-5 sm:p-8 md:p-10 mx-2">
            <FaNodeJs className="icon text-5xl sm:text-6xl md:text-7xl text-green-500" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-5 sm:p-8 md:p-10 mx-2">
            <SiTailwindcss className="icon text-5xl sm:text-6xl md:text-7xl text-sky-700" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-5 sm:p-8 md:p-10 mx-2">
            <TfiHtml5 className="icon text-5xl sm:text-6xl md:text-7xl text-sky-700" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-5 sm:p-8 md:p-10 mx-2">
            <SiExpress className="icon text-5xl sm:text-6xl md:text-7xl text-red-700" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeTech;