//部屬腳本
const hre = require("hardhat");

async function main() {
  const Anya = await hre.ethers.getContractFactory("Anya");
  const anya = await Anya.deploy();

  await anya.deployed();

  console.log("AnyaNFT deployed to:", anya.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
