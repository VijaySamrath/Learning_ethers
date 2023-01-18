const ethers = require("ethers");
const usdtABI = require("./usdt.json")
require("dotenv").config();

async function main() {
    const usdtAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

    const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/79e94aea484649b1bd26c79c144cd054");

    const contract = new ethers.Contract(usdtAddress, usdtABI, provider)
    
    const LatestBlock = await provider.getBlockNumber() // to get the Latest Block

    const transferEvents = await contract.queryFilter('Transfer', 16432107,LatestBlock)
    console.log(transferEvents)

    



}
main();
 