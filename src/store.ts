import { configureStore } from '@reduxjs/toolkit';
import { mainSlice, MainSliceState } from './MainSlice';

export type RootState = {
  main: MainSliceState;
};

export const store = configureStore<RootState>({
  reducer: {
    main: mainSlice.reducer,
  },
});
