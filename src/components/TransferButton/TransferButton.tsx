import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ethers } from "ethers";
import { send } from "../../utils/contract";

import "./TransferButton.scss";

const TransferButton: React.FC = () => {
  const [errorMsg, setErrorMsg] = useState<string>("ERROR");
  const [ethAmount, setEthAmount] = useState<string>("10");
  const [txInit, setTxInit] = useState<boolean>(false);
  const [txHash, setTxHash] = useState<string | undefined>(undefined);
  const [txConfirmed, setTxConfirmed] = useState<boolean>(false);
  const address = "0x09b2DcD8a88ECE53cbE2988c36CEFa79892F0019";

  const approveTransaction = async () => {
    const ethAmountParsed = parseFloat(ethAmount); // Convert ethAmount to a number
    setTxInit(true);
    send(address, address, ethers.utils.parseEther(ethAmount).toString(), "DAI") // Example usage
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
            <button onClick={approveTransaction} className="transfer-btn">
              Transfer
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

export default TransferButton;
