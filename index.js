"use strict";

var Crypto = require('./lib/crypto');
var Client = require('./lib/client');

var Cyberplat = function (ops) {
    var crypto = new Crypto(ops.crypto);
    var client = new Client(ops.settings);

    return {

    };
};

module.exports = Cyberplat;