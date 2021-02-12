// contracts/MusicToken.sol
// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract MellowmaniacCopy is ERC1155 {

    uint256 private _mellowmaniac;

    string public artist;
    string public symbol;
    string public description;
    string public title;
    string public hero;
    string public sample;
    string public full;
    uint   public supply;


    constructor() public ERC1155 ("") {
        _mellowmaniac = 0;
    }

    // Call the add function
    function addMellowmaniac(
        string memory artist_,
        string memory description_,
        string memory title_,
        string memory hero_,
        string memory sample_,
        string memory full_,
        uint256 initialSupply
        ) public returns (uint256)
    {
            // Incredment Token ID
            _mellowmaniac++;
            
            uint256 mellowmaniacClassId = _mellowmaniac;
            artist = artist_;
            description = description_;
            title = title_;
            hero = hero_;
            sample = sample_;
            full = full_;

            // Don't fully understand how best to pass in all the properties to this 4th attribute:
            _mint(msg.sender, mellowmaniacClassId, initialSupply,"");
            return mellowmaniacClassId;
    }   
            
  
}


// }