import React from 'react'
import classes from "./about.module.css";
import commingSoon from "../../assets/Remove background project.png";

const About = () => {
  return (
    <section className={classes.about}>
      <img src={commingSoon} alt="comming soon" />
      <h1>Coming Soon</h1>
    </section>
  );
};

export default About