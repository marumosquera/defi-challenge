import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTargetAddress } from "../../redux/slice/TransactionSlice";
import { toast } from "react-toastify";

//styles
import "./TargetAddressInput.scss";

const TargetAddressInput: React.FC = () => {
  const [targetAddressInput, setTargetAddressInput] = useState("");
  const dispatch = useDispatch();

  const isValidEthereumAddress = (address: string): boolean => {
    return address.startsWith("0x") && address.length === 42;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setTargetAddressInput(input);
    if (isValidEthereumAddress(input)) {
      dispatch(setTargetAddress(input));
    }
  };

  const handleBlur = () => {
    console.log(targetAddressInput.length)
    if (!isValidEthereumAddress(targetAddressInput)) {
      toast.error("Please check the address");
    }
  };

  return (
    <div className="target-address-container">
      <span>target address</span>
      <input
        type="text"
        value={targetAddressInput}
        placeholder="0x09b2DcD8a88ECE53cbE2988c36CEFa79892F0019"
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default TargetAddressInput;
