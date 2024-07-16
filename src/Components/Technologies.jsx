import React from "react";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import Bar from "./Bar/Bar";

const Technologies = () => {
  return (
    <div id="technology" className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaReact className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-lime-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-7xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJava className="text-7xl text-sky-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPython className="text-7xl text-yellow-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-orange-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3Alt className="text-7xl text-blue-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoJavascript className="text-7xl text-yellow-300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaBootstrap className="text-7xl text-violet-800" />
        </div>
        <div className="sm:items-center md:items-center lg:items-center">
          <Bar />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
