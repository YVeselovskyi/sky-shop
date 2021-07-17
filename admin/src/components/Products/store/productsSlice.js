import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    list: [
      {
        id: 1, name: 'Pants', description: 'Shtany za 40 griven', category: 'Clothes', price: 40,
      },
      {
        id: 2, name: 'T-shirt', description: 'Amazing ARMYANE futbolka', category: 'Clothes', price: 20,
      },
      {
        id: 3, name: 'Jacket', description: 'Pidzhak', category: 'Clothes', price: 33,
      },
      {
        id: 4, name: 'Socks', description: 'GUCCI Socks', category: 'Clothes', price: 5,
      },
      {
        id: 5, name: 'Lamborghini', description: 'Sport car', category: 'Car', price: 150000,
      },
      {
        id: 6, name: 'Lexus', description: 'Premium car', category: 'Car', price: 20,
      },
      {
        id: 7, name: 'BMW', description: 'Takih bol`she ne delayut', category: 'Car', price: 1200,
      },
      {
        id: 8, name: 'Xiaomi MI 220 Ultra', description: 'Smartphone', category: 'Technologies', price: 20,
      },
      {
        id: 9, name: 'OppO', description: 'Amazing smartphone', category: 'Clothes', price: 20,
      },
    ],
  },
  reducers: {
    addProduct: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.list = [...state.list, action.payload];
    },
    deleteProduct: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    editProduct: (state, action) => {
      // eslint-disable-next-line eqeqeq
      const index = state.list.findIndex((item) => item.id == action.payload.id);
      // eslint-disable-next-line no-param-reassign
      state.list[index] = action.payload;
    },
  },
});

export const { addProduct, deleteProduct, editProduct } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
