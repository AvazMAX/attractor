import { createSlice } from "@reduxjs/toolkit";
import {
  getReposGitHub,
  getReposOneUser,
  getUserGitHub,
  searchOneUsers,
  searchUsers,
} from "./userThunk";

const initialState = {
  user: [],
  repos: [],
  users: {},
  oneUser: {},
  oneUserRepos: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserGitHub.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(getReposGitHub.fulfilled, (state, action) => {
      state.repos = action.payload;
    });
    builder.addCase(searchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(searchOneUsers.fulfilled, (state, action) => {
      state.oneUser = action.payload;
    });
    builder.addCase(getReposOneUser.fulfilled, (state, action) => {
      state.oneUserRepos = action.payload;
    })
  },
});
