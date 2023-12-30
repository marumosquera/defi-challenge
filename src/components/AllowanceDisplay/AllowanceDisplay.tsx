import React from 'react';

//redux
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";

const AllowanceDisplay = () => {
  const daiAllowance = useSelector((state: AppState) => state.wallet.daiAllowance);
  return (
    <div>
        <span>allowance: {daiAllowance} </span>
    </div>
  )
}

export default AllowanceDisplay