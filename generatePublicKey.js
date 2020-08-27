const cryptoJS = require("cryptojs").Crypto;
const ec = require("eccrypto");

const generatePrivateKey = require("./generatePrivateKey");

module.exports = function generatePublicKey() {
  const privateKey = generatePrivateKey();

  const publicKey = ec.getPublic(
    Buffer.from(cryptoJS.util.hexToBytes(privateKey))
  );
  return cryptoJS.util.bytesToHex(publicKey);
};
