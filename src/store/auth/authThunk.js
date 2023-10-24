import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { client_id, client_secret } from "../../utils/constants";
const cod = new URLSearchParams(window.location.search).get("code");

export const authUser = createAsyncThunk(
  "auth/authUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${cod}`
      );
      console.log("response: ", response);
      return response.data;
    } catch (error) {
      console.error("Error in authUser action:", error);
      return rejectWithValue(error);
    }
  }
);
