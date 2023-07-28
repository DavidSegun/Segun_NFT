# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/deploy.js
npx hardhat help
```

To Deploy on testnet

npx hardhat run scripts/deploy.js --network mumbai```shell
npx hardhat run scripts/deploy.js --network rinkeby

````

Verify Contract

```shell
npx hardhat verify --network mumbai DEPLOYED_CONTRACT_ADDRESS "name" "symbol" "baseurl(ipfs)"

npx hardhat verify --network mainnet 0x387366bDcb9bEf64D42B4ceD7aB3BeC51166d108 "FabLabs" "FL" "ipfs://QmWRo55gxXU4LcvGg4XYFrb7zsrr3qoHD1sxSF4EcXYNH8/" --contract contracts/FabLabs.sol:FabLabs
````
