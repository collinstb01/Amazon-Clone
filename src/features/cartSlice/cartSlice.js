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

const CartSlice = createSlice({
    name: "cart",
    initialState:{
        carts: [],
        totalPricee: 0,
    },
    reducers:{
        addToCart:(state, action) => {
            let data = action.payload
             let existing = state.carts.find((val) => val.id === data.product_id)
             state.totalPricee.toFixed(2)

             state.totalPricee += parseFloat(data.app_sale_price)
        
            if (!existing) {
                state.carts.push({
                    title: data.product_title,
                    Image: data.product_main_image_url,
                    quantity: 1,
                    id: data.product_id,
                    price: data.app_sale_price,
                    totalPrice: data.app_sale_price
                })
            }  else if (existing) {
                existing.totalPrice = parseInt(existing.totalPrice) + parseInt(data.app_sale_price)
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
            state.totalPricee -=  data.price
         

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
        }
    }
})

export const {addToCart, clearCart, removeProduct,deleteProduct} = CartSlice.actions
export default CartSlice.reducer