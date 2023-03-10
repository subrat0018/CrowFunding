import React from "react";
import { useConnectWithMetaMask } from "../context/web3utils";

const MetaMaskButton = () => {
  const connectToWallet = useConnectWithMetaMask();
  return (
    <div>
      <button
        onClick={connectToWallet}
        type="button"
        class="text-white bg-gradient-to-r from-yellow-500 to-yellow-300 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-3 md:mr-0 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
      >
        Connect Wallet
      </button>
    </div>
  );
};

export default MetaMaskButton;
