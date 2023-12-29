import React, { useEffect } from 'react';

//redux
import { useDispatch } from 'react-redux';
import { fetchBalance } from '../../redux/thunks/WalletThunks';
import {ThunkDispatch} from "@reduxjs/toolkit";

//styles
import "./NavBar.scss";

const NavBar = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const wallet = "0x09b2DcD8a88ECE53cbE2988c36CEFa79892F0019"
  // const walletAddress = useSelector((state: AppState) => state.wallet.walletAddress);

  useEffect(() => {
    if (wallet) {
      dispatch(fetchBalance({ walletAddress: wallet , token: "DAI" }));
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
