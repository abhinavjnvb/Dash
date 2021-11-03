import { configureStore } from "@reduxjs/toolkit";
import UsersSlice from "./UsersSlice";
import AuthSlice from "./AuthSlice";
export const store = configureStore({
  reducer: {
    users: UsersSlice,
    auth: AuthSlice,
  },
});
