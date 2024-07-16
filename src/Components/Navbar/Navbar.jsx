import React, { useState, useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./Navbar.css";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    menuRef.current.style.right = "0";
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    setIsMenuOpen(false);
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6 navbar">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="mx-2 text-3xl">Sc</h1>
      </div>
      <img
        onClick={openMenu}
        src={menu_open}
        alt="Open Menu"
        className="nav-mob-open"
      />
      <ul
        ref={menuRef}
        className="flex items-center list-none gap-12 text-base nav-menu"
      >
        <img
          onClick={closeMenu}
          className={`nav-mob-close ${isMenuOpen ? "visible" : "hidden"}`}
          src={menu_close}
          alt="Close Menu"
        />
        <li>
          <AnchorLink className="no-underline" href="#home">
            <p
              onClick={() => setMenu("home")}
              className={
                menu === "home"
                  ? "pb-1 border-b-2 border-solid border-[#a21caf]"
                  : ""
              }
            >
              Home
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="no-underline" href="#about">
            <p
              onClick={() => setMenu("about")}
              className={
                menu === "about"
                  ? "pb-1 border-b-2 border-solid border-[#a21caf]"
                  : ""
              }
            >
              About Me
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="no-underline" href="#education">
            <p
              onClick={() => setMenu("education")}
              className={
                menu === "education"
                  ? "pb-1 border-b-2 border-solid border-[#a21caf]"
                  : ""
              }
            >
              Educations
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="no-underline" href="#technology">
            <p
              onClick={() => setMenu("technology")}
              className={
                menu === "technology"
                  ? "pb-1 border-b-2 border-solid border-[#a21caf]"
                  : ""
              }
            >
              Skills
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="no-underline" href="#projects">
            <p
              onClick={() => setMenu("projects")}
              className={
                menu === "projects"
                  ? "pb-1 border-b-2 border-solid border-[#a21caf]"
                  : ""
              }
            >
              Projects
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="no-underline" href="#contact">
            <p
              onClick={() => setMenu("contact")}
              className={
                menu === "contact"
                  ? "pb-1 border-b-2 border-solid border-[#a21caf]"
                  : ""
              }
            >
              Contact
            </p>
          </AnchorLink>
        </li>
      </ul>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl nav-connect">
        <a
          href="https://www.linkedin.com/in/shiva-chatterjee-998066302/"
          className="cursor-pointer"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/bubai-009" className="cursor-pointer">
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u/bubai_chatterjee/"
          className="cursor-pointer"
        >
          <SiLeetcode />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
