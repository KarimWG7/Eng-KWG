import React from "react";
import classes from "./post-card.module.css";
import Label from "../label/label.component";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const { id, title, labels, images } = post;
  return (
    <li className={classes["post-card"]}>
      <div className={classes["image-container"]}>
        <Link to={`/posts/${post.id}`}>
          <img src={images[0].url} alt="post-images" />
        </Link>
      </div>
      <h1>{title}</h1>
      <div className={classes.labels}>
        {labels.map((label) => (
          <Label key={label}>{label}</Label>
        ))}
      </div>
    </li>
  );
};

export default PostCard;
