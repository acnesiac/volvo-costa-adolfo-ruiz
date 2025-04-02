import { None, Option, Some } from '@hqoss/monads';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  loading: boolean;
}

const initialState: AppState = {
  loading: true,
};


const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    initializeApp: () => initialState,

  },
});

export const {  initializeApp } = slice.actions;

export default slice.reducer;
