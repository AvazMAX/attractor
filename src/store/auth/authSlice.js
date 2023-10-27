import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  return {
    isAuth: false,
    token: "",
  };
};

export const authSlice = createSlice({
  name: "auth",
  initialState: getInitialState(),
  reducers: {
    login: (state, action) => {
      if (action.payload) {
        state.token = action.payload;
        state.isAuth = true;
      }
    },
    logout: (state) => {
      state.isAuth = false;
      state.token = "";
    },
  },
});

export const authActions = authSlice.actions;
