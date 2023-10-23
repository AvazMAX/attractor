import { createSlice } from "@reduxjs/toolkit";
import { getReposGitHub } from "./reposThunk";

const initialState = {
  repos: [],
};

export const reposSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReposGitHub.fulfilled, (state, action) => {
      state.repos = action.payload;
    });
  },
});
