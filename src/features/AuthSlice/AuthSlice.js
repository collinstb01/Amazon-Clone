import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../apiAuth";

export const signUp = createAsyncThunk(
  "auth/signup",
  async ({ input, navigate, setMessage }) => {
    try {
      const response = await api.signUp(input);
      const id = response?.data?.user?._id
      console.log(response.data);
      setMessage(`${response.data.message}`)
      navigate(`/${id}`);

      return response.data;
    } catch (error) {
      console.log(error);
      setMessage(`${error.response.data.message}`)
    }
  }
);
export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ input, navigate, setMessage }) => {
    try {
      const response = await api.signIn(input);
      console.log(response.data);
      const id = response?.data?.user?._id
      setMessage(`${response.data.message}`)
 
      navigate(`/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      setMessage(`${error.response.data.message}`)
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
      if (!action.payload) {
        return
      }
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
      if (!action.payload) {
        return
      }
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
