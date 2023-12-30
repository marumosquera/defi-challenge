import React from "react";
import TokenInput from "../TokenInput/TokenInput";
import { ethers } from "ethers";
//styles
import "./AmountDisplay.scss";

//redux
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../redux/store";
import { setAmount } from "../../redux/slice/TransactionSlice";

const AmountDisplay = () => {
  const daiBalance = useSelector((state: AppState) => state.wallet.daiBalance);
  const usdcBalance = useSelector((state: AppState) => state.wallet.usdcBalance);
  console.log(usdcBalance)
  const currency = useSelector((state: AppState) => state.transaction.currency);
  const dispatch = useDispatch();

  const isValidAmount = (input: string): boolean => {
    const number = parseFloat(input);
    return !isNaN(number) && number >= 0;
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
      <span className="amount-title">select amount</span>
      <div className="items-amount-container">
        <div>
          <TokenInput />
          <span>
            balance:
            {currency === "DAI"
              ? daiBalance
              : currency === "USDC"
              ? usdcBalance
              : 0}{" "}
          </span>
        </div>
        <div className="amount-selection">
          <input
            type="number"
            placeholder="0.02"
            onChange={handleAmountChange}
          />
          {/* <button>all balance</button> */}
        </div>
      </div>
    </div>
  );
};

export default AmountDisplay;
