---
Title: "e2e Test"
Keywords: "test, unit, e2e, fortjs, node"
Description: "Setting up test in fortjs"
---

For e2e test - we recommend to use Axios. Let's see an example - 

Consider UserController implments Rest Api & codes are - 

```
import { Controller, textResult, DefaultWorker, jsonResult, Worker, Route, HTTP_STATUS_CODE, HTTP_METHOD, Guards, Singleton } from 'fortjs';
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

    @Worker([HTTP_METHOD.Post])
    @Route("/")
    @Guards([ModelUserGuard])
    async addUser() {
        const user = this.data.user;
        const newUser = this.service.addUser(user);
        return jsonResult(newUser, HTTP_STATUS_CODE.Created);
    }

    @Worker([HTTP_METHOD.Put])
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

    @Worker([HTTP_METHOD.Get])
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
```

## Test code - 


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