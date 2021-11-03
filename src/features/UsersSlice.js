import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../helpers.js";
let initialState = {
  users: [],
};
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  var config = {
    method: "get",
    url: `${API}user?page=1&limit=10`,
    headers: {
      "app-id": "617fd08ceb87ce1f776f4db6",
    },
  };
  let response = await axios.request(config);
  return response.data;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [fetchUsers.pending]: () => {
      console.log("Pending");
    },
    [fetchUsers.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.users = payload.data;
    },
    [fetchUsers.rejected]: () => {
      console.log("Rejected");
    },
  },
});

export default usersSlice.reducer;
