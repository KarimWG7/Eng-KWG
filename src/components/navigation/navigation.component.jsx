import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import classes from "./navigation.module.css";
import Card from "../card/card.component";

import { BiUser } from "react-icons/bi";
import { BiPencil } from "react-icons/bi";
import { BiMessageSquareDots } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineProfile } from "react-icons/ai";

const Navigation = () => {
  return (
    <nav className={classes["nav-container"]}>
      <Card>
        <ul className={classes.navbar}>
          <li>
            <Link className={classes["nav-link"]} to="/">
              <AiOutlineHome className={classes["nav-icon"]} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link className={classes["nav-link"]} to="/about">
              <BiUser className={classes["nav-icon"]} />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link className={classes["nav-link"]} to="/blog">
              <BiPencil className={classes["nav-icon"]} />
              <span>Blog</span>
            </Link>
          </li>
          <li>
            <Link className={classes["nav-link"]} to="/resume">
              <AiOutlineProfile className={classes["nav-icon"]} />
              <span>Resume</span>
            </Link>
          </li>
          <li>
            <Link className={classes["nav-link"]} to="/contact">
              <BiMessageSquareDots className={classes["nav-icon"]} />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </Card>
    </nav>
  );
};

export default Navigation;
