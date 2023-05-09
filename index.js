const ethers = require("ethers");
const { Network, Alchemy } = require("alchemy-sdk");

const settings = {
  apiKey: "IL1vdeNVYypZ2yz7Xgqhbh8bydBjgzOR", 
  network: Network.ETH_SEPOLIA, 
};

const alchemy = new Alchemy(settings);
// connection done 

async function main() {

const addresses = [100];
const randomWallet = ethers.Wallet.createRandom();
console.log("Random Wallet Private key :" , randomWallet.privateKey);

for(let i=0 ; i < 100 ; i++){

addresses.push(randomWallet.derivePath(`m/44'/60'/0'/0/${i}`));

}


return addresses ;

}

main();