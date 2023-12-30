import React, { useEffect } from 'react';

//redux
import { useDispatch } from 'react-redux';
import { fetchDaiAllowance, fetchUsdcAllowance, fetchDaiBalance, fetchUsdcBalance } from '../../redux/thunks/WalletThunks';
import {ThunkDispatch} from "@reduxjs/toolkit";

//styles
import "./NavBar.scss";


import { useWeb3ModalAccount } from '@web3modal/ethers5/react'
import { toast } from 'react-toastify';

const NavBar = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { address, chainId } = useWeb3ModalAccount()

  //fetching all relevant info from the smart contract
  useEffect(() => {
    if (address) {
      dispatch(fetchDaiBalance({ walletAddress: address , token: "DAI" }));
      dispatch(fetchUsdcBalance({ walletAddress: address , token: "USDC" }));
      dispatch(fetchDaiAllowance({ walletAddress: address,  address: address  , token: "DAI" }));
      dispatch(fetchUsdcAllowance({ walletAddress: address,  address: address  , token: "USDC" }));
    }
  }, [address, dispatch]);

  //detect network
  useEffect(() => {
    if (chainId !== 5) {
      toast.error("Wrong network, please change to goerli");
    }
  }, [chainId]);

  
  return (
    <nav>
      <div className="logo">DeFi</div>
      <div><w3m-button /></div>
    </nav>
  );
};

export default NavBar;
