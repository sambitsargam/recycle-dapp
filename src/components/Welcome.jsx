import React, { useState } from "react";
import walletConnectModule from "@web3-onboard/walletconnect";
import injectedModule from "@web3-onboard/injected-wallets";
import Onboard from "@web3-onboard/core";
// import logo1 from "../assets/recycling.jpg";
import logo1 from "../assets/banner.jpg";
// import { TransactionContext } from "../context/TransactionContext";

const walletConnect = walletConnectModule();
const injected = injectedModule();

const modules = [walletConnect, injected];

const MUMBAI_RPC_URL = "https://rpc-mumbai.maticvigil.com";

const onboard = Onboard({
  wallets: modules, // created in previous step
  chains: [
    {
      id: "0x13881",
      token: "Matic",
      namespace: "evm",
      label: "Mumbai Testnet",
      rpcUrl: MUMBAI_RPC_URL,
    },
  ],
  appMetadata: {
    name: "RECYCLE",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    description: "Recycle waste and save our enviroment",
    recommendedInjectedWallets: [
      { name: "Coinbase", url: "https://wallet.coinbase.com/" },
      { name: "MetaMask", url: "https://metamask.io" },
    ],
  },
});

const Welcome = () => {
  // const { currentAccount } = useContext(TransactionContext);
  const [account, setAccount] = useState();

  const connectWallet2 = async () => {
    try {
      const wallets = await onboard.connectWallet();
      const { accounts } = wallets[0];
      setAccount(accounts[0].address);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex w-full mf:flex-row flex-col justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10 ">
          <h1 className="text-5xl sm:text-7xl text-white py-1 font-semibold">
            RECYCLE <br />
          </h1>
          <br />
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-4xl ">
            Waste Recycling & Sustainability <br /> Help our Environment <br />{" "}
            and get rewarded
          </p>
          <br />
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-2xl">
            Connect your wallet, submit details of your <br /> enviromental
            waste, recyclers go to the <br /> marketplaceplace and recycle waste
            close to their location...
          </p>
          <br />
          {/** {!currentAccount && ( )} */}
          <button
            type="button"
            onClick={connectWallet2}
            className="flex flex-row justify-center items-center my-5 bg-green-300 p-3 rounded-full cursor-pointer hover:bg-green-800 hover:text-white"
          >
            <p className="text-black text-3xl font-semibold py-3 px-10 mx-14 hover:text-white hover:text-white">
              Connect Wallet
            </p>
          </button>

          <div className="text-white text-2xl font-semibold mx-4 my-5 ">
            <div>
              Connected Wallet Address: <br /> {account}
            </div>
          </div>
        </div>
      </div>
      <div className="sm:flex-[0.9] lg:flex-[0.9]flex-initial justify-left items-center">
        <img src={logo1} alt="welcome" className="w-100 cursor-pointer" />
      </div>
    </div>
  );
};

export default Welcome;
