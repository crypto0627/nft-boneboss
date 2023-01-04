const hre = require("hardhat");

async function main() {
  const boneboss = await hre.ethers.getContractFactory("boneboss");
  const boneboss_ = await boneboss.deploy();

  await boneboss_.deployed();

  console.log("Boneboss deployed to :", boneboss_.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().then(()=>process.exit(0)).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
