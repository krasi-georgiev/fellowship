require('hardhat-deploy');
require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    test: {
      url: `${process.env.NORE_URL_TEST}`,
      accounts: [process.env.PRIVATE_KEY]
    },
    main: {
      url: `${process.env.NORE_URL_MAIN}`,
      accounts: [process.env.PRIVATE_KEY]
    },
    maticTest: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY]
    },
    maticMain: {
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY]
    },
    bscTest: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATE_KEY]
    },
    bscMain: {
      url: "https://bsc-dataseed1.binance.org:443",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  namedAccounts: {
    deployer: 0,
  },
  solidity: "0.8.0",
};
