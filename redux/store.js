import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../redux/slices/carSlice';

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
