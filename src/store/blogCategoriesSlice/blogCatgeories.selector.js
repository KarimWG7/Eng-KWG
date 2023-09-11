import { createSelector } from "@reduxjs/toolkit";

const selectBlogCategoriesReducer = (state) => state.blogCategories;

export const selectBlogCategories = createSelector(
  [selectBlogCategoriesReducer],
  (blogCategories) => blogCategories.categories
);
export const selectBlogCategoriesPosts = createSelector(
  [selectBlogCategoriesReducer],
  (blogCategories) => blogCategories.postsOfCategories
);
