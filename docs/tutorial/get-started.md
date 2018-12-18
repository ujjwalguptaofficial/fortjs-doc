---
Title: "Get Started"
---

In this get started tutorial we will create a simple rest api using FortJs.

FortJs is built using typescript and uses es6 pattern. That's why we need webpack or babel to transpile es6 codes to nodejs compatible code.

But dont worry about all the configuration, we we have created different starter template for you. You just need to download/clone the repo based on your preferred language and start writing your code.

* Typescript - <https://github.com/ujjwalguptaofficial/fortjs-typescript-starter>
* Javascript - <https://github.com/ujjwalguptaofficial/fortjs-javascript-starter>

<br>
After downloading the repo - open the console, move to project directory and run the commands -
* `npm install` - It will install all the dependency
* `npm run start` - It will run the app.

<br>
Browser the url mentioned in the console (http://localhost:4000/)

## Understanding project

<br>
Now you must be thinking - where is the code which is rendering output to browser ?. Let's see -

* Open  folder src -> controllers. Inside the controllers you will see a file name - default_controller, lets open it and observe the code.

* Under the controller -> you will see a method 'default' - this is the one which is rendering output to browser.

You might find this complex but worry not, everything will be clear at the end of this article. Though one thing to notice here is that - codes are much cleaner than what we used to write in nodejs apps, right ?

## Creating Rest Api

<br>
We are going to create a rest endpoint "user" which will perform add, get, delete, update.

### Create controller

<br>
For creating an end point- we first need to create a controller. Before creating controller, please read the docs for [controller](controller)

Let's create a file user_controller.ts inside the contollers folder.

Copy the below code inside the file - 

```
import { Controller, textResult, defaultWorker } from 'fortjs'

export class UserController extends Controller {

  @defaultWorker()
  async default() {
    return textResult('you have successfully created a user controller');
  }

}
```

In the above code - 
* We have created a class `UserController` which is extending another class `Controller` from fortjs .
* We have created a method `default` which is returning some result by using the method `textResult` from fortjs. `textResult` return http response with content-type 'text/plain'.
* We have used a decorator `defaultWorker` from fortjs. A worker makes the method visible so that it can be called by http request. A default worker is a worker which add the route "/" for target method. Please take a look at [worker](worker) doc.

<br>
Now We need to add our controller to app. Open 'routes.ts' or 'routes.js' (inside src folder) - this contains list of routes.

Let's add the `UserController` to routes list. Update the routes.ts by below code -

```
import { DefaultController } from "./controllers/default_controller";
import { UserController } from "./controllers/user_controller";

export const routes = [{
    path: "/default",
    controller: DefaultController
},{
    path: "/user", 
    controller: UserController
}]
```

Now open the url - [localhost:4000/user](localhost:4000/user). You can see the output which is returned from default method inside "UserController".

### Create service

<br>
Before writing further code in controller, lets create the user service. Create a file user_service.ts inside the folder services and copy the below code inside it.

```
import { User } from "../models/user";

interface IStore {
  users: User[];
}

const store: IStore = {
  users: [{
    id: 1,
    name: "ujjwal",
    address: "bhubaneswar india",
    emailId: "ujjwal@mg.com",
    gender: "male",
    password: "admin"
  }]
}

export class UserService {
  getUsers() {
      return store.users;
  }

  addUser(user: User) {
    const lastUser = store.users[store.users.length - 1];
    user.id = lastUser == null ? 1 : lastUser.id + 1;
    store.users.push(user);
    return user;
  }

  updateUser(user: User) {
    const existingUser = store.users.find(qry => qry.id === user.id);
    if (existingUser != null) {
      existingUser.name = user.name;
      existingUser.address = user.address;
      existingUser.gender = user.gender;
      existingUser.emailId = user.emailId;
      return true;
    }
    return false;
  }

  getUser(id: number) {
    return store.users.find(user => user.id === id);
  }

  removeUser(id: number) {
    const index = store.users.findIndex(user => user.id === id);
    store.users.splice(index, 1);
  }
}
```

Above code contains a variable store which contains collection of users and the method inside the service do operation like - add, update, delete, get on that store.

So now we have service, we need to write the code to use those service and create a rest api.

### REST

<br>
According to REST - An end point with http method 

* GET - should return some entity or entities
* POST - should add some entity.
* PUT - should update some entity.
* DELETE - should delete some entity.

<br>
### Getting users

<br>
Let's rename the default methods to "getUsers" and code inside too - which will return all users.

```
import { Controller, jsonResult, defaultWorker } from 'fortjs'

export class UserController extends Controller {

  @defaultWorker()
  async getUsers() {
    const service = new UserService();
    return jsonResult(service.getUsers());
  }

}
```

In the above code - we are using `jsonResult` as we need to return json values.

Now lets refresh the browser . We are getting one user as we had only one user in the store. 

This method will only for http method - "GET". So if you will call this same endpoint for methods other than "GET" , you will get status code 405.

### Adding user

For adding user - we need to create a method which will only work for http method POST. Update the usercontroller by below code -

```
import { Controller, jsonResult, defaultWorker, HTTP_METHOD, HTTP_STATUS_CODE } from 'fortjs'

export class UserController extends Controller {

    @defaultWorker()
    async getUsers() {
        const service = new UserService();
        return jsonResult(service.getUsers());
    }

    @worker([HTTP_METHOD.Post])
    @route("/")
    async addUser() {
        const user = {
            name: this.body.name,
            gender: this.body.gender,
            address: this.body.address,
            emailId: this.body.emailId,
            password: this.body.password
        };
        const service = new UserService();
        const newUser = service.addUser(user);
        return jsonResult(newUser, HTTP_STATUS_CODE.Created);
    }

}

```

In the above code - we have created an extra method - "addUser" which takes data from body (post data) and add the user to store by calling service. We are retuning the created user with response code - Created (201).

#### Validating user

We are not doing any validation for the user. It might be that invalid data is supplied in post request. Well, we can write code inside the method "addUser" or create another function to validate and validate the user.

But A/c to [fort](https://github.com/ujjwalguptaofficial/fort) (fortjs works on the principle of fort) - a worker method should only have code related to its main purpose and extra code should be written into components. Please take a look at  [component](component) docs.

Let's see how we can validate user by creating a component. Since we are doing operation on worker level, we need to use [Guard](guard) component.

Create a file "model_user_guard.ts" for typescript projects or "model_user_guard.js" for js projects inside the folder guards and write the below code inside it - 

```
import { Guard, HttpResult, MIME_TYPE, HTTP_STATUS_CODE } from "fortjs";
import { User } from "../../models/user";
import { validate } from "class-validator";

export class ModelUserGuard extends Guard {
    async check() {
        const user: User = new User(this.body);
        // here i am using a plugin to validate but you can write your own code too. 
        const errors = await validate('User', user);
        if (errors.length === 0) {
            // pass this to method, so that they dont need to parse again
            this.data.user = user;
            return null;
        }
        else {
            const error = errors[0];
            const constraint = Object.keys(error.constraints)[0];
            const errMessage = error.constraints[constraint];
            return {
                contentType: MIME_TYPE.Text,
                statusCode: HTTP_STATUS_CODE.BadRequest,
                responseData: errMessage
            } as HttpResult;
        }
    }
}
```

Now let's add this guard to method addUser - 

```
@guards([ModelUserGuard])
@worker([HTTP_METHOD.Post])
@route("/")
async addUser() {
    const user: User = this.data.user;
    return jsonResult(this.service.addUser(user), HTTP_STATUS_CODE.Created);
}
```

In the above code - 
* I have added the guard - "ModelUserGuard" using the decorator - `guards` . 
* With the guard in process, we dont need to parse the data from body anymore, we are reading it from `this.data` which we are passing from "ModelUserGuard" .

You can see that our worker method looks very light after using component.

### Updating user

For adding user - we need to create a method which will only work for http method PUT. Add the below code inside usercontroller  -

```
@worker([HTTP_METHOD.Put])
@guards([ModelUserGuard])
@route("/")
async updateUser() {

    const user: User = this.data.user;
    const userUpdated = this.service.updateUser(user);
    if (userUpdated === true) {
        return textResult("user updated");
    }
    else {
        return textResult("invalid user");
    }

}
```

You can see, we have reutilized the guard - "ModelUserGuard" here and it makes our code beautiful and light.

### Get user

For getting a single user - we need to send the user id in the request. Let's understand the below code -

```
@worker([HTTP_METHOD.Get])
@route("/{id}")
async getUser() {

    const userId = Number(this.params.id);
    const user = this.service.getUser(userId);
    if (user == null) {
        return textResult("invalid id");
    }
    return jsonResult(user);

}
```

In the above code - we are using a place holder in route. Now "getUser" will be called when url will be something like - localhost:4000/user/1

The placeholder value can be consumed from `this.params`.

### Remove User

We will use the same format as get - 

```
@worker([HTTP_METHOD.Delete])
@route("/{id}")
async removeUser() {

    const userId = Number(this.params.id);
    const user = this.service.getUser(userId);
    if (user != null) {
        this.service.removeUser(userId);
        return textResult("user deleted");
    }
    else {
        return textResult("invalid user");
    }

}
```

Finally, we have successfully created a rest end point.


