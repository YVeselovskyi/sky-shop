/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const PRODUCTS_URL = 'https://infinite-bayou-82737.herokuapp.com/products';
const ADD_PRODUCT_URL = 'https://infinite-bayou-82737.herokuapp.com/admin/addProduct';
const EDIT_PRODUCT_URL = 'https://infinite-bayou-82737.herokuapp.com/admin/editProduct';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await fetch(PRODUCTS_URL);
    const json = await response.json();
    return json;
  },
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (product) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        // eslint-disable-next-line quote-props
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(product),
    };
    await fetch(ADD_PRODUCT_URL, requestOptions);
  },
);

export const editProductById = createAsyncThunk(
  'products/editProductById',
  async ({ _id, editedProduct }) => {
    const request = { _id, update: editedProduct };
    const requestOptions = {
      method: 'POST',
      headers: {
        // eslint-disable-next-line quote-props
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(request),
    };
    await fetch(EDIT_PRODUCT_URL, requestOptions);
  },
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProductById',
  async (userId) => {
    await fetch(`${EDIT_PRODUCT_URL}/${userId}`, { method: 'DELETE' });
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    error: null,
    isLoading: false,
    list: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload.products;
      })
      .addCase(addProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addProduct.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(editProductById.pending, ((state) => {
        state.isLoadind = true;
      }))
      .addCase(editProductById.rejected, ((state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }))
      .addCase(editProductById.fulfilled, ((state) => {
        state.isLoading = false;
      }));
  },
});

export const productsReducer = productsSlice.reducer;
