const encrypt = require('./encrypt.js');
const decrypt = require('./decrypt.js');

let plaintext = "John";
let password = "yes";



plaintext = encrypt(plaintext,password);


console.log(`Der verschlüsselte Text lautet: ${plaintext}`);

plaintext = decrypt(plaintext,password);

console.log(`Der wieder entschlüsselte Text lautet: ${plaintext}`);