// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './Slices/CountryListSlice';
import InstryReducer from "./Slices/IndustryListSlice"

const store = configureStore({
  reducer: {
    countrylist: countryReducer,
    industryList:InstryReducer
  },
});

export default store;