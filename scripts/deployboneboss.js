const hre = require("hardhat");

async function main() {
  //boneboss is contract name.
  const boneboss = await hre.ethers.getContractFactory("boneboss");
  //contract constructor have 2 arguments,so deployJS must have 2 arguments.
  const boneboss_ = await boneboss.deploy(
    "boneboss",
    "0x13d8caf1eabccbbd00d1e6d2dbb4dc4fecf2a022"
  );

  await boneboss_.deployed();
    
  console.log("Boneboss deployed to :", boneboss_.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().then(()=>process.exit(0)).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
