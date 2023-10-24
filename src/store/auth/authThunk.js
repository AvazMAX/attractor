import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  URL,
  accessToken,
  client_id,
  client_secret,
} from "../../utils/constants";
import { axiosInstance } from "../../config/axiosInstance";
import axios from "axios";
const cod = new URLSearchParams(window.location.search).get("code");
console.log("cod: ", cod);

export const authUser = createAsyncThunk(
  "auth/authUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${cod}`
      );
      console.log("response: ", response);
      return response.data; // Assuming GitHub sends the token in the response data
    } catch (error) {
      console.error("Error in authUser action:", error);
      return rejectWithValue(error);
    }
  }
);
