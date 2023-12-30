import React, { useState } from 'react';

//styles
import "./TargetAddressInput.scss";

//redux
import { useDispatch } from "react-redux";
import { setTargetAddress } from '../../redux/slice/TransactionSlice';

const TargetAddressInput: React.FC = () => {
  const [targetAddressInput, setTargetAddressInput] = useState('');
  const dispatch = useDispatch();
  
  const isValidAddress = (address: string): boolean => {
    // A simple regex for basic Ethereum address validation
    return /^0x[a-fA-F0-9]{40}$/.test(address);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (isValidAddress(input) || input === '') {
      setTargetAddressInput(input);
      dispatch(setTargetAddress(input as string))
    }
  };

  return (
    <div className='target-address-container'>
        <span>target address</span>
        <input 
          type="text"
          value={targetAddressInput}
          placeholder='0x09b2DcD8a88ECE53cbE2988c36CEFa79892F0019'
          onChange={handleChange}
        />
    </div>
  );
};

export default TargetAddressInput;
