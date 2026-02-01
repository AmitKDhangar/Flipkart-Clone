import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductbyCategories } from "../services/getProducts";
export const FetchCategories = createAsyncThunk(
  "/categories/categoriesproduct",
  async (id) => {
    try {
      let categoriesproduct = await getProductbyCategories(id);
      return categoriesproduct.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Products are not fetched");
    }
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    data: [],
    err: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchCategories.pending, (state) => {
      state.loading = true;
      state.err = null;
    });
    builder.addCase(FetchCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(FetchCategories.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload;
    });
  },
});
