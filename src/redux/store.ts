import { configureStore } from '@reduxjs/toolkit';
import walletSlice from './slice/WalletSlice';
import transactionSlice from './slice/TransactionSlice';

const store = configureStore({
  reducer: {
    wallet: walletSlice,
    transaction: transactionSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
