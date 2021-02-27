require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender strategy wait cost spike plastic coral light army gauge'; 
let testAccounts = [
"0xc8d38bfe1a4c41f041e2e55d228463e33dd9aa8aa173c6184802d686cde0eac1",
"0xf4b4cfa91a2cbbd219cf6133249a97f23c9a641f5ba7273cafcb5fd9787c2f16",
"0xa9541fc3f311893b849fcfc1843b3af94e079a37a6b6c80556365cf15aa14572",
"0x6c5cc940dc55d064e73241408d54bed104bff4c00c3fe06fee3c9426f3938ee3",
"0xfbc700284f976eda71c7f6398e6213114553f3ecff2f0a8f060f662a95c953ec",
"0x705799795a418567cf5cabc14c4a8047a8f0b684c4d6210fb5857b6cceca499e",
"0xb8fddb7cd6e2f95f74cdcc12268e520cb963642449014b11825caeba8e3cb168",
"0xce5073352b19e87a7f7c8535556f7177a7a119662c8d80c51a27942b738ab3c4",
"0x182c134567838240e269f71089a4c74e26615e3c5f60e27394cc40df11ffc4cf",
"0x1f30aefd053b58b07d5cf4a500d4c8cdf7e71af60c1e6b5e730f7d71a63662c2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
