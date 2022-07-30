import { configureStore } from '@reduxjs/toolkit';
import swap from './swap';

const store = configureStore({
  reducer: {
    swap,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppState = ReturnType<typeof store.getState>;
// dispatch
export type AppDispatch = typeof store.dispatch;

export default store;
