require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');
require('@nomiclabs/hardhat-solhint');

const fs = require('fs');
const privateKey = fs.readFileSync('.secret').toString().trim();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  // defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337,
    },

    mainnet: {
      url: '',
      accounts: [privateKey],
    },
    rinkeby: {
      url: '',
      accounts: [privateKey],
    },
    cronos_testnet: {
      url: 'https://cronos-testnet-3.crypto.org:8545',
      accounts: [privateKey],
    },
  },

  etherscan: {
    apiKey: '',
  },

  solidity: '0.8.4',
  paths: {
    artifacts: './src/artifacts',
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  // mocha: {
  //   timeout: 20000,
  // },
};
