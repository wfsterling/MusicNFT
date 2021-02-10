// contracts/MusicToken.sol
// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract MusicToken is ERC1155 {

    uint256 public constant MELLOWMANIAC = 0;

    string public artist;
    string public symbol;
    string public description;
    string public title;
    string public hero;
    string public sample;
    string public full;

    address public governance;
    uint256 public airlineCount;
    
    modifier onlyGovernance() {
        require(msg.sender == governance, "only governance can call this");
        
        _;
    }

    constructor(address governance_) public ERC1155("http://www.xanabea.com/indigotheory/mellowmaniac/images/c1s.png") {
        governance = governance_;
        airlineCount = 0;
    }
    
    function addNewAirline(uint256 initialSupply) external onlyGovernance {
        airlineCount++;
        uint256 airlineTokenClassId = airlineCount;

        _mint(msg.sender, airlineTokenClassId, initialSupply, "");        
    }
}



    

    // "Dirty Old Men","Russian Blues Festival, 2021","RUBL","Sergey, Nikolay, William","../images/concert/concert1.jpg","../images/music/RussianBlues-sample.mp3","../images/music/RussianBlues-full.mp3"

// }