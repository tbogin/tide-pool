import { createSlice, Slice } from '@reduxjs/toolkit';

export type MainSliceState = {
  //
};

const initialState: MainSliceState = {};

export const mainSlice: Slice<MainSliceState> = createSlice({
  name: 'main',
  initialState,
  reducers: {},
});
