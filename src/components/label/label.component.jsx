import React from "react";
import classes from "./label.module.css";
import { Link } from "react-router-dom";

const Label = ({ children, id }) => {
  return (
    <Link>
      <span className={classes.label}>{children}</span>
    </Link>
  );
};

export default Label;
