import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState:{
        carts: [],
    },
    reducers:{
        addToCart:(state, action) => {
            let data = action.payload
             let existing = state.carts.find((val) => val.id === data.product_id)
            if (!existing) {
                state.carts.push({
                    title: data.product_title,
                    Image: data.product_main_image_url,
                    quantity: 1,
                    id: data.product_id
                })
            }  else if (existing) {
                existing.quantity++
            } else {
                return 
            }
             
        },
        clearCart: (state) => {
            state.carts = []
        }
    },
    extraReducers: {

    }
})

export const {addToCart, clearCart} = CartSlice.actions
export default CartSlice.reducer