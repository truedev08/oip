const HDMW = require('oip-hdmw');
//import { buildOipDetails, recordProtoBuilder } from 'oip-protobufjs';
const Wallet = HDMW.Wallet;

class OipWallet {
  constructor(mnemonic) {
    this.myWallet = new Wallet(mnemonic, {
      supported_coins: ['flo'],
      discover: false
    });
    //this.createMnemonic = this.createMnemonic.bind(this);
    //this.createRegistration = this.createRegistration.bind(this);
  }

  getMyMnemonic() {
    let myMnemonic = this.myWallet.getMnemonic();
    return myMnemonic;
  }

  async createMnemonic() {
    let mnemonic = await this.myWallet.getMnemonic();
    return mnemonic;
  }
}

module.exports = OipWallet;