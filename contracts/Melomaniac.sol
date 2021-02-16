// contracts/MusicToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Melomaniac is ERC721 {
    string[] public mmcs;
    mapping(string => bool) _mmcExists;

    string public artist;
    string public title;
    string public description;
    uint256 public price;
    uint256 public supply;

    constructor() ERC721("Melomaniac", "MMC") public {}

    // Call the add function
    function addMelomaniac( string memory _artist, string memory _title, string memory _description, uint256 _price, uint256 _supply ) public {
        // Requrie unique MMC
        require(!_mmcExists[_title]);

        mmcs.push(_title);
        artist = _artist;
        description = _description;
        price = _price;
        supply = _supply;

        uint _id = mmcs.length - 1;

        _mint(msg.sender, _id);
        _mmcExists[_title] = true;
    } 

    // function getMMCList () external returns (string[]){
    //   return mmcs;
    // }
        

}
