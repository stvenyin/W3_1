##
npm init --yes 
npx hardhat
npm install @openzeppelin/contracts
npm install --save-dev hardhat 
npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
npm install
、、、

##
npx hardhat node
npx hardhat compile
npx hardhat run scripts/deploy.js --network local
npx hardhat run scripts/deploy.js --network testnet 
、、、

##
npx hardhat test
npx hardhat test test/Token.js --network local
、、、
