/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const USERS_URL = 'https://infinite-bayou-82737.herokuapp.com/users';
const ADD_USER_URL = 'https://infinite-bayou-82737.herokuapp.com/admin/addUser';
const EDIT_USER_URL = 'https://infinite-bayou-82737.herokuapp.com/admin/editUser';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async () => {
    const response = await fetch(USERS_URL);
    // eslint-disable-next-line no-return-await
    return await response.json();
  },
);

export const addUser = createAsyncThunk(
  'users/addUser',
  // eslint-disable-next-line no-unused-vars
  async (user) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        // eslint-disable-next-line quote-props
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    await fetch(ADD_USER_URL, requestOptions);
  },
);

export const editUserById = createAsyncThunk(
  'users/editUserById',
  // eslint-disable-next-line no-unused-vars
  async ({ _id, editedUser }) => {
    const request = { _id, update: editedUser };
    const requestOptions = {
      method: 'POST',
      headers: {
        // eslint-disable-next-line quote-props
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(request),
    };
    await fetch(EDIT_USER_URL, requestOptions);
  },
);

export const deleteUser = createAsyncThunk(
  'users/deleteUserById',
  async (userId) => {
    await fetch(`${USERS_URL}/${userId}`, { method: 'DELETE' });
  },
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    error: '',
    isLoading: false,
    list: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload.users;
      })
      .addCase(addUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addUser.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(editUserById.pending, ((state) => {
        state.isLoadind = true;
      }))
      .addCase(editUserById.rejected, ((state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }))
      .addCase(editUserById.fulfilled, ((state) => {
        state.isLoading = false;
      }));
  },
});

export const usersReducer = usersSlice.reducer;
