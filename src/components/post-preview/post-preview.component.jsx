import React from "react";
// import { POST } from "../../posts";
import Card from "../card/card.component";

import classes from "./post-preview.module.css"

const PostPreview = ({post}) => {
  return (
    <section className={classes.PostPreview}>
      <Card dangerouslySetInnerHTML={{ __html: post.content }}></Card>
    </section>
  );
};

export default PostPreview;
