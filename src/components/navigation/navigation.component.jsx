import React from "react";
import { Link } from "react-router-dom";
import classes from "./navigation.module.css";
import Card from "../card/card.component";

const Navigation = ({ isNavOpened }) => {
  return (
    <nav className={`${classes["nav-container"]} ${!isNavOpened && "hidden"}`}>
      <Card>
        <ul className={classes.navbar}>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </Card>
    </nav>
  );
};

export default Navigation;
