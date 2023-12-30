//redux
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";

const AllowanceDisplay = () => {
  const currency = useSelector((state: AppState) => state.transaction.currency);
  const daiAllowance = useSelector(
    (state: AppState) => state.wallet.daiAllowance
  );
  const usdcAllowance = useSelector(
    (state: AppState) => state.wallet.usdcAllowance
  );
  return (
    <div>
      <span>
        allowance: 
        {currency === "DAI"
          ? daiAllowance
          : currency === "USDC"
          ? usdcAllowance
          : 0}
      </span>
    </div>
  );
};

export default AllowanceDisplay;
