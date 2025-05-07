import { createSlice } from "@reduxjs/toolkit";
import { getProperties } from "./properties-operations";


const initialState = {
  error: null,
  message: null,
  loading: false,
  properties: [],
};

const properties = createSlice({
  name: "properties",
  initialState,
  reducers: {
    clearError: (store, action) => {
      store.error = action.payload;
    },
    clearMessage: (store, action) => {
      store.message = action.payload;
    },
    // setPropertiesData: (store, action) => {
    //   store.properties = action.payload;
    // },
    // clearProperties: (store) => {
    //   store.error = null;
    //   store.message = null;
    //   store.loading = false;
    //   store.userInfo = [];
    // },
  },
  extraReducers: (builder) => {
    builder
    // * GET ALL PROPERTIES
        .addCase(getProperties.pending, (store) => {
            store.loading = true;
            store.error = null;
            store.properties = null;
        })
        .addCase(getProperties.fulfilled, (store, { payload }) => {
            console.log("::::::PAYLOAD::::::", payload)
            store.loading = false;
            store.properties = payload;
            store.error = null;
        })
        .addCase(getProperties.rejected, (store, { payload }) => {
            store.loading = false;
            store.error = payload?.data?.message || "Oops, something went wrong, try again";
        });
  },
});

export default properties.reducer;
export const { clearError, clearMessage } =
properties.actions;
