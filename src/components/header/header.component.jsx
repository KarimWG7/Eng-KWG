import React from "react";
import classes from "./header.module.css";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoCodepen } from "react-icons/bi";
import { SiUpwork } from "react-icons/si";
import { BsSun } from "react-icons/bs";
import { RiMenuFoldLine } from "react-icons/ri";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = ({ setIsNavOpen, isNavOpen }) => {
  const navClickHadler = () => {
    setIsNavOpen((prevState) => {
      return !prevState;
    });
  };
  return (
    <header className={classes.header}>
      <Link to="/contact">Hire Me</Link>
      <ul className={classes.social}>
        <li>
          <a target="_blank" href="https://mostaql.com/u/karim_ghanim">
            <span className={classes.mostaql}></span>
          </a>
        </li>
        <li>
          <a target="_blank" href="www.linkedin.com/in/karim-ghanem-99b805228">
            <BiLogoLinkedin />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/KarimWG7">
            <BiLogoGithub />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://codepen.io/Karimwg">
            <BiLogoCodepen />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.upwork.com/freelancers/~011e4d04eabb6768a5"
          >
            <SiUpwork />
          </a>
        </li>
      </ul>
      <div className={classes["toggle-options"]}>
        <span>
          <BsSun />
        </span>
        <span onClick={navClickHadler}>
          {isNavOpen ? <RiMenuFoldLine /> : <RiMenuUnfoldLine />}
        </span>
      </div>
    </header>
  );
};

export default Header;
