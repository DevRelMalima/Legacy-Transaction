import { Web3 } from "web3";

const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/Khl1_NnDbHrpTe2b6G7QkVSLPklf9Rcm");

async function txLegacy() {
    const wallet = web3.eth.wallet.add("0x9673488150c05380c2d245a4b7926252132489ecc9f19fd3513e926993cce2d1");

    const sender = wallet[0].address;
    const recipient = "0x807BFe4940016B5a7FdA19482042917B02e68359";
    const value = 1; //wei
    const nonce = await web3.eth.getTransactionCount(sender);
    const gas = 21000;
    const gasPrice = await web3.eth.getGasPrice();

    const tx = {
        from: sender,
        to: recipient,
        value,
        nonce,
        gas,
        gasPrice,
        type: 0,
    };

    const txReceipt = await web3.eth.sendTransaction(tx);
    console.log("Tx hash", txReceipt.transactionHash);
    
}

txLegacy();