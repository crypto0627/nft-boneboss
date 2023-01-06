//配置文件
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/xYH7CcRbAbWqETLkpqxIaa_WQfryrDIM",
      accounts: [
        "84927a8b5f55344c6e1151942f2b4bc9a985b51c1675257de1e94e5fef153100",
      ],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: "7TRPD4ETI8WKYZRFV9KQM5IAURPEHJ7BD9",
    },
  },
};
