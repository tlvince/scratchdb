'use strict'

var assert = require('assert')
var scratchdb = require('./')

function test (server) {
  // https://nodejs.org/api/net.html#net_class_net_server
  assert.ok(server.address, 'has an address method')
  server.close()
}

scratchdb(test)
