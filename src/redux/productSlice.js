import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../services/getProductsSlice";
const productSlice = createSlice({
  name: "productsReducer",
  initialState: {
    products: [],
    isLoading: false,
    error: null,
    productCart:[]
  },
  reducers: {
    addProductToCart:(state, action)=>{
        state.productCart.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action.payload, 'action')
      state.products = [...action.payload];
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

console.log(productSlice, "ProductSlice");

export const { addProductToCart } = productSlice.actions;
export default productSlice.reducer;
