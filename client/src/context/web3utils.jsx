import React, { Children } from "react";
import { useState, useEffect, useContext, createContext } from "react";
import {
  useAddress,
  useMetamask,
  useContract,
  useContractWrite,
  useContractRead,
} from "@thirdweb-dev/react";

const Web3Context = createContext();
export const useUtils = () => {
  return useContext(Web3Context);
};
export const userAddress = () => {
  return useContext(Web3Context)[0];
};
export const useConnectWithMetaMask = () => {
  return useContext(Web3Context)[1];
};
export const useCreateDrive = () => {
  return useContext(Web3Context)[2];
};
export const usePresentDrives = () => {
  return useContext(Web3Context)[3];
};
export const Web3Provider = ({ children }) => {
  const contractAddress = `0x2258a724427640046C28F73996B624b344595769`;
  const connectWithMetaMask = useMetamask();
  const address_user = useAddress();
  const { contract } = useContract(contractAddress);
  const { mutate: createCamp } = useContractWrite(contract, "createDrive");
  const { data: presentCamps, isLoading } = useContractRead(
    contract,
    "getDrives"
  );
  return (
    <Web3Context.Provider
      value={[address_user, connectWithMetaMask, createCamp, presentCamps]}
    >
      {children}
    </Web3Context.Provider>
  );
};
