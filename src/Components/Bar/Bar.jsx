import React from "react";
import "./Bar.css";
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

const Bar = () => {
  return (
    <section>
      <div className="container1">
        <div className="technical-bars">
          <div className="bar">
            <FaHtml5 style={{ color: "#E44D26" }} />
            <div className="info">
              <span>HTML</span>
            </div>
            <div className="progress-line html">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <FaCss3Alt style={{ color: "#2965f1" }} />
            <div className="info">
              <span>CSS</span>
            </div>
            <div className="progress-line css">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <IoLogoJavascript style={{ color: "yellow" }} />
            <div className="info">
              <span>JAVASCRIPT</span>
            </div>
            <div className="progress-line javascript">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <FaReact style={{ color: "aqua" }} />
            <div className="info">
              <span>React</span>
            </div>
            <div className="progress-line react">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <SiMongodb style={{ color: "#4DB33D" }} />
            <div className="info">
              <span>MONGODB</span>
            </div>
            <div className="progress-line mongodb">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <FaNodeJs style={{ color: "#98B632" }} />
            <div className="info">
              <span>NODE JS</span>
            </div>
            <div className="progress-line nodejs">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <SiExpress style={{ color: "white" }} />
            <div className="info">
              <span>EXPRESS JS</span>
            </div>
            <div className="progress-line expressjs">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <RiTailwindCssFill style={{ color: "rgb(10, 169, 169)" }} />
            <div className="info">
              <span>TAILWIND CSS</span>
            </div>
            <div className="progress-line tailwindcss">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <FaJava style={{ color: "rgb(21, 109, 164)" }} />
            <div className="info">
              <span>JAVA</span>
            </div>
            <div className="progress-line java">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <FaPython style={{ color: "#FFD43B" }} />
            <div className="info">
              <span>PYTHON</span>
            </div>
            <div className="progress-line python">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <FaPython style={{ color: "#5b21b6" }} />
            <div className="info">
              <span>BOOTSTRAP</span>
            </div>
            <div className="progress-line bootstrap">
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <div className="container1">
        <div className="radial-bars">
          <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle
                className="progress-bar"
                cx="100"
                cy="100"
                r="80"
              ></circle>
              <circle className="path path-1" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage">90%</div>
            <div className="text">Creativity</div>
          </div>
          <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle
                className="progress-bar"
                cx="100"
                cy="100"
                r="80"
              ></circle>
              <circle className="path path-2" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage">65%</div>
            <div className="text">Communication</div>
          </div>
          <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle
                className="progress-bar"
                cx="100"
                cy="100"
                r="80"
              ></circle>
              <circle className="path path-3" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage">75%</div>
            <div className="text">Problem Solving</div>
          </div>
          <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle
                className="progress-bar"
                cx="100"
                cy="100"
                r="80"
              ></circle>
              <circle className="path path-4" cx="100" cy="100" r="80"></circle>
            </svg>
            <div className="percentage">85%</div>
            <div className="text">Teamwork</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bar;
