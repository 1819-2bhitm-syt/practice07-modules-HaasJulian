const crypto = require('crypto');

function decryptText(plaintext, password){
    const decipher = crypto.createDecipher('aes192', password);
    let decrypted;
    try {
        decrypted = decipher.update(plaintext, 'hex', 'utf8');
    } catch (err) {
        console.error('HASH-Code nicht aktzeptabel!');
    }
    try {
        decrypted += decipher.final();
    } catch (err) {
        console.error('Authentication gescheitert!');
    }
    return decrypted;
}

module.exports = decryptText;