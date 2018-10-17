'use strict'

const assert = require('assert');

global.testResults = {
    syncPrepDone: false,
    onPrepCalled: false,
    asyncPrepDone: false,
    onUnprepCalled: false,
    allTestsComplete: false
};


global.testResults.syncPrepDone = true


// Code below is the proposal

exports.onPrepare = function () {
    global.testResults.onPrepCalled = true;
    return new Promise((resolve) => {
        console.log("Preparing ...")
        setTimeout(() => {
            global.testResults.asyncPrepDone = true;
            console.log("... prepared!");
            resolve();
        }, 1000);
    });
}

exports.onUnprepare = function () {
    global.testResults.onUnprepCalled = true;

    // When this is called, all tests must be complete.
    assert.ok(global.testResults.allTestsComplete);

    return new Promise((resolve) => {
        console.log("Unpreparing ...");
        setTimeout(() => {
            console.log("... unprepared!");
            resolve();
        }, 1000);
    });
}
