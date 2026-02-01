import { createSlice } from "@reduxjs/toolkit";
export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
    },
    removeProduct(state, action) {
      return state.filter((items)=> items.id != action.payload)
    },
    clearProduct() {
      return [];
    },
  },
});
export const { addProduct, removeProduct, clearProduct } = CartSlice.actions;
