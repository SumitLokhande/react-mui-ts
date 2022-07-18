import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: false,
  loading: false
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {}
});

export const {} = commonSlice.actions;

export default commonSlice.reducer;
