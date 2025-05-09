import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosGetProperties } from "../../api/api";

export const getProperties = createAsyncThunk(
  "api/properties",
  async (_, { rejectWithValue }) => {
    try {
      const data = await axiosGetProperties();
      return data;
    } catch (error) {
      const { data, status } = error.response || {};
      return rejectWithValue({ data, status });
    }
  }
);
