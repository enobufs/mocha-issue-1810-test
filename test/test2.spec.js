'use strict';

const assert = require('assert');
const path = require('path');

global.test2touched = true;

describe('mocha-test 2', function() {
  it('prepare.js must be loaded by now', function() {
    // prepare.js has been loaded
    assert.ok(require.cache[require.resolve('./prepare.js')]);
  });
});
