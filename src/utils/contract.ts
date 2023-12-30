import { ethers, Contract } from "ethers";
import { daiAbi, usdcAbi } from "./abis";

//Token can only be one of these options (dai or usdc)
export type Token = "DAI" | "USDC";

//goerli addresses as of 29/12/2023
const daiAddress = "0x1D70D57ccD2798323232B2dD027B3aBcA5C00091";
const usdcAddress = "0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47";

export const initContracts = (token: Token): Contract | null => {
  let provider: ethers.providers.JsonRpcProvider;

  if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
  } else {
    provider = ethers.getDefaultProvider(
      "goerli"
    ) as ethers.providers.JsonRpcProvider;
  }

  let address: string;
  let abi: any[];

  if (token === "DAI") {
    address = daiAddress;
    abi = daiAbi;
  } else {
    address = usdcAddress;
    abi = usdcAbi;
  }

  const contract = new ethers.Contract(address, abi, provider.getSigner());
  return contract;
};

export const approve = async (
  spender: string,
  amount: string,
  token: Token
): Promise<Contract["approve"]> => {
  const contract = initContracts(token);
  if (!contract) {
    throw new Error("Contract not initialized");
  }
  const approveTx = await contract.approve(spender, amount);
  return approveTx;
};

export const allowance = async (
  owner: string,
  spender: string,
  token: Token
): Promise<number> => {
  const contract = initContracts(token);
  if (!contract) {
    throw new Error("Contract not initialized");
  }
  const allowanceBig = await contract.allowance(owner, spender);
  return allowanceBig.toNumber();
};

export const send = async (
  owner: string,
  recipient: string,
  amount: string,
  token: Token
): Promise<Contract["transferFrom"]> => {
  const contract = initContracts(token);
  if (!contract) {
    throw new Error("Contract not initialized");
  }
  const transferTx = await contract.transferFrom(owner, recipient, amount);
  return transferTx;
};

export const balance = async (owner: string, token: Token): Promise<bigint> => {
  const contract = initContracts(token);
  if (!contract) {
    throw new Error("Contract not initialized");
  }
  const balanceBig = await contract.balanceOf(owner);
  console.log(balanceBig.toBigInt())
  return balanceBig.toBigInt();

};


export default initContracts;
