import React from "react";
import logo from "../../assets/8.png";
import classes from "./about-blog.module.css";
import Card from "../card/card.component";

const AboutBlog = () => {
  return (
    <section className={classes["about-blog"]}>
      <div className={classes["logo-container"]}>
        <img src={logo} alt="blog logo" />
      </div>
      <div className={classes.textBox}>
        <h1>Eng.KWG</h1>
        <p>A Blog Of Programming For Web Developers</p>
      </div>
    </section>
  );
};

export default AboutBlog;
