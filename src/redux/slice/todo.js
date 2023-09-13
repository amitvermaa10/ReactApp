import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllUsers = createAsyncThunk('fetchAllUsers', async () => {
  const response = await axios.get('http://localhost:3031/users');
  return response;
});

export const createUsers = createAsyncThunk("createUser", async(data,{rejectWithValue})=>{

  try {
    const response = await axios.post('http://localhost:3031/users', data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
})
export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    isLoading: false,
    data: null,
    isError:false
  },
  extraReducers:{
    [fetchAllUsers.pending]:(state) =>{
      const newState = true;
      state.isLoading =newState;
    },
    [fetchAllUsers.fulfilled]:(state,action) =>{
      state.isLoading =true;
      state.data = action.payload.data;
    },
    [fetchAllUsers.rejected]:(state) =>{
      state.isLoading = false;
      state.isError = true;
    
    }
  }

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
