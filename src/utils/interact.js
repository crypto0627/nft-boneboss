import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import contractABI from "./abi.json";

const web3 = createAlchemyWeb3(
  "https://polygon-mumbai.g.alchemy.com/v2/xYH7CcRbAbWqETLkpqxIaa_WQfryrDIM"
);
const contractAddress = "0x390eCA8D8572c2a48D8B2D8c90E0D1cA9E29Bf5D";

export const verifyNFT = async()=>{
  
}

export const mintNFT = async (count) => {
  //error handling
  if (count!==1) {
    return {
      success: false,
      status: "❗Please make sure all fields are completed before minting.",
    };
  }

  //load smart contract
  window.contract = await new web3.eth.Contract(contractABI, contractAddress); //loadContract();

  //set up your Ethereum transaction
  const transactionParameters = {
    from: window.ethereum.selectedAddress, // must match user's active address.
    to: contractAddress, // Required except during contract publications.
    data: window.contract.methods.mint(1).encodeABI(), //make call to NFT smart contract
    value: Number(20000000000000000).toString(16),
  };

  //sign transaction via Metamask
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
      
    });
    return {
      success: true,
      status:
        "✅ Check out your transaction on Etherscan: https://mumbai.polygonscan.com/tx/" +
        txHash,
    };
  } catch (error) {
    return {
      success: false,
      status: "😥 Something went wrong: " + error.message,
    };
  }
};

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "👆🏽 Write a message in the text-field above.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a
              target="_blank"
              href={`https://metamask.io/download.html`}
              rel="noreferrer"
            >
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "👆🏽 Write a message in the text-field above.",
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a
              target="_blank"
              href={`https://metamask.io/download.html`}
              rel="noreferrer"
            >
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};
