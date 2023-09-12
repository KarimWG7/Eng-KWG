import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./postsSlice/posts.reducer";
import { blogCategoriesReducer } from "./blogCategoriesSlice/blogCategories.reducer";
import { notificationReducer } from "./notificationSlice/notification.reducer";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    blogCategories: blogCategoriesReducer,
    notification: notificationReducer,
  },
});
