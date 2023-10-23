import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { reposSlice } from "./repos/reposSlice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [reposSlice.name]: reposSlice.reducer,
  },
});
