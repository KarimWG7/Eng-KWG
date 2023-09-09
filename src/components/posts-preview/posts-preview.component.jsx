import React from "react";
import { Link } from "react-router-dom";

import PostCard from "../post-card/post-card.component";
import POSTS from "../../posts";
import classes from "./posts-preview.module.css";
import Card from "../card/card.component";

const PostsPreview = () => {
  return (
    // <Card>
    <ul className={classes["posts-container"]}>
      {POSTS.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </ul>
    // </Card>
  );
};

export default PostsPreview;
