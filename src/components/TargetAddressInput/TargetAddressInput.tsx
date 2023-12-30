import React, { useState } from "react";

//redux
import { useDispatch } from "react-redux";
import { setTargetAddress } from "../../redux/slice/TransactionSlice";

//toast notify
import { toast } from "react-toastify";
import { isValidEthereumAddress } from "../../utils/services";

//styles
import "./TargetAddressInput.scss";

const TargetAddressInput: React.FC = () => {
  const [targetAddressInput, setTargetAddressInput] = useState("");
  const [addressError, setAddressError] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setTargetAddressInput(input);
    if (isValidEthereumAddress(input)) {
      dispatch(setTargetAddress(input));
      setAddressError("");
    } else {
      setAddressError("Invalid Ethereum address format");
    }
    if (input === "") {
      setAddressError("");
      return false; 
    }
  };

  const handleBlur = () => {
    if (!isValidEthereumAddress(targetAddressInput)) {
      toast.error("Please check the address");
    }
  };

  return (
    <div className="target-address-container">
      <span>Target address</span>
      <input
        type="text"
        value={targetAddressInput}
        placeholder="0x09b2DcD8a88ECE53cbE2988c36CEFa79892F0019"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {addressError && <div className="address-error">{addressError}</div>}
    </div>
  );
};

export default TargetAddressInput;
