const Migrations = artifacts.require("../contracts/Migrations");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
