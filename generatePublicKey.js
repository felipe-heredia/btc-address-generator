const cryptoJS = require("cryptojs").Crypto;
const ec = require("eccrypto");

module.exports = function generatePublicKey(privateKey) {
  const publicKey = ec.getPublic(
    Buffer.from(cryptoJS.util.hexToBytes(privateKey))
  );
  return cryptoJS.util.bytesToHex(publicKey);
};
