require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey prison suspect venture stone rate machine upgrade hotel light army gas'; 
let testAccounts = [
"0x07fde6fe4c29fa35cf9fef832faf3b391afb00a5c648b45fae2634117bbb67c1",
"0x362cf6ad160f1e94d11a5822d5b358f2b2cdfcba6d7db9d81b95cc1b78ff23da",
"0x72d35310bdf20c7de211ea61d803f8f8dc10571801d5e5d4b7a33d9acc89057e",
"0xab5427415adf5c0d483d6b0fa1e0dd7211e77cc8511eddad7b9060622033233f",
"0x8bf5f50c1cc9525cbd1ad20c0b4e3d6026982718c44660dc7d83f68d0ddd5965",
"0xe198c5d8b1754973cec6af11bf92c2ccce23263ede93a5847311a144b138841f",
"0xb6b78ca4470623ba46a047c4d1a165379e961db3839290d54be2e7724a25749d",
"0x9ea93c693ad5c67d949b47383b5f848ffc006c106a48cd3507db080a8732f2b0",
"0x3355fea8df4823142d50c122535e73161b12635f652776607470f6e126c7f280",
"0x4d3d09c0fe5e2fccabcbd328ef163371cf0bd2d5264437ae5c1d04567ffb11e5"
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
