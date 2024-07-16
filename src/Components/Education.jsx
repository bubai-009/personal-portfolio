import React from "react";
import { EXPERIENCES } from "../constants";

const Education = () => {
  return (
    <div id="education" className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Education</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.stream} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.college}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              <p className="mb-4 text-neutral-400">{experience.completed}</p>
              {experience.technologies.map((tech, index) => (
                <span
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
