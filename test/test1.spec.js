'use strict';

const assert = require('assert');
const path = require('path');

describe('mocha-test', function() {
  it('prepare.js must be loaded by now', function() {
    // prepare.js has been loaded
    assert.ok(require.cache[require.resolve('./prepare.js')]);
  });
});
