import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import classes from "./navigation.module.css";
import Card from "../card/card.component";

import { BiUser } from "react-icons/bi";
import { BiPencil } from "react-icons/bi";
import { BiMessageSquareDots } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineProfile } from "react-icons/ai";
import useWidth from "../../hooks/usewidth";

const Navigation = () => {
  const width = useWidth();
  const [isSmall, setIsSmall] = useState(width < 1175);
  useEffect(() => {
    if (width > 1175) {
      setIsSmall(false);
    }
    if (width < 1175) {
      setIsSmall(true);
    }
  }, [width]);
  console.log(width);
  const vartiants = {
    smallHidden: {
      bottom: -50,
      opacity: 0,
    },
    smallShown: {
      bottom: 0,
      opacity: 1,
    },
    bigHidden: {
      left: -50,
      opacity: 0,
    },
    bigShown: {
      opacity: 1,
      left: 20,
    },
  };
  return (
    <motion.nav
      variants={vartiants}
      initial={isSmall ? vartiants.smallHidden : vartiants.bigHidden}
      animate={isSmall ? vartiants.smallShown : vartiants.bigShown}
      exit={width < 1175 ? vartiants.smallHidden : vartiants.bigHidden}
      className={classes["nav-container"]}
    >
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
            <Link className={classes["nav-link"]} to="/blog/كيمياء">
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
    </motion.nav>
  );
};

export default Navigation;
