import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from '../components/Users/store/usersSlice';
import { productsReducer } from '../components/Products/store/productsSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
  },
});
