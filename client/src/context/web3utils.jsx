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
export const Web3Provider = ({ children }) => {
  const contractAddress = "0x2258a724427640046C28F73996B624b344595769";

  const connectWithMetaMask = useMetamask();
  const address = useAddress();
  const { contract } = useContract(contractAddress);
  const { mutate: createCamp } = useContractWrite(contract, "createDrive");
  const { data: presentDrives, isLoading } = useContractRead(
    contract,
    "getDrives"
  );
  return (
    <Web3Context.Provider
      value={[address, connectWithMetaMask, createCamp, presentDrives]}
    >
      {children}
    </Web3Context.Provider>
  );
};
