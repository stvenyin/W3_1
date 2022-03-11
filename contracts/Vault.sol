pragma solidity ^0.8.0;
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Vault is Ownable {
    function withdraw (address _tokenAddr,  address[] memory dests,  uint256[] memory values ) public onlyOwner returns (uint256) {
          uint256 i = 0;
        while (i < dests.length) {
           ERC20(_tokenAddr).transferFrom(msg.sender, dests[i], values[i]);
           i += 1;
        }
        return(i);
    }
}