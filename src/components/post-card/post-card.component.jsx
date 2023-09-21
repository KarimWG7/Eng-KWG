import React from "react";
import { motion } from "framer-motion";
import classes from "./post-card.module.css";
import Label from "../label/label.component";
import { Link, useParams } from "react-router-dom";

const PostCard = ({ post }) => {
  const { id, title, labels, images } = post;
  return (
    <motion.li
      layout
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 30, opacity: 0 },
        exit: { y: -30, opacity: 0 },
      }}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={classes["post-card"]}
    >
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
    </motion.li>
  );
};

export default PostCard;
