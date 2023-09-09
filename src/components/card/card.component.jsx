import React from "react";
import classes from "./card.module.css";

const Card = ({ children, className, ...rest }) => {
  return <div {...rest} className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
