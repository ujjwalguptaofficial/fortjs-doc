---
sidebar_position: 4
title: "Route"
keywords: "route, customize, options, fortjs, node"
description: "Different types of route and how to customize them in fortjs"
---

# Route

A route is basically a path. It is mapped with Controller and will target a Controller method.

So route in fortjs has two parts - 

* Controller - A class
* Worker - A method inside that class

## Example

Consider an url - "abc.com/user/add" and let's split it - 

* abc.com - domain of the website 
* /user - controller route
* /add - worker route
 
---

Let's take another example - "abc.com/user/1/2/3" and split it again - 

* abc.com - domain of the website
* /user - controller route
* /1/2/3 - worker route

but you can also make some part of worker route as controller depends upon the requirement

e.g - The above route can be also breaked as - 

* abc.com - domain of the website
* /user/1 - controller route
* /2/3 - worker route

## Configure route

Let's see how the route is configured in fortjs - 

### Controller Route 

In order to create a controller route we must have a [controller](/docs/controller.md). This controller is mapped with a path.

e.g - Consider you have created a controller - "UserController"

You need to map Controller with a path. 

```
import { Fort } from "fortjs";
import { UserController } from "@/controllers";

// here we have mapped UserController with path "/user"
Fort.routes = [{
    controller: UserController,
    path: "/user"
}]

Fort.create();

```
In the above example we are mapping "UserContoller" with a path "/user" inside the `routes` member of App.

### Worker Route

Worker route is mapped to a [Worker](/docs/worker.md) inside Controller.

Let's say we want to create the worker route "add" - you need to create a method with the name "add" and add decoarator "worker" above it . The decorator worker treats method name as route and add to route list -

```javascript
import { Controller, worker, textResult } from "fortjs";

export class UserController extends Controller {

    @worker()
    async add () {
       return textResult("add is called");
    }
}
```

So, When url will be - "abc.com/user/add" then add method will be called.

#### Customizing route

We can customize the worker route by using decorator "route".

```javascript
import { Controller, worker, textResult, route } from "fortjs";

export class UserController extends Controller {

    @worker()
    @route("/addCustom") // changing the route name
    async add () {
       return textResult("add is called");
    }
}
```

You can see in the code , we have used 'route' decorator to override the route. So, now when url will be - "abc.com/user/addCustom" then add method will be called.

##### Restricting the worker based on http method

Currently with any of http methods (GET,POST, etc.) "add" method will be hit. But let's say you want to hit this only when http method is POST.

In this case - you need to provide desired http methods to worker. Let's see an example - 

```
import { Controller, worker,textResult,HTTP_METHOD } from "fortjs";

export class UserController extends Controller {

    @worker(HTTP_METHOD.POST) // This method will be only hit when any of the http method specified in worker will match.
    async add () {
       return textResult("add is called");
    }
}
```

##### Single route & multiple http method

How about you want to create a route "add" which will hit different worker based on http methods. This pattern is highly used in rest api implementation . 

Let's see an example -

```
import { Controller, worker, textResult, HTTP_METHOD, route } from "fortjs";

export class UserController extends Controller {
    
    @worker(HTTP_METHOD.GET)
    @route("/add")
    async addWithGet() { // This will be called when method will be GET
       return textResult("add with method get is called");
    }

    @worker(HTTP_METHOD.POST)
    @route("/add")
    async addWithPost() { // This will be called when method will be POST
       return textResult("add with method post is called");
    }
}
```

##### Params in route

**1. Constant param : **

So far we have created a route - "abc.com/user/add". How about little more complex route - "abc.com/user/add/1". 

For this, we just need to modify our route.

```javascript
import { Controller, worker, textResult, HTTP_METHOD, route } from "fortjs";

export class UserController extends Controller {
    
    @worker()
    @route("/add/1")
    async add () {
       return textResult("add is called");
    }
}
```
**2. Variable param :**

In the url - you can see "1" is the constant value but for certain requirements - the place where 1 is present can be any value. 

e.g - "abc.com/user/add/2", "abc.com/user/add/hi", "abc.com/user/add/1000" etc.

Basically a part of the url is a variable which can hold any value.

You can declare a variable in a route by using `{}`.

```javascript
import { Controller, worker, textResult,HTTP_METHOD, route } from "fortjs";

export class UserController extends Controller {
    
    @worker()
    @route("/add/{value}")
    async add () {
       const value = this.param.value; // variable values are present in 'param' member of the controller.
       return textResult("add is called");
    }
}
```

**3. Variable & Constant :** 

How about a route where you want to return some file based on some extension. 

e.g - "abc.com/file/scripts/jquery.js" . In this example - "jquery" is variable value and ".js" is constant value

So here :

* controller route is - 'file'
* worker route is - 'scripts/jquery.js'

```javascript
import { Controller, worker, textResult,HTTP_METHOD, route } from "fortjs";

export class FileController extends Controller {
    
    @worker()
    @route("/scripts/{fileName}.js")
    async getScripts () {
       const fileName = this.param.fileName; 

       return textResult(`fileName is ${fileName}");
    }
}
```



