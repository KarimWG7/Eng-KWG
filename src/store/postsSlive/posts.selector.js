import { createSelector } from "@reduxjs/toolkit";

const selectPostsReducer = (state) => state.posts;
export const selectPosts = createSelector([selectPostsReducer], (posts) => {
  return posts.posts;
});
