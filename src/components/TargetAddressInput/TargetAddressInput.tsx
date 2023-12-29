import React from 'react';

//styles
import "./TargetAddressInput.scss";

const TargetAddressInput = () => {
  return (
    <div className='target-address-container'>
        <span>target address</span>
        <input type="text" placeholder='0x09b2DcD8a88ECE53cbE2988c36CEFa79892F0019'/>
    </div>
  )
}

export default TargetAddressInput