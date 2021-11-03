import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../firebase.js";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
export const userSignup = createAsyncThunk(
  "auth/userSignup",
  async ({ email, password }) => {
    await createUserWithEmailAndPassword(auth, email, password);
    let token = await auth.currentUser.accessToken;
    localStorage.setItem("token", token);
  }
);
export const userSignin = createAsyncThunk(
  "auth/userSignup",
  async ({ email, password }) => {
    await signInWithEmailAndPassword(auth, email, password);
    let token = await auth.currentUser.accessToken;
    localStorage.setItem("token", token);
  }
);
export const googleSignin = createAsyncThunk("auth/googleSignin", async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
});

let initialState = {
  isAuth: null,
  errorMessage: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [userSignup.pending]: () => {
      console.log("pending");
    },
    [userSignup.fulfilled]: (state) => {
      state.isAuth = true;
      console.log(state.isAuth);
    },
    [userSignup.rejected]: (state, payload) => {
      if (payload.error.code === "auth/email-already-in-use") {
        state.errorMessage = "Email already exists.";
      }
    },
    [userSignin.pending]: () => {
      console.log("pending");
    },
    [userSignin.fulfilled]: (state) => {
      state.isAuth = true;
      console.log(state.isAuth);
    },
    [userSignin.rejected]: (state, payload) => {
      if (payload.error.code === "auth/wrong-password") {
        state.errorMessage = "You have entered wrong password.";
      }
      if (payload.error.code === "auth/user-not-found") {
        state.errorMessage = "User not found.";
      }
    },
    [googleSignin.fulfilled]: (state) => {
      state.isAuth = true;
      console.log(state.isAuth);
    },
    [googleSignin.rejected]: (state, payload) => {
      console.log(payload.error);
    },
  },
});

export default authSlice.reducer;
