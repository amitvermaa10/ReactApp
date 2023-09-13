import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './slice/todo.js';

export const store = configureStore({
  reducer: {
    app: todoSlice, 
  },
});

