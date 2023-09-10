import React from "react";

import PostCard from "../post-card/post-card.component";
import classes from "./posts-preview.module.css";

const PostsPreview = ({ posts }) => {
  return (
    <ul className={classes["posts-container"]}>
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </ul>
  );
};

export default PostsPreview;
