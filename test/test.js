var commonBlockchainMainnetTests = require('../../abstract-common-blockchain/tests/mainnet');
var test = require('tape');
var biteasyAPI = require('../');

var commonMainnet = {
  setup: function(t, cb) {
    var commonBlockchain = biteasyAPI({ network: 'mainnet' })
    cb(null, commonBlockchain)
  },
  teardown: function(t, commonBlockchain, cb) {
    cb()
  }
}

commonBlockchainMainnetTests(test, commonMainnet);
