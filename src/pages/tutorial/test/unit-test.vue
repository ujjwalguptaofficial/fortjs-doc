<template><Layout title='Unit Test' description='Setting up unit test in fortjs' keywords='test, unit, e2e, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/test/unit-test.md'><p>As the codes written in fortjs are simple &amp; clean, we want similar approach for test cases. Let's see one example for unit testing "UserController"- </p>
<p>Consider UserController implments Rest Api &amp; codes are - </p>
<pre><code>import { Controller, textResult, DefaultWorker, jsonResult, Worker, Route, HTTP_STATUS_CODE, HTTP_METHOD, Guards, Singleton } from 'fortjs';
import { UserService } from '../services/user_service';
import { ModelUserGuard } from '../guards/model_user_guard';
import { User } from '../models/user';

export class UserController extends Controller {

    service: UserService;
    constructor(@Singleton(UserService) service: UserService) {
        super();
        this.service = service;
    }

    @DefaultWorker()
    async getUsers() {
        return jsonResult(this.service.getUsers());
    }

    @Worker(HTTP_METHOD.Post)
    @Route("/")
    @Guards(ModelUserGuard)
    async addUser() {
        const user = this.data.user;
        const newUser = this.service.addUser(user);
        return jsonResult(newUser, HTTP_STATUS_CODE.Created);
    }

    @Worker(HTTP_METHOD.Put)
    @Route("/")
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

    @Worker(HTTP_METHOD.Get)
    @Route("/{id}")
    async getUser() {

        const userId = Number(this.param.id);
        const user = new UserService().getUser(userId);
        if (user == null) {
            return textResult("invalid user id", HTTP_STATUS_CODE.NotFound);
        }
        return jsonResult(user);

    }

}
</code></pre>
<h2 id="testcode">Test code -</h2>
<pre><code>describe('UserController', () =&gt; {
    let controller;

    beforeAll(async () =&gt; {
        await createApp();
        // UserController has dependency of UserService, which is injected by fortjs at run time. 
        // Here UserService is a fake service in memory
        controller = new UserController(new UserService());
    });

    it('getUsers', async () =&gt; {
        controller.initialize();
        const expectedResult = jsonResult(controller.service.getUsers());
        const result = await controller.getUsers();
        expect(result).toEqual(expectedResult);
    });

    it('addUser', async () =&gt; {
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

    it('getUser', async () =&gt; {
        controller.initialize({
            param: {
                id: '2'
            }
        });
        const expectedResult = jsonResult(controller.service.getUser(2));
        const result = await controller.getUsers();
        expect(result).toEqual(expectedResult);
    });

    it('updateUser', async () =&gt; {
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

    afterAll(() =&gt; {
        return Fort.destroy();
    });
});
</code></pre>
<p>In the above code -</p>
<ul>
<li><p><strong>beforeAll</strong> - We are configuring everything that we need bofore test starts in "beforeAll" hook of jest i.e - creating the UserController object and starting our app. The hook can be different in another framework.</p></li>
<li><p><strong>getUsers</strong> -  Here we have written code for testing getUsers. "getUsers" is a method which returns all the user presents. As you can see, the first line of the code is 'controller.initialize' - this is very important to call before any test case start. The 'initialize' method is present in every component i.e - controller, guard, wall &amp; shield. This is used to initialize the controller with some value i.e setting body object, setting query string etc, basically to set the component props.</p></li>
<li><p><strong>addUser</strong> - "addUser" method takes user data from body &amp; add a user. We are using 'controller.initialize' to supply the user information in body. But in code, we are actually supplying user information in <code>data</code> but not <code>body</code> - this is because method "addUser" uses a Guard <code>ModelUserGuard</code> which sends user info in <code>data</code> &amp; the worker "addUser" uses data property of controller.</p></li>
<li><p><strong>updateUser</strong> -  "updateUser" method takes user data from body &amp; update user if exist otherwise returns 'invalid user'. The test code initialise the controller using 'controller.initialize' &amp; supply the user information in body. Here we are not using any guard (for explainining how to pass body i have removed guard from this method).</p></li>
</ul>
<p>Hope this is clear &amp; understandable. For help - please reach to our gitter channel.</p></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        