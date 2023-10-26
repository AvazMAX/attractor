import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { userSlice } from "./user/userSlice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
});
