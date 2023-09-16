import React from "react";
import classes from "./not-found.module.css";
import image_404 from "./404.png";

const NotFound = () => {
  return (
    <section className={classes["not-found"]}>
      <img src={image_404} />
      <p>
        The page you currently asking for is <span>Not Found</span>
      </p>
    </section>
  );
};

export default NotFound;
