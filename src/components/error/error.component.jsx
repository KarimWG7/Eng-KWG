import React from "react";
import classes from "./error.module.css";
import Button from "../button/button.component";

const Error = ({ error, refetch }) => {
  return (
    <section className={classes.error}>
      <span>{error.status}</span>
      <p>{error.error}</p>
      <Button onClick={() => refetch()}>Reresh</Button>
    </section>
  );
};

export default Error;
