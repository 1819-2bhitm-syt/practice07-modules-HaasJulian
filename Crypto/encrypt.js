const crypto = require('crypto');

let encrypting = function (plaintext, password) {
    const cipher = crypto.createCipher('aes192', password);

    let encrypted = cipher.update(plaintext, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return(encrypted);
};

module.exports=encrypting;

