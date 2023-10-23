import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL, accessToken } from "../../utils/constants";

export const getUserGitHub = createAsyncThunk(
  "user/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${URL}/user`, {
        headers: {
          Authorization: `token ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
