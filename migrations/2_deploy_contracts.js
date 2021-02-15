const Melomaniac = artifacts.require("../contracts/Melomaniac");

module.exports = function(deployer) {
  deployer.deploy(Melomaniac);
};
