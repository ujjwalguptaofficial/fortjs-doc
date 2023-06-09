---
Title: "e2e Test"
Keywords: "test, unit, e2e, fortjs, node"
Description: "Setting up e2e test in fortjs"
---

# E2E Test

For e2e test - we recommend to use Axios. But feel free to use your favourite http client library.

Let's see an example - Consider UserController implments Rest Api & codes are - 

```
import { Controller, textResult, defaultWorker, jsonResult, worker, route, HTTP_STATUS_CODE, HTTP_METHOD, guards, singleton } from 'fortjs';
import { UserService } from '@/services';
import { ModelUserGuard } from '@/guards';
import { User } from '@/models';

export class UserController extends Controller {

    service: UserService;
    constructor(@Singleton(UserService) service: UserService) {
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

## Test code

```
import axios from "axios";
import { createApp } from "../index";

describe('/user', () => {

    let httpRequest;
    beforeAll(async () => {
        await createApp();
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

    it('/add user', async () => {
        const user = {
            "name": "ujjwal",
            "emailId": "ujjwal@m.com",
            "password": "12345as",
            "gender": "male",
            "address": "sadfsgbhfgtbrg"
        };
        const response = await httpRequest.post('/', user, {
            headers: {
                accept: 'application/json'
            }
        });
        expect(response.status).toEqual(201);
        expect(response.headers['content-type']).toEqual('application/json');

        expect(response.data).toEqual({ id: 2, ...user });
    });

    it('/update user', async () => {
        const user = {
            "name": "ujjwal gupta",
            "emailId": "ujjwal@m.com",
            "password": "12345as",
            "gender": "male",
            "address": "sadfsgbhfgtbrg",
            "id": 2
        };
        const response = await httpRequest.put('/', user, {
            headers: {
                accept: '*/*'
            }
        });
        expect(response.status).toEqual(200);
        expect(response.data).toEqual("user updated");
    });
});
```

In the above code - 

* We are initializing our app and creating an axios instance in beforeAll hook of jest. This will ensure that our app is initialized before any test case is executed.

* In test case "get all users" - we create a get request to user end point and then send the request, after response is received we compare it against expected output.