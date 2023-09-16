import React from "react";
// import { POST } from "../../posts";
import Card from "../card/card.component";

import classes from "./post-preview.module.css"
import { Navigate } from "react-router-dom";

const PostPreview = ({ post }) => {
  if (!post) {
    return <Navigate to="/not-found" />;
  }
  return (
    <section className={classes.PostPreview}>
      <Card dangerouslySetInnerHTML={{ __html: post.content }}></Card>
    </section>
  );
};

export default PostPreview;
