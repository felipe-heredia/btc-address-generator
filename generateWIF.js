const cryptoJS = require("cryptojs").Crypto;
const bs58 = require("bs58");

const generatePrivateKey = require("./generatePrivateKey");

const version = "80";
const privateKey = generatePrivateKey();

const versionAndPrivateKey = version + privateKey;

const firstSHA = cryptoJS.SHA256(
  cryptoJS.util.hexToBytes(versionAndPrivateKey)
);

const secondSHA = cryptoJS.SHA256(firstSHA);

const checksum = secondSHA.substr(0, 8);

const WIF = versionAndPrivateKey + checksum;

const finalWIF = bs58.encode(cryptoJS.util.hexToBytes(WIF));

console.log(finalWIF);
