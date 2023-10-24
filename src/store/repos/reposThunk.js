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

export const searchUsers = createAsyncThunk(
  "user/searchUsers",
  async ({ value, page }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${URL}/search/users`, {
        params: {
          q: value,
          page: page,
          per_page: 10,
          sort: "",
          order: "",
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
