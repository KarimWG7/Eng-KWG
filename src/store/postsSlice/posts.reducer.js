import { createSlice } from "@reduxjs/toolkit";
import { getLatestPosts } from "../../utils/blogger";

const postsInitialState = {
  error: {},
  isLoading: false,
  posts: [],
};

const postsSlice = createSlice({
  initialState: postsInitialState,
  name: "posts",
  reducers: {
    getPostsStart(state) {
      state.isLoading = true;
    },
    getPostsSuccess(state, action) {
      state.posts = action.payload;
      state.isLoading = false;
    },
    getPostsFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const postsReducer = postsSlice.reducer;
export const postsActions = postsSlice.actions;

/* Redux toolkit thunks */
export const getData = () => async (dispatch) => {
  try {
    dispatch(postsActions.getPostsStart());
    const data = await getLatestPosts();
    dispatch(postsActions.getPostsSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(postsActions.getPostsFailed(error));
  }
};
