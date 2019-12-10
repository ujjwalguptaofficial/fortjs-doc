---
Title: "Test"
Keywords: "test, unit, e2e, fortjs, node"
Description: "Setting up test in fortjs"
---

Setting up test configuration is very easy in FortJs, infact Fortjs already provides setup configuration for unit testing and e2e testing.

The default setup uses - 

* Jest as a test framework
* Axios for sending http request in e2e test

<br>The default setup adds the unit test cases inside particular components folder & e2e test cases inside dedicated folder e2e. 
e.g - controllers test are added in controllers folder with suffix ".test" - test for "user_controller.js" is added into file "user-controller.test.js".

However with the project growing, its very necessary to put your test cases in seperate dedicated folder. So feel free to rearrange the files.

#### Test Command

The default setup is configured with script test, so command - `npm run test` will run all test cases. It sets the `NODE_ENV` as test.

#### Test Examples 

* [Unit Test](/tutorial/test/unit-test)

* [e2e Test](/tutorial/test/e2e-test)


