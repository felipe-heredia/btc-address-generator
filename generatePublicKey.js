const cryptoJS = require("cryptojs").Crypto;
const ec = require("eccrypto");

const generatePrivateKey = require("./generatePrivateKey");

const privateKey = generatePrivateKey();

const publicKey = ec.getPublic(
  Buffer.from(cryptoJS.util.hexToBytes(privateKey))
);

console.log(cryptoJS.util.bytesToHex(publicKey));
