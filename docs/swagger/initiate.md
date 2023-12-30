---
title: "Swagger Initialization"
keywords: [swagger, automatic generate, integrate, fortjs, node]
description: "Swagger integration in fortjs"
---

# Initiate Swagger  

FortJs provides a separate library - [fortjs-swagger](https://github.com/ujjwalguptaofficial/fortjs-swagger) for Swagger integration. It provides automatic generation of Swagger documents by taking documents related information from you.

##  1. Install library

```bash
npm install fortjs-swagger
```

## 2. Initiate

Initiate the Swagger after the FortJs has started.

```javascript
import * as path from "path";
import { Fort } from "fortjs";
import { routes } from "@/routes";
import { swagger } from "fortjs-swagger";

const swaggerPath = path.join(__dirname, "../dist/swagger/");
//highlight-start
const initSwagger = async () => {
    await swagger.create({
        appInfo: {
            title: "Swagger Test",
            description: "Swagger Test",
            version: "1.0"
        },
        servers: [{
            description: "local",
            url: "http://localhost:4000"
        }],
        outputPath: swaggerPath,
        securitySchemes: {
            basicAuth: {
                type: "http",
                scheme: "basic"
            }
        }
    });
}
//highlight-end

export const createApp = async () => {
    Fort.folders = [
        {
            alias: "/",
            path: path.join(__dirname, "../static")
        },
        {
            alias: "/swagger",
            path: swaggerPath
        }
    ];

    Fort.routes = routes;
    await initSwagger();
    await Fort.create();
    process.env.APP_URL = `http://localhost:${Fort.port}`;
};

createApp().then(() => {
    Fort.logger.debug(`Your fort has been forged and is now ready for exploration at ${process.env.APP_URL}`);
}).catch(err => {
    console.error(err);
});
```

**Will it generate docs now?**

No, This is only the setup to initiate Swagger. We need to tell FortJs what we are expecting exactly i.e., what will be the structure of HTTP request & structure of HTTP response, etc.

## Define structure

Consider the below controller

```js
import { Controller, textResult, jsonResult, HTTP_STATUS_CODE, validate, shields, http, singleton } from 'fortjs';
import { UserService } from '@/services/user_service';
import { User } from '@/models/user';
import { AuthenticationShield } from '@/shields/authentication_shield';

@shields(AuthenticationShield)
@swagger.security('basicAuth')
export class UserController extends Controller {

    service: UserService;

    constructor(@singleton(UserService) userService: UserService) {
        super();
        this.service = userService;
    }

    @http.get("/")
    async getUsers() {
        return jsonResult(this.service.getUsers());
    }

    @http.post("/")
    @validate.body(User)
    async addUser() {
        const user = this.body as User;
        const newUser = this.service.addUser(user);
        return jsonResult(newUser, HTTP_STATUS_CODE.Created);
    }

    @http.get("/{id}")
    async getUser() {
        const userId = Number(this.param.id);
        const user = this.service.getUser(userId);
        if (user == null) {
            return textResult("invalid user id", HTTP_STATUS_CODE.NotFound);
        }
        return jsonResult(user);
    }
}
```

The above controller does operations for a user. And every endpoint expects a different request and returns a different response. We need to tell these info to Swagger.

Let's document the method - "getUser".

```js
import { swagger } from 'fortjs-swagger';

//highlight-start
@swagger.summary('get a single user by id')
@swagger.response(HTTP_STATUS_CODE.Ok, User)
@swagger.response(HTTP_STATUS_CODE.NotFound, 'invalid user id')
@swagger.param('id', 1, 'user id')
//highlight-end
@http.get("/{id}")
async getUser() {
    const userId = Number(this.param.id);
    const user = this.service.getUser(userId);
    if (user == null) {
        return textResult("invalid user id", HTTP_STATUS_CODE.NotFound);
    }
    return jsonResult(user);
}
```

Here we have used different decorators -

* `summary` - used to define the summary of the endpoint
* `response` - used to define the response returned. In this example - we are telling Swagger that: for HTTP status "OK" the result will be an array of model User. You can define multiple responses in the same way i.e., by using the `response` decorator multiple times.
* `param` - used to define route parameter

In the similar way - we can define other methods.

## More resources

* Examples - [fortjs-swagger examples](https://github.com/ujjwalguptaofficial/fortjs-swagger/tree/master/examples)
