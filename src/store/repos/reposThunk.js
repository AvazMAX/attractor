import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL, accessToken } from "../../utils/constants";

export const getReposGitHub = createAsyncThunk(
  "user/getRepos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${URL}/user/repos`, {
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
