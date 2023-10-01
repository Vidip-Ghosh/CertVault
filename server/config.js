const crypto = require('crypto');
const secret = crypto.randomBytes(32).toString('hex');

// const solana_secret_phase = 
module.exports = {
    JWT_SECRET : secret,

}