
import { createAsyncThunk } from '@reduxjs/toolkit';
import initContracts, {Token} from '../../utils/contract';
import { ethers } from 'ethers';

export const fetchDaiBalance = createAsyncThunk<number, { walletAddress: string; token: Token }>(
    'wallet/fetchDaiBalance',
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

  export const fetchUsdcBalance = createAsyncThunk<number, { walletAddress: string; token: Token }>(
    'wallet/fetchUsdcBalance',
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

  export const fetchDaiAllowance = createAsyncThunk<number, { walletAddress: string; address: string; token: Token }>(
    'wallet/fetchDaiAllowance',
    async ({ walletAddress, address, token }, thunkAPI) => {
      const contract = initContracts(token);
      if (!contract) {
        throw new Error("Contract not initialized");
      }
      const balanceBig = await contract.allowance(walletAddress, address);
      const decimals = 18; 
      const balanceFormatted = ethers.utils.formatUnits(balanceBig, decimals);
      return parseFloat(balanceFormatted); 
    }
  );

  export const fetchUsdcAllowance = createAsyncThunk<number, { walletAddress: string; address: string; token: Token }>(
    'wallet/fetchUsdcAllowance',
    async ({ walletAddress, address, token }, thunkAPI) => {
      const contract = initContracts(token);
      if (!contract) {
        throw new Error("Contract not initialized");
      }
      const balanceBig = await contract.allowance(walletAddress, address);
      const decimals = 6; 
      const balanceFormatted = ethers.utils.formatUnits(balanceBig, decimals);
      return parseFloat(balanceFormatted); 
    }
  );
  