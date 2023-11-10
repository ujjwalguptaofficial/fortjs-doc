---
sidebar_position: 4
title: "Route"
keywords: [Rest api route, route configuration, route handling, url mapping, Routing in fortjs]
description: "Explore the documentation for a specific route in Fort.js, including details on the associated controller route and HTTP route. Understand the purpose and usage of this route to efficiently handle incoming requests and enhance your Fort.js application."
---

# Route

In the context of web frameworks a **route** refers to a mapping between a URL pattern and a specific piece of code (usually a controller method) that should be executed when that URL is requested. Routes define how an application responds to different HTTP requests.

In Fort.js, a route consists of two parts:

- **Controller route:** The route associated with the class.
- **HTTP route:** The route associated with the method inside the class.

This distinction helps organize and structure the routing configuration in Fortjs.

## Rest API

Let's understand routing configuration by creating a **Rest API** : A User rest api

### Create controller

The first step is to create a controller and associate it with a controller route. Let's name it - `UserController`

```javascript
import { Controller,} from "fortjs";

export class UserController extends Controller {

}
```

The second step is to associate with it a path and add this to `Fort.routes` array -

```
import { Fort } from "fortjs";
import { UserController } from "@/controllers";

// here we have mapped UserController with path "/user"
Fort.routes = [{
    controller: UserController,
    path: "/user"
}]

await Fort.create();

```

Here we have used path "/user", which means - `UserController` will be executed when path "/user" will be called.


### Create Http Route 

HTTP routes in Fortjs serve as endpoints that are tightly linked with controller methods. When a specific endpoint is invoked, the corresponding method in the associated controller is executed. 

A special decorator `http` is used to -

1. define which **Http Method**` you want to support for your end point. 
2. path of your endpoint

now let's create some endpoints for our rest API.

#### Get

Let's define our first route to fetch all users. Our objective is to trigger the associated controller method when the URL is 'http://localhost:4000/user/all'.

```javascript
import { Controller, http, jsonResult} from "fortjs";

export class UserController extends Controller {

    // highlight-start
    @http.get("/all")
    fetchAllUsers(){
        const allUsers = [];
        return jsonResult(allUsers);
    }
    // highlight-end
}
```

In the code snippet, we've created a **UserController** with a method called **fetchAllUsers**. This method is linked to the path "/all" and HTTP method **GET** using the decorator `@http.get("/all")`. Therefore, it will be triggered when the URL is 'http://localhost:4000/user/all'

:::info

Wondering about the presence of '/user' in the route 'http://localhost:4000/user/all'? It's the controller route we configured in the controller section. This setup offers a neat structure for organizing related routes under the common path '/user'.

:::

**Note:** We won't delve into the details of the logic for fetching the user, as covering the logical part is beyond the scope of this documentation.

---

Now let's create an endpoint that will return the user by ID. Our objective is to trigger the method when the URL is 'http://localhost:4000/user/1', where 1 is the user's ID. This ID can vary, for example, the user ID can be 2, 3, 4, etc.

```javascript
import { Controller, http, jsonResult} from "fortjs";

export class UserController extends Controller {

    @http.get("/all")
    fetchAllUsers(){
        const allUsers = [];
        return jsonResult(allUsers);
    }

    // highlight-start
    @http.get("/{userId}")
    fetchUserById(){
        const userId = this.param.userId;
        const user = {};
        return jsonResult(user);
    }
    // highlight-end
}
```

In the above snippet, we have created a method fetchUserById. This method is linked to the path "/{userId}" and HTTP method GET using the decorator @http.get("/{userId}"). Therefore, it will be triggered when the URL is 'http://localhost:4000/user/1' or 'http://localhost:4000/user/2'.

This covers our GET route customization. Now let's learn about POST route.

#### POST

:::info
The POST HTTP method is used to submit or send data to the specified resource. When a client makes a POST request, the data is included in the body of the request. 
:::

Let's create an endpoint for creating a user. Our objective is to execute the 'createUser' method when the URL is 'http://localhost:4000/user' and the HTTP method is **POST**

```js
import { Controller, http, jsonResult} from "fortjs";

export class UserController extends Controller {

    @http.get("/all")
    fetchAllUsers(){
        const allUsers = [];
        return jsonResult(allUsers);
    }

    @http.get("/{userId}")
    fetchUserById(){
        const userId = this.param.userId;
        const user = {};
        return jsonResult(user);
    }

    // highlight-start
    @http.post("/")
    createUser(){
        const newUserData = this.body;
        return jsonResult(newUserData);
    }
    // highlight-end
}
```

In the above snippet, we have created a method createUser. This method is linked to the path "/" and HTTP method **POST** using the decorator @http.post("/"). Therefore, it will be triggered when the URL is 'http://localhost:4000/user' and HTTP method is **POST**

---

In addition to the examples mentioned earlier, you can utilize other HTTP methods as follows:

- Patch: `@http.patch`
- Put: `@http.put`
- Delete: `@http.delete`

Feel free to incorporate these methods into your routes as needed.

:::tip
🚀 Explore a Complete REST API Implementation Example 🚀

[Fort.js REST API Examples](https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/rest)

Feel free to dive into this comprehensive example to see how Fort.js can be used to build RESTful APIs.
:::

