/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL = 'https://infinite-bayou-82737.herokuapp.com';
const PRODUCTS_URL = `${URL}/products`;
const ADD_PRODUCT_URL = `${URL}/admin/addProduct`;
const EDIT_PRODUCT_URL = `${URL}/admin/editProduct`;
const DELETE_PRODUCT_URL = `${URL}/admin/delProduct`;

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await fetch(PRODUCTS_URL);
    // eslint-disable-next-line no-return-await
    return await response.json();
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

export const deleteProductById = createAsyncThunk(
  'products/deleteProductById',
  async (Id) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        // eslint-disable-next-line quote-props
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ _id: Id }),
    };
    await fetch(DELETE_PRODUCT_URL, requestOptions);
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
      }))
      .addCase(deleteProductById.pending, ((state) => {
        state.isLoading = true;
      }))
      .addCase(deleteProductById.rejected, ((state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }))
      .addCase(deleteProductById.fulfilled, ((state) => {
        state.isLoading = false;
      }));
  },
});

export const productsReducer = productsSlice.reducer;
