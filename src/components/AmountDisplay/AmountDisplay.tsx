import React, { useState } from "react";
import { ethers } from "ethers";

// components
import TokenInput from "../TokenInput/TokenInput";

// styles
import "./AmountDisplay.scss";

// redux
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../redux/store";
import { setAmount } from "../../redux/slice/TransactionSlice";

const AmountDisplay = () => {
  const [amountError, setAmountError] = useState("");
  const daiBalance = useSelector((state: AppState) => state.wallet.daiBalance);
  const usdcBalance = useSelector((state: AppState) => state.wallet.usdcBalance);
  const currency = useSelector((state: AppState) => state.transaction.currency);
  const dispatch = useDispatch();

  const getBalance = () => (currency === "DAI" ? daiBalance : usdcBalance);

  const isValidAmount = (input: string): boolean => {
    if (input === "") {
      setAmountError("");
      return false; 
    }

    const number = parseFloat(input);
    if (isNaN(number) || number < 0) {
      setAmountError("Amount cannot be negative");
      return false;
    } else if (number > getBalance()) {
      setAmountError("Amount exceeds available balance");
      return false;
    }

    setAmountError("");
    return true;
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (isValidAmount(input)) {
      let amount;
      if (currency === "USDC") {
        amount = ethers.utils.parseUnits(input, 6);
      } else if (currency === "DAI") {
        amount = ethers.utils.parseUnits(input, 18);
      }
      dispatch(setAmount(amount?.toString()));
    }
  };

  return (
    <div className="amount-container">
      <span className="amount-title">Select amount</span>
      <div className="items-amount-container">
        <div>
          <TokenInput />
          <span>
            Balance:
            {currency === "DAI" ? daiBalance : currency === "USDC" ? usdcBalance : 0}
          </span>
        </div>
        <div className="amount-selection">
          <input
            type="number"
            placeholder="0.5"
            onChange={handleAmountChange}
          />
          {amountError && <div className="amount-error">{amountError}</div>}
        </div>
      </div>
    </div>
  );
};

export default AmountDisplay;

