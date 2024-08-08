import { Web3 } from "web3";

const web3 = new Web3("RPC URL"); // RPC node here

async function txLegacy() {
    const wallet = web3.eth.wallet.add("Private Key Here");


    const sender = wallet[0].address;
    const recipient = "0x807BFe4940016B5a7FdA19482042917B02e68359";
    const value = 1; // we1
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
