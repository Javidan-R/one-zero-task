import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    categories: [],
    selectedCategoryId: null,
    productItems: []
  },
  reducers: {
    setProductData(state, action) {
      state.categories = action.payload.categories;
      state.productItems = action.payload.productItems;
    },
    selectCategory(state, action) {
      state.selectedCategoryId = action.payload; 
    }
  }
});

export const { setProductData, selectCategory } = productSlice.actions;
export default productSlice.reducer;
