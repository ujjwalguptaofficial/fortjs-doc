---
title: "Swagger Integration with FortJs"
keywords: [swagger, automatic generation, integration, fortjs, node]
description: "Learn how to seamlessly integrate Swagger with FortJs for automatic generation of API documentation. Explore initiation and model definition in Swagger with FortJs."
---

# Swagger Integration

Swagger, an open-source framework, supported by an extensive ecosystem of tools, facilitates the design, build, documentation, and consumption of RESTful Web services.

FortJs simplifies Swagger integration with its dedicated library - [fortjs-swagger](https://github.com/ujjwalguptaofficial/fortjs-swagger), enabling automatic generation of Swagger documents.

## Install library

```bash
npm install fortjs-swagger
```

## Initiate

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

Start the server and navigate to the Swagger documentation path, which is http://localhost:4000/swagger/

You will see the available endpoints listed; however, documentation is currently absent. To enable proper Swagger configuration, we need to document each endpoint with relevant information.

## Document API's

Fort.js includes special decorators for specifying the structure of your API endpoints. These decorators are:

- `summary`: Provides a brief description of the endpoint.
- `response`: Defines the expected structure of the response.
- `param`: Specifies parameters in the request path.
- `query`: Defines parameters in the query string.
- `security`: Defines security type of the end point.


Let's apply these decorators on `UserController` which deals with operations related to users -  

```js
import { Controller, textResult, jsonResult, HTTP_STATUS_CODE, validate, shields, http, singleton } from 'fortjs';
import { UserService } from '@/services/user_service';
import { User } from '@/models/user';
import { swagger } from 'fortjs-swagger';
import { AuthenticationShield } from '@/shields/authentication_shield';

@shields(AuthenticationShield)
@swagger.security('basicAuth')
export class UserController extends Controller {

    service: UserService;

    constructor(@singleton(UserService) userService: UserService) {
        super();
        this.service = userService;
    }


    @swagger.summary('get all users')
    @swagger.description('return all saved users')
    @swagger.response(HTTP_STATUS_CODE.Ok, [User])
    @swagger.query("offset", 1, "offset")
    @swagger.query("limit", 10, "no of records in the response")
    @http.get("/")
    async getUsers() {
        const { offset, limit } = this.query;
        return jsonResult(this.service.getUsers());
    }


    @swagger.summary('Add user')
    @swagger.response(HTTP_STATUS_CODE.Created, User)
    @swagger.body(User, "User model")
    @http.post("/")
    @validate.body(User)
    async addUser() {
        const user = this.body as User;
        const newUser = this.service.addUser(user);
        return jsonResult(newUser, HTTP_STATUS_CODE.Created);
    }

    @swagger.summary('get a single user by id')
    @swagger.response(HTTP_STATUS_CODE.Ok, User)
    @swagger.response(HTTP_STATUS_CODE.NotFound, 'invalid user')
    @swagger.param('id', 1, 'user id')
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

In the above snippet we have used swagger helpers decorators to document the API's structure. Now refresh the Swagger URL (`http://localhost:4000/swagger/`). You will now observe all the APIs with comprehensive documentation.

:::tip
Note: Certain decorators, such as `response`, `query`, etc., can be applied multiple times to represent various scenarios, providing a more thorough overview of the API's capabilities.
:::

## More resources

* Examples - [fortjs-swagger examples](https://github.com/ujjwalguptaofficial/fortjs-swagger/tree/master/examples)

