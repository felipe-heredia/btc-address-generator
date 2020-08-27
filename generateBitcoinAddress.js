const cryptoJS = require("cryptojs").Crypto;
const bs58 = require("bs58");
const bitcoin = require("bitcoinjs-lib");

const generatePublicKey = require("./generatePublicKey");

function generateBitcoinAddress() {
  const version = "00";

  const publicKey = generatePublicKey();

  const publicKeyBytes = cryptoJS.util.hexToBytes(publicKey);

  const publicKeySHA256 = cryptoJS.SHA256(publicKeyBytes);

  const hash160 = bitcoin.crypto.ripemd160(
    Buffer.from(cryptoJS.util.hexToBytes(publicKeySHA256))
  );

  const hashAndBytes = Array.prototype.slice.call(hash160, 0);
  hashAndBytes.unshift(cryptoJS.util.hexToBytes(version));

  const firstSHA = cryptoJS.SHA256(hashAndBytes);

  const secondSHA = cryptoJS.SHA256(cryptoJS.util.hexToBytes(firstSHA));

  const checksum = secondSHA.substr(0, 8);

  const address = version + cryptoJS.util.bytesToHex(hash160) + checksum;

  return bs58.encode(cryptoJS.util.hexToBytes(address));
}

console.log(generateBitcoinAddress());
