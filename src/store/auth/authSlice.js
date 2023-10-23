import { createSlice } from "@reduxjs/toolkit";
import { getUserGitHub } from "./authThunk";

const initialState = {
  user: [],
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserGitHub.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});
