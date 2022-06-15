import {configureStore} from "@reduxjs/toolkit"
import productsSlice from "./productSlice/productSlice"

export const store = configureStore({
    reducer: {
        product: productsSlice,
    }
})