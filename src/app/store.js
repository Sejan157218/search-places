import { configureStore } from '@reduxjs/toolkit';
import apiSliceReducer from '../Redux/ApiSlice/ApiSlice';

export const store = configureStore({
  reducer: {
    places: apiSliceReducer,
  },
});
