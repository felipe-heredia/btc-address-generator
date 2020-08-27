const generatePrivateKey = require("./generatePrivateKey");
const generatePublicKey = require("./generatePublicKey");
const generateWIF = require("./generateWIF");
const generateBitcoinAddress = require("./generateBitcoinAddress");

const privateKey = generatePrivateKey();
const wif = generateWIF(privateKey);
const publicKey = generatePublicKey(privateKey);
const address = generateBitcoinAddress(publicKey);

console.log(`Sua chave privada é: ${privateKey}`);
console.log(`Sua WIF é: ${wif}`);
console.log(`Sua chave pública é: ${publicKey}`);
console.log(`O endereço de sua carteira é: ${address}`);
