import { createSlice } from "@reduxjs/toolkit";
import { getLatestPosts } from "../../utils/blogger";

const postsInitialState = {
  posts: [],
};

const postsSlice = createSlice({
  initialState: postsInitialState,
  name: "posts",
  reducers: {
    getPosts(state, action) {
      state.posts = action.payload;
    },
  },
});

export const postsReducer = postsSlice.reducer;
export const postsActions = postsSlice.actions;

/* Redux toolkit thunks */
export const getData = () => async (dispatch) => {
  const data = await getLatestPosts();
  dispatch(postsActions.getPosts(data));
};
