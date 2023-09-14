import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllUsers = createAsyncThunk('fetchAllUsers', async () => {
  const response = await axios.get('http://localhost:3031/users');
  return response;
});

export const createUsers = createAsyncThunk('createUser', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:3031/users', data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const deleteUsers = createAsyncThunk('deleteUser', async (id, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`http://localhost:3031/users/${id}`);
    console.log("&&&&response",response);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    isLoading: false,
    data: [],
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
      data: action.payload.data,
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
      isError:true
    }),

    [deleteUsers.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    // [deleteUsers.fulfilled]: (state, action) => {
    //   const {id}= action.payload;
    //     state.data = state.data.filter((ele)=>ele.id !== id);
    //   state.isLoading =false;
    // },

    [deleteUsers.fulfilled]: (state, action) => {
      console.log("&&&&&Data",data);
      const { id } = action.payload;
      const updatedData = state.data.filter((ele) => ele.id !== id);
      console.log("&&&&&updatedData",updatedData);
    
      return {
        ...state,
        data: updatedData,
        isLoading: false
      };
    },

    [deleteUsers.rejected]: (state) => ({
      ...state,
      isLoading: false,
    }),


  },

  // extraReducers: (builder) => {
  // builder.addCase(fetchAllUsers.pending, (state, action) => {
  //   state.isLoading = true;
  // });
  // builder.addCase(fetchAllUsers.fulfilled, (updatedstate, action) => {
  //   const state = {...updatedstate}
  //   console.log("****action",action);
  //   // state.isLoading = false,
  //   state.data = action.payload.data;
  // });

  // builder.addCase(fetchAllUsers.rejected, (state, action) => {
  //   console.log("isError",action.payload)
  // });
});

export default todoSlice.reducer;
