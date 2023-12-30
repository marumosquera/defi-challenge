import React, { useState } from "react";

//toast notify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//web3
import { send } from "../../utils/contract";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";

//style
import "./TransferButton.scss";

//redux
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";

const TransferButton: React.FC = () => {
  const [errorMsg, setErrorMsg] = useState<string>("ERROR");
  const [txInit, setTxInit] = useState<boolean>(false);
  const [txHash, setTxHash] = useState<string | undefined>(undefined);
  const [txConfirmed, setTxConfirmed] = useState<boolean>(false);

  //tx data
  const currency = useSelector((state: AppState) => state.transaction.currency);
  const recipient = useSelector(
    (state: AppState) => state.transaction.targetAddress
  );
  const { address } = useWeb3ModalAccount();
  const amount = useSelector((state: AppState) => state.transaction.amount);

  const approveTransaction = async () => {
    setTxInit(true);
    send(address, recipient, amount, currency)
      .then(async (txn) => {
        setTxHash(txn.hash);
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
          <>
            <p className="tx-info">Transaction is being processed.</p>
            <p className="tx-info">
              {" "}
              You can view your transaction
              <a
                href={`https://goerli.etherscan.io/tx/${txHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="tx-info-link"
              >
                here
              </a>
            </p>
          </>
        ) : (
          <p className="tx-info">
            Confirm transaction in your wallet to proceed.
          </p>
        )
      ) : (
        <p className="tx-info">Congratulations.</p>
      )}
    </>
  );
};

export default TransferButton;
