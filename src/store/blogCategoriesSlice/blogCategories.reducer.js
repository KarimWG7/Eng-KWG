import { createSlice } from "@reduxjs/toolkit";
import { getCategoryPosts } from "../../utils/blogger";

const blogCategoriesInitialState = {
  error: {},
  isLoading: false,
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
    getCategoryPostsStart(state) {
      state.isLoading = true;
    },
    getCategoryPostsSuccess(state, action) {
      const { category, posts } = action.payload;
      state.postsOfCategories[category] = posts;
      state.isLoading = false;
    },
    getCategoryPostsFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const blogCategoriesReducer = blogCategoriesSlice.reducer;
export const blogCategoriesActions = blogCategoriesSlice.actions;

export const getCategoryPostsAsync = (category) => async (dispatch) => {
  try {
    dispatch(blogCategoriesActions.getCategoryPostsStart());
    const posts = await getCategoryPosts(category);
    dispatch(
      blogCategoriesActions.getCategoryPostsSuccess({ category, posts })
    );
  } catch (error) {
    dispatch(blogCategoriesActions.getCategoryPostsFailed(error));
  }
};
