//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Vault1 {
    
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function deposit(uint8 _amount) payable external {
        
    }

}
