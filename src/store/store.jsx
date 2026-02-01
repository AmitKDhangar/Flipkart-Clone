import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "../slices/ProductsSlice";
import { CartSlice } from "../slices/CartSlice";
import { categoriesSlice } from "../slices/CategorySlice";
import { OrderSlice } from "../slices/OrderSlice";
const store = configureStore({
  reducer: {
    product: ProductSlice.reducer,
    cart: CartSlice.reducer,
    category: categoriesSlice.reducer,
    orders: OrderSlice.reducer,
  },
});
export default store;

// here product is slice of global state
// productslice is a reducer function
