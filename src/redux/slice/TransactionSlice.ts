import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TransactionState {
  sender: string | null;
  targetAddress: string | null;
  amount: number;
  status: boolean;
  currency: "DAI" | "USDC" | null;
}

const initialState: TransactionState = {
    sender: null,
    targetAddress:  null,
    amount: 0,
    status: false,
    currency: null,
}


export const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    reducers: {
      setSender: (state, action: PayloadAction<string | null>) => {
        state.sender = action.payload;
      },
      setTargetAddress: (state, action: PayloadAction<string | null>) => {
        state.targetAddress = action.payload;
      },
      setAmount: (state, action: PayloadAction<number>) => {
        state.amount = action.payload;
      },
      setStatus: (state, action: PayloadAction<boolean>) => {
        state.status = action.payload;
      },
      setCurrency: (state, action: PayloadAction<"DAI" | "USDC" | null>) => {
        state.currency = action.payload;
      },
    },
 
  });
  
  export const { setSender, setTargetAddress, setAmount, setStatus, setCurrency } = transactionSlice.actions;
  
  export default transactionSlice.reducer;
  