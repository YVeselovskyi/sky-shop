import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: [{
      id: 1, email: 'nnaqwe@gmail.com', username: 'nazarii', age: 19, gender: 'M',
    },
    {
      id: 2, email: 'anna8855@gmail.com', username: 'annet_115', age: 19, gender: 'F',
    },
    {
      id: 3, email: 'vrvr99@gmail.com', username: 'varvara99', age: 22, gender: 'F',
    },
    {
      id: 4, email: 'freewqq12@gmail.com', username: 'user789', age: 15, gender: 'M',
    },
    {
      id: 5, email: 'random@gmail.com', username: 'rndmguy', age: 18, gender: 'M',
    },
    {
      id: 6, email: 'notrandom@gmail.com', username: 'ntrndmgirl', age: 35, gender: 'F',
    },
    {
      id: 7, email: 'pochta45@gmail.com', username: 'maxmax', age: 28, gender: 'M',
    },
    {
      id: 8, email: 'nevermindk@gmail.com', username: 'aleX', age: 17, gender: 'M',
    },
    {
      id: 9, email: 'mm887@gmail.com', username: 'marina887', age: 25, gender: 'F',
    },
    {
      id: 10, email: 'ddkaba11@gmail.com', username: 'kabargin', age: 55, gender: 'M',
    },
    {
      id: 11, email: 'vasek@mail.ru', username: 'sswwqqaa', age: 12, gender: 'F',
    }],
  },
  reducers: {
    addUser: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.list = [...state.list, action.payload];
    },
    deleteUser: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    editUser: (state, action) => {
      // eslint-disable-next-line eqeqeq
      const index = state.list.findIndex((item) => item.id == action.payload.id);
      // eslint-disable-next-line no-param-reassign
      state.list[index] = action.payload;
    },
  },
});

export const { addUser, deleteUser, editUser } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
