import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchDaiAllowance,
  fetchUsdcAllowance,
  fetchDaiBalance,
  fetchUsdcBalance,
} from "../thunks/WalletThunks";

interface WalletState {
  isConnected: boolean;
  walletAddress: string | null;
  daiBalance: number;
  usdcBalance: number;
  daiAllowance: number;
  usdcAllowance: number;
}

const initialState: WalletState = {
  isConnected: false,
  walletAddress: null,
  daiBalance: 0,
  usdcBalance: 0,
  daiAllowance: 0,
  usdcAllowance: 0,
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setWalletAddress: (state, action: PayloadAction<string | null>) => {
      state.walletAddress = action.payload;
    },
    setDaiBalance: (state, action: PayloadAction<number>) => {
      state.daiBalance = action.payload;
    },
    setUsdcBalance: (state, action: PayloadAction<number>) => {
      state.usdcBalance = action.payload;
    },
    setDaiAllowance: (state, action: PayloadAction<number>) => {
      state.daiAllowance = action.payload;
    },
    setUsdcAllowance: (state, action: PayloadAction<number>) => {
      state.usdcAllowance = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDaiBalance.fulfilled, (state, action) => {
        state.daiBalance = action.payload;
      })
      .addCase(fetchUsdcBalance.fulfilled, (state, action) => {
        state.usdcBalance = action.payload;
      })
      .addCase(fetchDaiAllowance.fulfilled, (state, action) => {
        state.daiAllowance = action.payload;
      })
      .addCase(fetchUsdcAllowance.fulfilled, (state, action) => {
        state.usdcAllowance = action.payload;
      });
  },
});

export const {
  setWalletAddress,
  setDaiBalance,
  setUsdcBalance,
  setDaiAllowance,
  setUsdcAllowance,
} = walletSlice.actions;

export default walletSlice.reducer;
