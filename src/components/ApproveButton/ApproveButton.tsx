import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import { approve } from "../../utils/contract";

import "./ApproveButton.scss";

//redux
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";

const Approve: React.FC = () => {
  const [errorMsg, setErrorMsg] = useState<string>("ERROR");
  const [txInit, setTxInit] = useState<boolean>(false);
  const [txHash, setTxHash] = useState<string | undefined>(undefined);
  const [txConfirmed, setTxConfirmed] = useState<boolean>(false);
  const currency = useSelector((state: AppState) => state.transaction.currency);
  const amount = useSelector((state: AppState) => state.transaction.amount);
  const { address } = useWeb3ModalAccount();
  
  const approveTransaction = async () => {
    setTxInit(true);
    approve(address, amount, currency)
      .then(async (txn) => {
        setTxHash(txn.hash);
        console.log("txn =>", txn);

        const txnInfo = await txn.wait();
        if (txnInfo.status === 1) {
          setTxConfirmed(true);
        }
      })
      .catch((e) => {
        setTxInit(false);
        setTxHash(undefined);
        setTxConfirmed(false);

        const errorMessage = e.error ? e.error.message : e.message;
        setErrorMsg(errorMessage);
        toast.error(errorMessage);
      });
  };

  return (
    <>
      {errorMsg && <ToastContainer />}

      {!txConfirmed ? (
        !txInit ? (
          <div>
            <button onClick={approveTransaction} className="approve-btn">
              Approve
            </button>
          </div>
        ) : txHash ? (
          <p>
            Transaction is being processed. You can view your transaction
            <a
              href={`https://goerli.etherscan.io/tx/${txHash}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </p>
        ) : (
          <p>Confirm transaction in your wallet to proceed.</p>
        )
      ) : (
        <p>Congratulations.</p>
      )}
    </>
  );
};

export default Approve;
