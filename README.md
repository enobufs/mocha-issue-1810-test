# mocha-issue-1810-test

## Summary of solution
This is to demonstrate the proposed solutions to mocha [issue 1810](https://github.com/mochajs/mocha/issues/1810).
The idea is not to add new arguments to mocha script, but to allow returning functions from
the required modules to enable async prepare/unprepare features.

* Check `required` modules have onPrepared or onUnprepared functions.
* Call all of onPrepared functions and wait until all the returned promises resove.
* Mocha.run()
* Call all of onUnprepare functions and wait until all the returned promises resolve.

> See `./test/prpare.js` which is specified with `--require` flag in ./test/mocha.opts.

The proposed changes in mocha can be found in [this link](https://github.com/enobufs/mocha/commit/451ba4459b95cd34a888aefdbd12ebbfab98ae48).

## How to run tests

Check out enobufs/mocha and enobufs/mocha-issue-1810-test in the same folder.

```
git clone git@github.com:enobufs/mocha.git
git clone git@github.com:enobufs/mocha-issue-1810-test.git
```

Swith mocha branch to `feature/async-require`, then install dependencies.
```
cd mocha
git checkout feature/async-require
npm i
cd -
```

Then, cd into mocha-issue-1810-test.git to install & run tests.
```
cd mocha-issue-1810-test.git
npm i
npm t
```

You should see something like this:
```
> mocha-test@0.0.1 test /Users/ytakeda/Projects/enobufs/mocha-issue-1810-test
> mocha

Preparing ...
... prepared!


  mocha-test
    ✓ unprepare.js must be loaded by now
    ✓ onPrepare() must be called by now
    ✓ onPrepare() must be complete by now
    ✓ onUnprepare() must not be called yet


  4 passing (4ms)

Unpreparing ...
... unprepared!
```

## Test with mocha@5.2.0 (the latest release)
Swith mocha version to v5.2.0
```
cd mocha
git checkout v5.2.0
cd ..
```

Then run the test again
```
cd mocha-issue-1810-test.git
npm t
```

You should see errors like this:

```
mocha-test
    ✓ unprepare.js must be loaded by now
    1) onPrepare() must be called by now
    2) onPrepare() must be complete by now
    ✓ onUnprepare() must not be called yet
```

