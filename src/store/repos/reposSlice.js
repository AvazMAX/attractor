import { createSlice } from "@reduxjs/toolkit";
import { getReposGitHub, searchUsers } from "./reposThunk";

const initialState = {
  repos: [],
  users: {},
};

export const reposSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReposGitHub.fulfilled, (state, action) => {
      state.repos = action.payload;
    });
    builder.addCase(searchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      });
  },
});
