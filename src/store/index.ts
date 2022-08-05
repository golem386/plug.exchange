import { configureStore } from '@reduxjs/toolkit';
import app from './app';
import swap from './swap';

const store = configureStore({
  reducer: {
    app,
    swap,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppState = ReturnType<typeof store.getState>;
// dispatch
export type AppDispatch = typeof store.dispatch;

export default store;
