import { createSlice } from "@reduxjs/toolkit";

const notificationInitialState = {
  statusCode: 200,
  message: "",
  isError: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState: notificationInitialState,
  reducers: {
    showNotification(state, action) {
      const { statusCode, message } = action.payload;
      if (statusCode > 299) state.isError = true;
      state.message = message;
      state.statusCode = statusCode;
    },
    clearNotification(state) {
      state.isError = false;
      state.message = "";
      state.statusCode = 200;
    },
  },
});

export const notificationActions = notificationSlice.actions;
export const notificationReducer = notificationSlice.reducer;
