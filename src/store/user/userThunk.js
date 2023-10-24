import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL, accessToken } from "../../utils/constants";
import { axiosInstance } from "../../config/axiosInstance";

export const getUserGitHub = createAsyncThunk(
  "user/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`${URL}/user`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getReposGitHub = createAsyncThunk(
  "user/getRepos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`${URL}/user/repos`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const searchUsers = createAsyncThunk(
  "user/searchUsers",
  async (payload, { rejectWithValue }) => {
    if (payload.value === "") {
      return null;
    }
    try {
      const response = await axiosInstance.get(`${URL}/search/users`, {
        params: {
          q: payload.value,
          page: payload.page,
          per_page: 10,
          sort: "",
          order: "",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const searchOneUsers = createAsyncThunk(
  "user/searchOneUsers",
  async (name, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`${URL}/users/${name}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getReposOneUser = createAsyncThunk(
  "user/getReposOneUser",
  async (name, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`${URL}/users/${name}/repos`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const putProfile = createAsyncThunk(
  "user/putProfile",
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.patch(`${URL}/user`, {
        name: payload.name,
        bio: payload.bio,
        company: payload.company,
        location: payload.location,
      });
      return dispatch(getUserGitHub());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
