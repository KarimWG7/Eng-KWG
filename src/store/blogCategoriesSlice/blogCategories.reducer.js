import { createSlice } from "@reduxjs/toolkit";
import { getCategoryPosts } from "../../utils/blogger";

const blogCategoriesInitialState = {
  categories: [],
  postsOfCategories: {},
};

const blogCategoriesSlice = createSlice({
  name: "blogCategories",
  initialState: blogCategoriesInitialState,
  reducers: {
    getBlogcategories(state, action) {
      state.categories = action.payload;
    },
    getCategoryPosts(state, action) {
      const { category, posts } = action.payload;
      state.postsOfCategories[category] = posts;
    },
  },
});
export const blogCategoriesReducer = blogCategoriesSlice.reducer;
export const blogCategoriesActions = blogCategoriesSlice.actions;

export const getCategoryPostsAsync = (category) => async (dispatch) => {
  const posts = await getCategoryPosts(category);
  dispatch(blogCategoriesActions.getCategoryPosts({ category, posts }));
};
