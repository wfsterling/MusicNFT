// contracts/MusicToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Melomaniac is ERC721 {
    
    mapping(string => bool) _mmcExists;
    string[] public artist;
    string[] public title;
    string[] public description;
    uint[] public price;
    uint[] public supply;
    string tokenType;

    uint public mmcId;

    constructor() ERC721("Melomaniac", "MMC") public {}

    // Call the add function
    function addMelomaniac( string memory _artist, string memory _title, string memory _description, uint256 _price, uint256 _supply ) public {
        // Requrie unique MMC
        require(!_mmcExists[_title]);
        artist.push(_artist);
        title.push(_title);
        description.push(_description);
        price.push(_price);
        supply.push(_supply);
        tokenType = 'mmc-token';
        mmcId = mmcId++;

        _mint(msg.sender, mmcId);
        _mmcExists[_title] = true;
    } 

    // function getMMCList () external returns (string[]){
    //   return mmcs;
    // }
        

}
