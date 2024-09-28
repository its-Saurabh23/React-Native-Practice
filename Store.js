import {configureStore } from '@reduxjs/toolkit';
import foodReducers from './foodSlice'

const store = configureStore({
  reducer:{
    food:foodReducers
  },
});

export default store; 