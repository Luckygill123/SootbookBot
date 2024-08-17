
// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: '',
};

const CountrylistSlices = createSlice({
  name: 'countrylist',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    addData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {setData, addData } = CountrylistSlices.actions;
export default CountrylistSlices.reducer;