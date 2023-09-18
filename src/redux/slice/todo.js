import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllUsers = createAsyncThunk('fetchAllUsers', async () => {
  const response = await axios.get('http://localhost:3031/users');
  return response.data;
});

export const createUsers = createAsyncThunk('createUser', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:3031/users', data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const updateUsers = createAsyncThunk(
  'updateUser',
  async (formValues, { rejectWithValue }) => {
    try {
      const response = axios.put(`http://localhost:3031/users/${formValues.id}`, formValues);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteUsers = createAsyncThunk('deleteUser', async (id, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`http://localhost:3031/users/${id}`);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    data: [],
    isLoading: false,

    isError: false,
  },
  extraReducers: {
    [fetchAllUsers.pending]: (state) => ({
      ...state,
      isLoading: false,
    }),

    [fetchAllUsers.fulfilled]: (state, action) => ({
      ...state,
      isLoading: true,
      data: action.payload,
    }),

    [fetchAllUsers.rejected]: (state) => ({
      ...state,
      isLoading: false,
      isError: true,
    }),
    [createUsers.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [createUsers.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      data: state.data.concat(action.payload),
    }),
    [createUsers.rejected]: (state) => ({
      ...state,
      isLoading: true,
      isError: true,
    }),

    [deleteUsers.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [deleteUsers.fulfilled]: (state, action) => {
      const { id } = action.payload;
      const newState = { ...state };
      newState.isLoading = false;
      newState.data = newState.data.filter((todo) => todo.id !== id);
      return newState;
    },
    [deleteUsers.rejected]: (state) => ({
      ...state,
      isLoading: false,
    }),
  },
});

export default todoSlice.reducer;
