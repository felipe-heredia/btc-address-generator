const cryptoJS = require("cryptojs").Crypto;

module.exports = function GeneratePrivateKey() {
  const privateKey = cryptoJS.util.randomBytes(32);

  const privateKeyHex = cryptoJS.util.bytesToHex(privateKey);

  return privateKeyHex;
};
