---
title: "Swagger Initialization"
keywords: "swagger, automatic generate, integrate, fortjs, node"
description: "Swagger integration in fortjs"
---

# Initiate Swagger  

FortJs provides a seperate library - [fortjs-swagger](https://github.com/ujjwalguptaofficial/fortjs-swagger) for swagger integration. It provides automatic generation of swagger documents by taking documents related information from you.

##  1. Install library

```
npm install fortjs-swagger
```

## 2. Initiate

initiate the swagger after the fortjs has started.

```javascript
import * as Path from "path";
import { Fort } from "fortjs";
import { Swagger } from "fortjs-swagger";
import { routes } from "./routes";


Fort.routes = routes;

// allow swagger path to access using url with alias swagger
Fort.folders = [{
    alias: "swagger",
    path: Path.join(__dirname, "../swagger/")
}];

Fort.create().then(() => {    
    // initiating swagger 
    Swagger.create({
        appInfo: {
            title: "Swagger Test",
            description: "Swagger Test",
            version: "1.0"
        },
        servers: [{
            description: "local",
            url: "http://localhost:4000"
        }],
        // create swagger files at this path
        outputPath: swaggerPath,
        securitySchemes: {
            basicAuth: {
                type: "http",
                scheme: "basic"
            }
        }
    });
})
```

Will it generate docs now ?

No, This is only setup to initiate swagger. We need to tell fortjs what we are expecting exactly i.e - what will be the structure of http request & structure of http response etc.

Consider the below controller

```
import { Controller, textResult, defaultWorker, jsonResult, worker, route, HTTP_STATUS_CODE, HTTP_METHOD, Guards, Shields } from 'fortjs';
import { UserService } from '../services/user_service';
import { User } from '../models/user';
import { Response, Body, Param, Summary, Description, Security } from 'fortjs-swagger';


export class UserController extends Controller {

    @defaultWorker()
    async getUsers() {
        const service = new UserService();
        return jsonResult(service.getUsers());
    }

    @worker([HTTP_METHOD.Post])
    @route("/")
    async addUser() {
        const user = this.data.user;
        const service = new UserService();
        const newUser = service.addUser(user);
        return jsonResult(newUser, HTTP_STATUS_CODE.Created);
    }

    @worker([HTTP_METHOD.Put])
    @route("/")
    async updateUser() {

        const user: User = this.data.user;
        const userUpdated = new UserService().updateUser(user);
        if (userUpdated === true) {
            return textResult("user updated");
        }
        else {
            return textResult("invalid user");
        }

    }

    @worker([HTTP_METHOD.Get])
    @route("/{id}")
    async getUser() {

        const userId = Number(this.param.id);
        const user = new UserService().getUser(userId);
        if (user == null) {
            return textResult("invalid id");
        }
        return jsonResult(user);

    }

    @worker([HTTP_METHOD.Delete])
    @route("/{id}")
    async removeUser() {

        const userId = Number(this.param.id);
        const service = new UserService();
        const user = service.getUser(userId);
        if (user != null) {
            service.removeUser(userId);
            return textResult("user deleted");
        }
        else {
            return textResult("invalid user");
        }
     }
 }
```

The above controller does operation for a user. And every end point exepects different request and return different response. We need to tell these info to swagger. 
 
Let's document the  worker - "getUsers". 

```
import { Response, Summary, Description} from 'fortjs-swagger';

@Summary('get all users')
@Description('return all saved users') 
@Response(HTTP_STATUS_CODE.Ok, [User])
@defaultWorker()
async getUsers() {
    const service = new UserService();
    return jsonResult(service.getUsers());
}
```

Here we have used three different decorators -

* Summary - used to define the summary of the end point
* Description - used to describe the end point in details. This is not necessary most of the time.
* Response -  used to define the response returned. In this example - we are telling swagger that : for http status "OK" the result will be array of model User. You can define multiple response in the same way i.e by using response decorator multiple time.

In the similar way - we can define other workers.

## More resources

* Examples - https://github.com/ujjwalguptaofficial/fortjs-swagger/tree/master/examples
   