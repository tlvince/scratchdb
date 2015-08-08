#!/usr/bin/env node
'use strict'

var scratchdb = require('./')

function cb (res) {
  res = res.address()
  console.log('scratchdb running at http://%s:%s', res.address, res.port)
}

scratchdb(cb)
