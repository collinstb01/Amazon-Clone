import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../apiAuth"

export const fetchUserProducts = createAsyncThunk(
    "auth/fecthUserCartProducts",
    async (id) => {

        try {
            const response = await api.fetchUserProducts(id)
            console.log(response.data)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
)

export const deleteOne = createAsyncThunk(
    "auth/deleteone",
    async ({id, userId}) => {

        try {
            const response = await api.deleteOne({id, userId})
            console.log(response.data)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
)

export const deleteAll = createAsyncThunk(
    "auth/deleteAll",
    async (userId) => {

        try {
            const response = await api.deleteAll(userId)
            console.log(response.data)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
)
const CartSlice = createSlice({
    name: "cart",
    initialState:{
        carts: [],
        totalPricee: 0,
        message: {}
    },
    reducers:{
        addToCart:(state, action) => {
            let data = action.payload
             let existing = state.carts.find((val) => val.id == data.id)
             state.totalPricee.toFixed(2)
            //  {id: product_id,title: product_title,Image: product_main_image_url,price: app_sale_price, userid: user?.user?._id }
             state.totalPricee += parseFloat(data.totalPrice)
        
            if (!existing) {
                state.carts.push({
                    title: data.title,
                    Image: data.Image,
                    quantity: 1,
                    id: data.id,
                    price: data.price,
                    totalPrice: data.totalPrice
                })
            }  else if (existing) {
                existing.totalPrice = parseInt(existing.totalPrice) + parseInt(data.totalPrice)
                existing.quantity++
            } else {
                return 
            }
             
        },
        clearCart: (state) => {
            state.carts = []
        },
        removeProduct: (state, action) => {
            const data = action.payload
            const item = state.carts.find((items) => items.id === data.id)
            state.totalPricee.toFixed(2)
            item.totalPrice.toFixed(2)
            item.totalPrice -=  data.price
            state.totalPricee -=  parseInt(data.totalPrice)
         

            if ( item.quantity >= 2 ) {
                item.quantity -= 1
            }
            else {
                state.carts = state.carts.filter((val) => val.id !== data.id)
            }
        },
        deleteProduct:(state, action) => {
            const data = action.payload
            state.carts = state.carts.filter((item) => item.id !== data )

        },
        inc: (state, action) => {
            const data = action.payload

            const product = carts
        }
    },
    extraReducers: {
        [fetchUserProducts.pending]: (state, action) => {
            return {...state}
        },
        [fetchUserProducts.fulfilled]: (state, action) => {
            return {...state, carts: action.payload}
        },
        [fetchUserProducts.rejected]: (state, action) => {
            return {...state, cart: action.payload}
        },
        [deleteOne.pending]: (state, action) => {
            return {...state}
        },
        [deleteOne.fulfilled]: (state, action) => {
            return {...state, message: action.payload}
        },
        [deleteOne.rejected]: (state, action) => {
            return {...state}
        },
        [deleteAll.pending]: (state, action) => {
            return {...state}
        },
        [deleteAll.fulfilled]: (state, action) => {
            return {...state, message: action.payload}
        },
        [deleteAll.rejected]: (state, action) => {
            return {...state}
        }
    }
})

export const {addToCart, clearCart, removeProduct,deleteProduct} = CartSlice.actions
export default CartSlice.reducer