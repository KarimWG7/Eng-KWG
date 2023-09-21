import React from "react";
import { AnimatePresence } from "framer-motion";

import PostCard from "../post-card/post-card.component";
import classes from "./posts-preview.module.css";
import Spinner from "../spinner/spinner.component";

const PostsPreview = ({ posts, isLoading }) => {
  return (
    <ul className={classes["posts-container"]}>
      {isLoading ? (
        <Spinner className={classes.spinner} />
      ) : (
        posts.map((post) => {
          return (
            <AnimatePresence mode="wait">
              <PostCard key={post.id} post={post} />
            </AnimatePresence>
          );
        })
      )}
    </ul>
  );
};

export default PostsPreview;
