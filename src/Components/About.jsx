import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div id="about" className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col lg:gap-20 justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
            <a
              href="https://drive.google.com/drive/folders/1LcezYu9rmChVoDlVcfQX7yPjYdw9oLuX?usp=sharing"
              class="w-52 h-14 inline-block  px-6 py-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-white font-bold rounded-full transition duration-300 hover:bg-blue-700 transform hover:scale-105 text-center"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
