import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";//npm install @nomiclabs/hardhat-etherscan --save-dev
import "dotenv/config";
// This adds support for typescript paths mappings
import "tsconfig-paths/register";

//set string type
const MUMBAI_RPC_URL=process.env.REACT_APP_MUMBAI_RPC_URL || "";
const PRIVATE_KEY=process.env.REACT_APP_PRIVATE_KEY || "";
const POLYGONSCAN_API_KEY=process.env.REACT_APP_POLYGONSCAN_KEY || "";

const config:HardhatUserConfig = {
  solidity: "0.8.9",
  defaultNetwork:"hardhat",
  networks:{
    mumbai:{
      url:MUMBAI_RPC_URL || "",
      accounts:[PRIVATE_KEY],
    },
  },
  etherscan:{
    apiKey:POLYGONSCAN_API_KEY
  }
};

export default config;