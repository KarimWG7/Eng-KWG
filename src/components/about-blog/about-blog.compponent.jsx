import React from "react";
import logo from "../../assets/8.png";
import classes from "./about-logo.module.css";
import Card from "../card/card.component";

const AboutBlog = () => {
  return (
    <section className={classes["about-blog"]}>
      <Card>
        <div className={classes["logo-container"]}>
          <img src={logo} alt="blog logo" />
        </div>
        <h1>About Blog</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
          quibusdam? Nemo repellat voluptates doloremque aut
        </p>
      </Card>
    </section>
  );
};

export default AboutBlog;
