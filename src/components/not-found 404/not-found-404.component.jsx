import React from "react";
import classes from "./not-found.module.css";
import image_404 from "./404.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className={classes["not-found"]}>
      <img src={image_404} alt="not-found" />
      <p>
        The page you currently asking for is <span>Not Found</span>
      </p>
      <Link to="/">Home</Link>
    </section>
  );
};

export default NotFound;
