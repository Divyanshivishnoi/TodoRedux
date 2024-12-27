
import {configureStore} from '@reduxjs/toolkit';
import inputReducer from '../Slice/InputSlice';

export const store=configureStore({
    reducer:{
      todos:inputReducer,
    }
})
