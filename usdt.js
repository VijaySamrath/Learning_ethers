const ethers = require("ethers");
const usdtABI = require("./usdt.json")
require("dotenv").config();

async function main() {
    const usdtAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

    const provider = new ethers.providers.JsonRpcProvider(process.env.MainnetinfuraApi);

    const contract = new ethers.Contract(usdtAddress, usdtABI, provider)

    //**to get the past events from a particular Block to the latest Block */
    // const LatestBlock = await provider.getBlockNumber() // to get the Latest Block

    // const transferEvents = await contract.queryFilter('Transfer', 16432107,LatestBlock)
    // console.log(transferEvents)

    //**Getting transfer events which transfer valueis  more than 1 usdt 

    contract.on("Transfer", (from , to , value, event) => {
        let info ={
            from: from,
            to: to,
            value: ethers.utils.formatUnits(value, 7),
            data: event
        };
        console.log(JSON.stringify(info, null, 4))
    })

}
main();
 