---
Title: "Swagger"
---

Swagger is an open-source software framework backed by a large ecosystem of tools that helps developers design, build, document, and consume RESTful Web services

FortJs provides a seperate library - [fortjs-swagger](https://github.com/ujjwalguptaofficial/fortjs-swagger) for swagger integration. It provides automatic generation of swagger documents.

Let's see how to integrate swagger - 

##  1. Install library

<br>
`npm install fortjs-swagger`

<br>
## 2. Initiate

<br>
initiate the swagger after the fortjs has started.

e.g -

```
export class App extends Fort {
    constructor() {
        super();
        this.routes = routes;
        this.viewEngine = FortViewEngine;
    }
}

new App().create({
    defaultPath: "default",
    folders: [{
        alias: "/",
        path: path.join(__dirname, "../static")
    }, {
        alias: "swagger",
        path: Path.join(__dirname, "../swagger")
    }]
}).then(() => {

    const srcFolder = Path.join(__dirname, "../src/");
    
    // initiating swagger 
    new Swagger().create({
        appInfo: {
            title: "Swagger Test",
            description: "Swagger Test",
            version: "1.0"
        },
        servers: [{
            description: "local",
            url: "http://localhost:4000"
        }],
        outputPath: Path.join(__dirname, "../swagger/"),
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

No, we need to tell fortjs what we are expecting exactly i.e - what will be the structure of post request, query string etc.

Consider the below controller

```
export class UserController extends Controller {

    @DefaultWorker()
    async getUsers() {
        const service = new UserService();
        return jsonResult(service.getUsers());
    }

    @Worker([HTTP_METHOD.Post])
    @Route("/")
    @Guards([ModelUserGuard])
    async addUser() {
        const user = this.data.user;
        const service = new UserService();
        const newUser = service.addUser(user);
        return jsonResult(newUser, HTTP_STATUS_CODE.Created);
    }

    @Worker([HTTP_METHOD.Put])
    @Guards([ModelUserGuard])
    @Route("/")
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

    @Worker([HTTP_METHOD.Get])
    @Route("/{id}")
    async getUser() {

        const userId = Number(this.param.id);
        const user = new UserService().getUser(userId);
        if (user == null) {
            return textResult("invalid id");
        }
        return jsonResult(user);

    }

    @Worker([HTTP_METHOD.Delete])
    @Route("/{id}")
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
@Summary('get all users') // import { Response, Summary, Description} from 'fortjs-swagger';
@Description('return all saved users') 
@Response(HTTP_STATUS_CODE.Ok, [User])
@DefaultWorker()
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

# * More resources - 

* Examples - https://github.com/ujjwalguptaofficial/fortjs-swagger/tree/master/examples
   