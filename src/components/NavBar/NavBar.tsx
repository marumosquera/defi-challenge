import React, { useEffect } from 'react';

//redux
import { useDispatch } from 'react-redux';
import { fetchDaiAllowance, fetchUsdcAllowance, fetchDaiBalance, fetchUsdcBalance } from '../../redux/thunks/WalletThunks';
import {ThunkDispatch} from "@reduxjs/toolkit";

//styles
import "./NavBar.scss";

const NavBar = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const wallet = "0x09b2DcD8a88ECE53cbE2988c36CEFa79892F0019"
  // const walletAddress = useSelector((state: AppState) => state.wallet.walletAddress);

  //fetching all relevant info from the smart contract
  useEffect(() => {
    if (wallet) {
      dispatch(fetchDaiBalance({ walletAddress: wallet , token: "DAI" }));
      dispatch(fetchUsdcBalance({ walletAddress: wallet , token: "USDC" }));
      dispatch(fetchDaiAllowance({ walletAddress: wallet,  address: wallet  , token: "DAI" }));
      dispatch(fetchUsdcAllowance({ walletAddress: wallet,  address: wallet  , token: "USDC" }));
    }
  }, [wallet, dispatch]);
  
  return (
    <nav>
      <div className="logo">DeFi</div>
      <div><w3m-button /></div>
    </nav>
  );
};

export default NavBar;
