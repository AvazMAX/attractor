import { createSlice } from "@reduxjs/toolkit";
import { authUser } from "./authThunk";

const initialState = {
  auth: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authUser.fulfilled, (state, action) => {
      state.auth = action.payload;
    });
  },
});
