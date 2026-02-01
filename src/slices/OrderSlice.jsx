import { createSlice } from "@reduxjs/toolkit";
export const OrderSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {
    addOrder(state, action) {
      state.push(action.payload);
    },
    removeOrder(state, action) {
      state.splice(action.payload, 1);
    },
    clearAllorders(state) {
      return [];
    },
  },
});
export const { addOrder, removeOrder, clearAllorders } = OrderSlice.actions;
