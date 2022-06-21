import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../apiAuth";

export const signUp = createAsyncThunk(
  "auth/signup",
  async ({ input, navigate, user2 }) => {
    try {
      const response = await api.signUp(input);
      console.log(response.data);
      navigate(`/${response?.data?.user?._id}`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ input, navigate, user2 }) => {
    try {
      const response = await api.signIn(input);
      console.log(response.data);

      navigate(`/${response?.data?.user?._id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const addToCart2 = createAsyncThunk(
  "auth/addtocart",
  async ({ Image, title, price, id, userid }) => {
    try {
      const response = await api.addToCart2({
        Image,
        title,
        price,
        id,
        userid,
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: [],
    message: "",
    loading: true,
  },
  reducers: {},
  extraReducers: {
    [signUp.pending]: (state, action) => {
      return { ...state };
    },
    [signUp.fulfilled]: (state, action) => {
      localStorage.setItem("profile", JSON.stringify(action.payload));
      return {
        ...state,
        user: localStorage.setItem("profile", JSON.stringify(action.payload)),
      };
    },
    [signUp.rejected]: (state, action) => {
      return { ...state, message: "User Already Exist" };
    },
    [signIn.pending]: (state, action) => {
      return { ...state };
    },
    [signIn.fulfilled]: (state, action) => {
      localStorage.setItem("profile", JSON.stringify(action.payload));
      return {
        ...state,
        user: localStorage.setItem("profile", JSON.stringify(action.payload)),
      };
    },
    [signIn.rejected]: (state, action) => {
      return { ...state };
    },
    [addToCart2.pending]: (state, action) => {
      return { ...state };
    },
    [addToCart2.fulfilled]: (state, action) => {
      return { ...state, message: "successfully added" };
    },
    [addToCart2.rejected]: (state, action) => {
      return { ...state };
    },
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
