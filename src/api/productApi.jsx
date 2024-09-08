import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProduct = createAsyncThunk('product/fetchProduct', async () => {
  const response = await fetch('http://localhost:5000/menu.json');
  const data = await response.json();
  return data.data;
});
