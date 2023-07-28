// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require('hardhat');

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const NFT_NAME = 'nftname'
  const NFT_SYMBOL = 'NS'
  const NFT_URI = 'ipfs://baseuri/'
  const NFT = await hre.ethers.getContractFactory('ContractName');
  const nft = await NFT.deploy(NFT_NAME, NFT_SYMBOL, NFT_URI);
  await nft.deployTransaction.wait(2);
  await nft.deployed();

  console.log('NFT deployed to:', nft.address);


// Verfiication
// npx hardhat verify --network mumbai DEPLOYED_CONTRACT_ADDRESS "name" "symbol" "baseurl(ipfs)"

  await run('verify:verify', {
    address: nft.address,
    constructorArguments: [NFT_NAME, NFT_SYMBOL, NFT_URI],
  });

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
