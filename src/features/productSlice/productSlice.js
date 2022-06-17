import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import requestt from "../api.js";

const options = {
  method: "GET",
  url: "https://amazon24.p.rapidapi.com/api/todaydeals",
  params: { categoryID: "aps", keyword: "iphone", country: "US", page: "1" },
  headers: {
    "X-RapidAPI-Key": "25e1590e68mshea028178cfe7dc5p1c6cd4jsn264b5bf7bb53",
    "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
  },
};

export const fetchProduct = createAsyncThunk(
  "products/products",
  async (setMessage) => {
    try {
      const response = await axios.request(options);

      return response.data;
    } catch (error) {
      console.log("cant fetch");
      setMessage("Cant Fecth Data,Please Check Your Connection");
    }
  }
);
export const fetchProductforSearch = createAsyncThunk(
  "products/searchProducts",
  async (input) => {
    try {
      const response = await axios.request({
        method: 'GET',
        url: 'https://amazon24.p.rapidapi.com/api/product',
        params: {categoryID: 'aps', keyword: input, country: 'US', page: '1'},
        headers: {
          'X-RapidAPI-Key': 'ad62b006b4msh211066947d0908ap18ff60jsnbea90cb57766',
          'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
        }
      });

      return response.data;
    } catch (error) {
      console.log("cant fetch");
      setMessage("Cant Fecth Data,Please Check Your Connection");
    }
  }
);

export const fetchProductforDetails = createAsyncThunk(
    "products/detailsProducts",
    async (id) => {
      try {
        const response = await axios.request( {
          method: 'GET',
          url:`https://amazon24.p.rapidapi.com/api/product/${id}`,
          params: {country: 'US'},
          headers: {
            'X-RapidAPI-Key': 'ad62b006b4msh211066947d0908ap18ff60jsnbea90cb57766',
            'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
          }
        }
          );
  
        return response.data;
      } catch (error) {
        console.log("cant fetch");
        // message("Cant Fecth Data,Please Check Your Connection");
      }
    }
  );


  export const fetchProductByCatefory = createAsyncThunk(
    "products/Category",
    async () => {
      try {
        const response = await axios.request({
          method: 'GET',
          url: 'https://amazon24.p.rapidapi.com/api/category',
          params: {country: 'US'},
          headers: {
            'X-RapidAPI-Key': '25e1590e68mshea028178cfe7dc5p1c6cd4jsn264b5bf7bb53',
            'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
          }
        });
  
        return response.data;
      } catch (error) {
        console.log("cant fetch");
        // message("Cant Fecth Data,Please Check Your Connection");
      }
    }
  );
const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    searchProducts: [],
    detailsProduct: {},
    loading: true,
    categoryProducts: [],
  },
  reducers: {},
  extraReducers: {
    [fetchProduct.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [fetchProduct.fulfilled]: (state, action) => {
      return { ...state, loading: false, products: action.payload };
    },
    [fetchProduct.rejected]: (state, action) => {
      return { ...state, loading: false };
    },
    [fetchProductforSearch.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [fetchProductforSearch.fulfilled]: (state, action) => {
      return { ...state, loading: false, searchProducts: action.payload };
    },
    [fetchProductforSearch.rejected]: (state, action) => {
      return { ...state, loading: false };
    },
    [fetchProductforDetails.pending]: (state, action) => {
        return { ...state, loading: true };
      },
      [fetchProductforDetails.fulfilled]: (state, action) => {
        return { ...state, loading: false, detailsProduct: action.payload };
      },
      [fetchProductforDetails.rejected]: (state, action) => {
        return { ...state, loading: false };
      },
      [fetchProductByCatefory.pending]: (state, action) => {
        return { ...state, loading: true };
      },
      [fetchProductByCatefory.fulfilled]: (state, action) => {
        return { ...state, loading: false, categoryProducts: action.payload };
      },
      [fetchProductByCatefory.rejected]: (state, action) => {
        return { ...state, loading: false };
      },
  },
});
export default productsSlice.reducer;
