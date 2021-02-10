const MusicToken = artifacts.require("MusicToken");

module.exports = function(deployer) {
  deployer.deploy(MusicToken);
};
