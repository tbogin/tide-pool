import { createSlice, Slice, createAsyncThunk } from '@reduxjs/toolkit';
import { CRUISE_URL } from './constants/CruiseUrl';
import axios from 'axios';

export type MainSliceState = {
 loading: boolean,
 cruises: any, 
 error: any, 
};

const initialState: MainSliceState = {
  loading: false,
  cruises: [],
  error: '',
};

//Thunk
//Generates pending, fulfilled, and rejected action types
export const fetchCruises = createAsyncThunk('posts/fetchCruises', async () => {
  const response = await axios.get(CRUISE_URL)
  return response.data
});

export const mainSlice: Slice<MainSliceState> = createSlice({
  name: 'cruises',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCruises.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchCruises.fulfilled, (state, action) => {
      state.loading = false
      state.cruises = action.payload
      state.error = ''
    })
    builder.addCase(fetchCruises.rejected, (state, action) => {
      state.loading = false
      state.cruises = []
      state.error = action.error.message
    })
    builder.addDefaultCase((state) => state)
  }
});
export default mainSlice.reducer
