
import { createAsyncThunk } from '@reduxjs/toolkit';
import initContracts, {Token} from '../../utils/contract';
import { ethers } from 'ethers';

export const fetchBalance = createAsyncThunk<number, { walletAddress: string; token: Token }>(
    'wallet/fetchBalance',
    async ({ walletAddress, token }, thunkAPI) => {
      const contract = initContracts(token);
      if (!contract) {
        throw new Error("Contract not initialized");
      }
      const balanceBig = await contract.balanceOf(walletAddress);
      const balanceInEther = ethers.utils.formatEther(balanceBig);
      return parseFloat(balanceInEther); 
    }
  );