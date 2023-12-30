import React from "react";

//import components
import AmountDisplay from "../AmountDisplay/AmountDisplay";
import TargetAddressInput from "../TargetAddressInput/TargetAddressInput";
import AllowanceDisplay from "../AllowanceDisplay/AllowanceDisplay";
import ApproveButton from "../ApproveButton/ApproveButton";
import TransferButton from "../TransferButton/TransferButton";

//styles
import "./CardContainer.scss";

import { useWeb3ModalAccount } from '@web3modal/ethers5/react'

const CardContainer: React.FC = () => {
  const { isConnected } = useWeb3ModalAccount()
  return (
    <section className="card-container">
      <div>
      <AmountDisplay />
      <TargetAddressInput />
      <AllowanceDisplay />
      {isConnected 
        ? <>
         <ApproveButton />
         <TransferButton />
        </>
        
         : <>
         <span>Please connect your wallet</span>
         </>
      }
   
      </div>

    </section>
  );
};

export default CardContainer;
