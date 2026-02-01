import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProduct } from "../services/getProducts";
export const FetchProducts = createAsyncThunk(
  "products/fetchproducts",
  async () => {
    try {
      let data = await getProduct();
      return data.data.splice(0, 6);
    } catch (err) {
      return thunkAPI.rejectWithValue("Products are not fetched");
    }
  }
);

export const ProductSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    loading: false,
    err: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchProducts.pending, (state) => {
      state.loading = true;
      state.err = null;
    });
    builder.addCase(FetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(FetchProducts.rejected, (state) => {
      state.loading = false;
      state.err = "products are not fetched due some errors";
    });
  },
});
