// contracts/MusicToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";

contract Melomaniac is ERC721 {
    string[] public mmcs;
    mapping(string => bool) _mmcExists;

    constructor() ERC721("Melomaniac", "MMC") public {}

    // Call the add function
    function addMelomaniac( string memory _artist ) public {
        // Requrie unique MMC
        require(!_mmcExists[_artist]);

        mmcs.push(_artist);
        uint _id = mmcs.length - 1;

        _mint(msg.sender, _id);
        _mmcExists[_artist] = true;
    } 

    // function getMMCList () external returns (string[]){
    //   return mmcs;
    // }
        

}
