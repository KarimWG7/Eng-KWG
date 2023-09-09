import React from "react";
import classes from "./button.module.css";

const Button = ({ children, ...rest }) => {
  return (
    <button className={classes.btn} {...rest}>
      {children}
    </button>
  );
};

export default Button;
