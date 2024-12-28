

import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './slice/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todosSlice,    //todos is the key in the store
  },
});

