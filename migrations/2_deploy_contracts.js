const Mellow = artifacts.require("Mellow");

module.exports = function(deployer) {
  deployer.deploy(Mellow(10));
};
