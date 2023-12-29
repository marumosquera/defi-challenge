import React from "react";

//import components
import AmountDisplay from "../AmountDisplay/AmountDisplay";
import TargetAddressInput from "../TargetAddressInput/TargetAddressInput";
import AllowanceDisplay from "../AllowanceDisplay/AllowanceDisplay";
import ApproveButton from "../ApproveButton/ApproveButton";
import TransferButton from "../TransferButton/TransferButton";

//styles
import "./CardContainer.scss";

const CardContainer = () => {
  return (
    <section className="card-container">
      <div>
      <AmountDisplay />
      <TargetAddressInput />
      <AllowanceDisplay />
      <ApproveButton />
      <TransferButton />
      </div>

    </section>
  );
};

export default CardContainer;
