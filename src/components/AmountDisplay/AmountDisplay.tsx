import React from "react";
import TokenInput from "../TokenInput/TokenInput";

//styles
import "./AmountDisplay.scss";

//redux
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";

const AmountDisplay = () => {
  const daiBalance = useSelector((state: AppState) => state.wallet.daiBalance);
  
  return (
    <div className="amount-container">
      <span className="amount-title">select amount</span>
      <div className="items-amount-container">
        <div>
          <TokenInput />
          <span>balance:{daiBalance} </span>
        </div>
        <div className="amount-selection">
          <input type="number" placeholder="0.02" />
          <button>all balance</button>
        </div>
      </div>
    </div>
  );
};

export default AmountDisplay;
