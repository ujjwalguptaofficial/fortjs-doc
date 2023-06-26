---
title: "Unit Test"
keywords: [test, unit, e2e, fortjs, node]
description: "Setting up unit test in fortjs"
---

# Unit test

As the codes written in fortjs are simple & clean, we want similar approach for test cases. 

Let's see one example for unit testing "UserController"- 

Consider UserController implments Rest Api & codes are - 

```
import { Controller, textResult, defaultWorker, jsonResult, worker, route, HTTP_STATUS_CODE, HTTP_METHOD, guards, singleton } from 'fortjs';
import { UserService } from '@/services';
import { ModelUserGuard } from '@/guards';
import { User } from '@/models/user';

export class UserController extends Controller {

    service: UserService;

    constructor(@singleton(UserService) service: UserService) {
        super();
        this.service = service;
    }

    @defaultWorker()
    async getUsers() {
        return jsonResult(this.service.getUsers());
    }

    @worker(HTTP_METHOD.Post)
    @route("/")
    @guards(ModelUserGuard)
    async addUser() {
        const user = this.data.user;
        const newUser = this.service.addUser(user);
        return jsonResult(newUser, HTTP_STATUS_CODE.Created);
    }

    @worker(HTTP_METHOD.Put)
    @route("/")
    async updateUser() {
        const user = new User().init(this.body);
        const userUpdated = this.service.updateUser(user);
        if (userUpdated === true) {
            return textResult("user updated");
        }
        else {
            return textResult("invalid user");
        }

    }

    @worker(HTTP_METHOD.Get)
    @route("/{id}")
    async getUser() {

        const userId = Number(this.param.id);
        const user = new UserService().getUser(userId);
        if (user == null) {
            return textResult("invalid user id", HTTP_STATUS_CODE.NotFound);
        }
        return jsonResult(user);

    }

}
```

## Test code - 

```
describe('UserController', () => {
    let controller;

    beforeAll(async () => {
        await createApp();
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

    it('getUser', async () => {
        controller.initialize({
            param: {
                id: '2'
            }
        });
        const expectedResult = jsonResult(controller.service.getUser(2));
        const result = await controller.getUsers();
        expect(result).toEqual(expectedResult);
    });

    it('updateUser', async () => {
        const userData = {
            id: 2,
            name: 'ujjwal gupta',
            emailId: 'ujjwal@m.com',
            gender: 'male',
            password: 'asdfvg',
            address: 'Bangalore India'
        };
        
        // update user for existing data
        controller.initialize({
            body: {
                user: userData
            }
        });
        let expectedResult = await textResult("user updated");
        let result = await controller.updateUser();
        expect(result).toEqual(expectedResult);

        // update user for not existing data
        userData.id = 5;
        controller.initialize({
            data: {
                user: userData
            }
        });
        expectedResult = textResult("invalid user");
        result = await controller.updateUser();
        expect(result).toEqual(expectedResult);
    });

    afterAll(() => {
        return Fort.destroy();
    });
});
```

In the above code -

* **beforeAll** - We are configuring everything that we need bofore test starts in "beforeAll" hook of jest i.e - creating the UserController object and starting our app. The hook can be different in another framework.

* **getUsers** -  Here we have written code for testing getUsers. "getUsers" is a method which returns all the user presents. As you can see, the first line of the code is 'controller.initialize' - this is very important to call before any test case start. The 'initialize' method is present in every component i.e - controller, guard, wall & shield. This is used to initialize the controller with some value i.e setting body object, setting query string etc, basically to set the component props.

* **addUser** - "addUser" method takes user data from body & add a user. We are using 'controller.initialize' to supply the user information in body. But in code, we are actually supplying user information in `data` but not `body` - this is because method "addUser" uses a Guard `ModelUserGuard` which sends user info in `data` & the worker "addUser" uses data property of controller.

* **updateUser** -  "updateUser" method takes user data from body & update user if exist otherwise returns 'invalid user'. The test code initialise the controller using 'controller.initialize' & supply the user information in body. Here we are not using any guard (for explainining how to pass body i have removed guard from this method).

Hope this is clear & understandable. For help - please reach to our gitter channel.