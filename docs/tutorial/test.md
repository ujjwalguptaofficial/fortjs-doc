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
e.g - controllers test are added in controllers folder with suffix "test" - test for "user_controller.js" is added into file "user-controller.test.js".

However with the project growing, its very necessary to put your test cases in seperate dedicated folder. So feel free to rearrange the files.

#### Test Command

The default setup is configured with script test, so command - `npm run test` will run all test cases. It sets the `NODE_ENV` as test.

## Unit test

<br>
As the codes written in fortjs are simple & clean, we want similar approach for test cases. Let's see one example for unit testing "UserController"- 

Consider UserController implments Rest Api.

```
describe('UserController', () => {
    let app,controller;

    beforeAll(async () => {
        app = await createApp();
        // UserController has dependency of UserService, which is injected by fortjs at run time. 
        // Here UserService is a fake service in memory
        controller = new UserController(new UserService());
    });

    it('getUsers', async () => {
        controller.initialize();
        const expectedResult = jsonResult(controller.service.getUsers());
        const result = await controller.getUsers();
        expect(result).toEqual(expectedResult);
    });

    it('addUser', async () => {
        const newUser = {
            name: 'ujjwal gupta',
            emailId: 'ujjwal@m.com',
            gender: 'male',
            password: 'asdfvg',
            address: 'Bangalore India'
        };
        controller.initialize({
            data: {
                user: newUser
            }
        });
        const expectedResult = jsonResult(newUser, 201);
        const result = await controller.addUser();
        expect(result).toEqual(expectedResult);
        expect(result.responseData).toEqual(newUser);
    });


    afterAll(() => {
        return app.destroy();
    });
});
```

In the above code -

* **beforeAll** - We are configuring everything that we need bofore test starts in "beforeAll" hook of jest i.e - creating the UserController object and starting our app. The hook can be different in another framework.

* **getUsers** -  Here we have written code for testing getUsers. "getUsers" is a method which returns all the user presents. As you can see, the first line of the code is 'controller.initialize' - this is very important to call before any test case start. The 'initialize' method is present in every component i.e - controller, guard, wall & shield. This is used to initialize the controller with some value i.e setting body object, setting query string etc, basically to set the component props.

* **addUser** - "addUser" method takes user data from body & add a user. We are using 'controller.initialize' to supply the data in body.

## e2e test
<br>
For e2e test - we recommend to use Axios. Let's see an example - 

```
import axios from "axios";
import { createApp } from "../index";

describe('/user', () => {

    let app;
    let httpRequest;
    beforeAll(async () => {
        app = await createApp();
        httpRequest = axios.create({
            baseURL: process.env.APP_URL + "/user",
            timeout: 1000
        });
    });

    it('/get all users', async () => {
        const response = await httpRequest.get('/', {
            headers: {
                accept: 'application/json'
            }
        });
        expect(response.status).toEqual(200);
        expect(response.headers['content-type']).toEqual('application/json');
        expect(response.data).toEqual([
            { "address": "bhubaneswar india", "emailId": "ujjwal@mg.com", "gender": "male", "id": 1, "name": "ujjwal", "password": "admin" }
        ]);
    });
});
```

In the above code - 

* We are initializing our app and creating an axios instance in beforeAll hook of jest. This will ensure that our app is initialized before any test case is executed.

* In test case "get all users" - we create a get request to user end point and then send the request, after response is received we compare it against expected output.