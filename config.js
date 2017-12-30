let pub = require('./config-public');
let priv = require('./config-private');

module.exports = Object.assign({}, pub, priv);
