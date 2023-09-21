import React from "react";
import { motion } from "framer-motion";

import classes from "./post-preview.module.css";
import { Navigate } from "react-router-dom";

const PostPreview = ({ post }) => {
  if (!post) {
    return <Navigate to="/not-found" />;
  }
  return (
    <motion.section layout className={classes.PostPreview}>
      <img
        src={post.images[0].url}
        alt="the post "
        className={classes["post-image"]}
      />
      <h2>{post.title}</h2>
      <div
        className={classes.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </motion.section>
  );
};

export default PostPreview;
