
// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: '',
};

const IndustrylistSlices = createSlice({
  name: 'industrylist',
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

export const {setData, addData } = IndustrylistSlices.actions;
export default IndustrylistSlices.reducer;