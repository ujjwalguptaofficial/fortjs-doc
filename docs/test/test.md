---
title: "Test"
keywords: "test, unit, e2e, fortjs, node"
description: "Setting up test in fortjs"
---

# Test

Setting up test configuration is very easy in FortJs, infact Fortjs already provides setup configuration for unit testing and e2e testing.

The default setup uses - 

* Jest as a test framework
* Axios for sending http request in e2e test

The default setup expects the unit test cases inside particular **components** folder and e2e test cases inside dedicated folder **e2e**.

e.g - controllers test are added in controllers folder with suffix ".test" - test for "user_controller.js" is added into file "user_controller.test.js".

However with the project growing, its very necessary to put your test cases in seperate dedicated folder. So feel free to rearrange the files.

## Test Command

The default setup is configured with script test, so command - `npm run test` will run all test cases. It sets the `NODE_ENV` as test.

#### Test Examples 

* [Unit Test](/docs/test/unit-test.md)

* [e2e Test](/docs/test/e2e-test.md)


