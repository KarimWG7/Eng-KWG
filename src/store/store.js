import { configureStore } from "@reduxjs/toolkit";
import { bloggerApi } from "./boggerApi/bloggerApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [bloggerApi.reducerPath]: bloggerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bloggerApi.middleware),
});

setupListeners(store.dispatch);
