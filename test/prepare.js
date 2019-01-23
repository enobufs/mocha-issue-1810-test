'use strict';

const assert = require('assert')

before(function() {
  return new Promise(resolve => {
    assert.ok(!global.test1touched, "test1 shouldn't be loaded yet");
    assert.ok(!global.test2touched, "test2 shouldn't be loaded yet");

    console.log('Preparing ...');
    setTimeout(() => {
      console.log('... prepared!');
      resolve();
    }, 1000);
  });
});

after(function() {
  assert.ok(global.test1touched, "test1 shouldn be loaded and tested by now");
  assert.ok(global.test2touched, "test2 shouldn be loaded and tested by now");

  return new Promise(resolve => {
    console.log('Unpreparing ...');
    setTimeout(() => {
      console.log('... unprepared!');
      resolve();
    }, 1000);
  });
});
