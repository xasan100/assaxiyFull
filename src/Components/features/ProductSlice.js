// import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import  axios from "axios"
import axios from "axios";


const initialState={
    items:[],
    status:null,
}


export const productsFetch=createAsyncThunk(
    "products/productsFetch",
   async ()=>{
      const response=  await axios.get('https://shoppingapiacme.herokuapp.com/shopping')
      return response?.data
 });


const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default productsSlice.reducer;


