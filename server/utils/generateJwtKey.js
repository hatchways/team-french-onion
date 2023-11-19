const crypto = require('crypto')

const generateJwtSecretKey = ()=> {
    const key = crypto.randomBytes(32).toString('hex');
    return key
}

module.exports = generateJwtSecretKey