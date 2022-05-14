import { configureStore } from '@reduxjs/toolkit';
import creativezReducer from "../features/Creative/creativezSlice"

export const store = configureStore({
  reducer: {
    counter: creativezReducer,
  },
});
