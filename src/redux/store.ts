import { configureStore } from '@reduxjs/toolkit';
import walletReducer from './slice/WalletSlice';

const store = configureStore({
  reducer: {
    wallet: walletReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
