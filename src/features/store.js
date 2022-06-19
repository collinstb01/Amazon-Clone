import {configureStore} from "@reduxjs/toolkit"
import AuthSlice from "./AuthSlice/AuthSlice"
import cartSlice from "./cartSlice/cartSlice"
import productsSlice from "./productSlice/productSlice"

export const store = configureStore({
    reducer: {
        product: productsSlice,
        cart: cartSlice,
        auth: AuthSlice
    }
})