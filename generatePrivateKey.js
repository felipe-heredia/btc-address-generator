const cryptoJS = require("cryptojs").Crypto;

const privateKey = cryptoJS.util.randomBytes(32);

const privateKeyHex = cryptoJS.util.bytesToHex(privateKey);

console.log(privateKeyHex);
