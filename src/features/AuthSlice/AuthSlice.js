import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import * as api from "../apiAuth"

export const getUser = createAsyncThunk(
    "auth/getUser",
    async (id) => {

        try {
            const response = await api.getUser(id)
            console.log(response.data)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
)

export const signUp = createAsyncThunk(
    "auth/signup",
    async ({input, navigate}) => {

        try {
            const response = await api.signUp(input)
            console.log(response.data)
            navigate("/")
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user:[],
        users:[],
        message:"",
        loading: true
    },
    reducers: {

    },
    extraReducers: {
        [signUp.pending]:(state, action) => {
            return {...state}
        },
        [signUp.fulfilled]:(state, action) => {
            return {...state, user: action.payload,loading: false}
        },
        [signUp.rejected]:(state, action) => {
            return {...state,message: "User Already Exist"}
        },
        [getUser.pending]:(state, action) => {
            return {...state}
        },
        [getUser.fulfilled]:(state, action) => {
            return {...state, users: action.payload}
        },
        [getUser.rejected]:(state, action) => {
            return {...state}
        }
    }
})

export const {} = authSlice.actions

export default authSlice.reducer