import React from "react";
import classes from "./error.module.css";
import { Link } from "react-router-dom";

const Error = ({ error }) => {
  return (
    <section className={classes.error}>
      <span>{error.status}</span>
      <p>{error.error}</p>
      <Link to="">Home</Link>
    </section>
  );
};

export default Error;
