import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TransactionState {
  sender: string;
  targetAddress: string;
  amount: string | undefined;
  status: boolean;
  currency: "DAI" | "USDC" ;
}

const initialState: TransactionState = {
    sender: "",
    targetAddress:  "",
    amount: "",
    status: false,
    currency: "DAI",
}


export const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    reducers: {
      setSender: (state, action: PayloadAction<string>) => {
        state.sender = action.payload;
      },
      setTargetAddress: (state, action: PayloadAction<string>) => {
        state.targetAddress = action.payload;
      },
      setAmount: (state, action: PayloadAction<string | undefined>) => {
        state.amount = action.payload;
      },
      setStatus: (state, action: PayloadAction<boolean>) => {
        state.status = action.payload;
      },
      setCurrency: (state, action: PayloadAction<"DAI" | "USDC">) => {
        state.currency = action.payload;
      },
    },
 
  });
  
  export const { setSender, setTargetAddress, setAmount, setStatus, setCurrency } = transactionSlice.actions;
  
  export default transactionSlice.reducer;
  