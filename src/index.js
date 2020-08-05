
const OipWallet = require('./helpers/OipWallet.js');
const RecordCompiler = require('./oipComponents/RecordCompiler.js');
const RecordPublisher = require('./oipComponents/RecordPublisher.js');
const { sendFlo } = require('./oipComponents/SendFlo');

const { config } = require('./oip.config.js');

let myWif = "RFxV2tPTwCGH9jWgrx7hcwHPm4h8q8DJoQEe8yE5CsSs4bXrMZkB"
let myMnemonic = "report supreme settle text whale math couple select follow tornado assist fit";

let myWallet = new OipWallet(myMnemonic);
//console.log("My Menmonic is: " + myWallet.getMnemonic())

let recordCompiler = new RecordCompiler();
let recordPublisher = new RecordPublisher();

async function compileMessage() {
    let updatedPayload = recordCompiler.upDatePayload();
    let signedMessage = await recordCompiler.encodeRecord(updatedPayload)
    let message = signedMessage.toString();

    return message;
}

async function postToBlockchain() {
    //console.log("test 1: " + await compileMessage())
    await sendFlo(compileMessage)
}

/*
async function postToBlockchain() {
    //console.log("akjdshfgkjadsgfjkasgdlkfdgas")
    let oipMessage = await compileMessage();
    //console.log("Rrededed")
    recordPublisher.broadcast(oipMessage, myWif).then(
        res => {
            console.log(res)
            return res;
        }
    )
};
*/

postToBlockchain();
