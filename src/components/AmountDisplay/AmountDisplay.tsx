import React from "react";
import TokenInput from "../TokenInput/TokenInput";

//styles
import "./AmountDisplay.scss";

const AmountDisplay = () => {
  return (
    <div className="amount-container">
      <span className="amount-title">select amount</span>
      <div className="items-amount-container">
        <div>
          <TokenInput />
          <span>balance:</span>
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
