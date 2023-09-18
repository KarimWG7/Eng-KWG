import React from "react";

import classes from "./post-preview.module.css";
import { Navigate } from "react-router-dom";

const PostPreview = ({ post }) => {
  if (!post) {
    return <Navigate to="/not-found" />;
  }
  return (
    <section className={classes.PostPreview}>
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
    </section>
  );
};

export default PostPreview;
