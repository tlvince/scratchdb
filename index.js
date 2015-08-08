'use strict'

var memdown = require('memdown')
var PouchDB = require('pouchdb')
var expressPouchDB = require('express-pouchdb')

module.exports = function (cb, opts) {
  cb = cb || function () {}
  opts = opts || {
    port: process.env.PORT || 5985
  }

  var pouchOpts = {
    db: memdown
  }

  var serverOpts = {
    mode: 'minimumForPouchDB'
  }

  var InMemPouchDB = PouchDB.defaults(pouchOpts)
  var app = expressPouchDB(serverOpts)

  app.setPouchDB(InMemPouchDB)
  app.listen(opts.port, function () {
    cb(this)
  })
}
