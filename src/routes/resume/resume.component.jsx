import React from "react";
import classes from "./resume.module.css";
import commingSoon from "../../assets/Remove background project.png";

const Resume = () => {
  return (
    <section className={classes.resume}>
      <img src={commingSoon} alt="comming soon" />
      <h1>Coming Soon</h1>
    </section>
  );
};

export default Resume;
