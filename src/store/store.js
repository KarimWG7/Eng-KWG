import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { postsReducer } from "./postsSlice/posts.reducer";
import { blogCategoriesReducer } from "./blogCategoriesSlice/blogCategories.reducer";
import { notificationReducer } from "./notificationSlice/notification.reducer";
import { bloggerApi } from "./boggerApi/bloggerApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    blogCategories: blogCategoriesReducer,
    notification: notificationReducer,
    [bloggerApi.reducerPath]: bloggerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bloggerApi.middleware),
});

setupListeners(store.dispatch);
