import React from "react";
import classes from "./spinner.module.css";

const Spinner = ({ className }) => {
  return (
    <div className={`${classes.spinner} ${className}`}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
