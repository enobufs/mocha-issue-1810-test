'use strict';

const assert = require('assert');

after(function () {
    global.testResults.allTestsComplete = true;
});

describe('mocha-test', function () {
    it('unprepare.js must be loaded by now', function () {
        assert.ok(global.testResults.syncPrepDone)
    })

    it('onPrepare() must be called by now', function () {
        assert.ok(global.testResults.onPrepCalled)
    })

    it('onPrepare() must be complete by now', function () {
        assert.ok(global.testResults.asyncPrepDone)
    })

    it('onUnprepare() must not be called yet', function () {
        assert.ok(!global.testResults.onUnprepCalled)
    })
})

