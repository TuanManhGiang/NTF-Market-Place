/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle");
const { expect } = require("chai");
const projectId = "46e7550f49e642ef9537e5363102be8f";
const fs = require("fs");
const { default: PreviousMap } = require("postcss/lib/previous-map");
module.exports = {
  networks: {
    hardhat: {
      chainID: 31337,
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [],
    },
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/${projectId}",
      accounts: [],
    },
    mainnet: {
      url: "https://polygon-mainnet.infura.io/v3/${projectId}",
      accounts: [],
    },
  },
  solidity: "0.8.4",
};
