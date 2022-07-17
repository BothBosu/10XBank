require("@nomicfoundation/hardhat-toolbox");
let secret = require("./secrets")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: secret.url,
      accounts: [secret.key]
    }
  }
};
