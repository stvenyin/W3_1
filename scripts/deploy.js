//hardhat库使用ethers组件与区块链进行交互
const { ethers } = require("hardhat");

//主函数
async function main() {   
    const [deployer] = await ethers.getSigners();

    console.log(
      "Deploying GLDToken contracts with the account:",
      deployer.address
    );
    
    //ERC20
    const GLDToken = await ethers.getContractFactory("GLDToken");
    const gLDToken = await GLDToken.deploy("1000");
    console.log("GLDToken address:", gLDToken.address);

    //Value
    const GVault = await ethers.getContractFactory("Vault");
    const gVault= await GVault.deploy();
    console.log("gVault address:", gVault.address);

}

//执行部署
main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});