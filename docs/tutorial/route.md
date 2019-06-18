---
Title: "Route"
Keywords: "route, customize, options, fortjs, node"
---

There are two parts of route in fortjs - 

* Parent Route
* Child Route

<br>
Let's understand this by examples. Consider an url - "abc.com/user/add" and let's split it - 

* abc.com - domain of the website 
* user - parent route
* add - child route

<br>
Let's take another example - "abc.com/user/1/2/3" and split it again - 

* abc.com - domain of the website
* user - parent route
* 1 - child route
* 2 - child route
* 3 - child route 

<br>
Now you must have understood, how parent and child route is divided.

Let's see how the route is configured in fortjs - 

## Parent Route 

<br>
In order to create a parent route we must have a [controller](/tutorial/controller). This controller is mapped with a path.

e.g - Consider you have created a controller, let's say - "UserController".

You need to map Controller with a path. 

```
import { Fort } from "fortjs";
import { UserController } from "./controllers";

class App extends Fort {
    constructor() {
        super();
        // here we have mapped UserController with path "/user"
        this.routers = [{
            controller: UserController,
            path: "/user"
        }]
    }
}
```
In the above example we are mapping "UserContoller" with a path "/user" inside the "routers" member of App. Since UserController is mapped with "/user", so parent route is - "user".

**Note :-** If you have large no of controller (let's say more than 10), it is recommended to define routers in a file as array (you can also divide your routers into multiple files)and then import those inside class App. The motive of this note is to keep your routers clean.

<br>
## Child Route

<br>
Child route is mapped to a [Worker](/tutorial/worker) inside Controller.
e.g - 

**<u>Creating Child Route</u>**
<br><br>
Let's say we want to create the child route "add" - you need to create a method with the name "add" and add decoarator "Worker" above it . The decorator "Worker" add the method to route list -

```
import { Controller, Worker, textResult } from "fortjs";

export class UserController extends Controller {
    @Worker()
    async add () {
       return textResult("add is called");
    }
}
```

So, When url will be - "abc.com/user/add" then add method will be called.

<div class="top-border"><br></div>

**<u>Customizing route</u>**
<br><br>
By default route is name of method, but you can customize the route using decorator "Route". The "Route" decorator is used to customize the route in multiple ways -  

```
import { Controller, Worker, textResult, Route } from "fortjs";

export class UserController extends Controller {
    @Worker()
    @Route("/addCustom") // changing the route name
    async add () {
       return textResult("add is called");
    }
}
```

You can see in the code , we have used 'Route' decorator to override the route. So, now when url will be - "abc.com/user/addCustom" then add method will be called.

<div class="top-border"><br></div>

**<u>Filtering the worker based on http method</u>**
<br><br>

Currently with any of http methods (GET,POST, etc.) "add" method will be hit. But let's say you want to hit this only when http method is POST.

In this case - you need to provide desired http methods to worker. Let's see an example - 

```
import { Controller, Worker,textResult,HTTP_METHOD } from "fortjs";

export class UserController extends Controller {
    @Worker([HTTP_METHOD.POST]) // This method will be only hit when any of the http method specified in worker will match.
    async add () {
       return textResult("add is called");
    }
}
```
<div class="top-border"><br></div>

**<u>Single route & multiple http method</u>**
<br><br>

How about you want to create a route "add" which will hit different worker based on http methods. This pattern is highly used in rest api implementation . Let's see an example -

```
import { Controller, Worker, textResult,HTTP_METHOD, Route } from "fortjs";

export class UserController extends Controller {
    
    @Worker([HTTP_METHOD.GET])
    @Route("/add")
    async addWithGet() { // This will be called when method will be GET
       return textResult("add with method get is called");
    }

    @Worker([HTTP_METHOD.POST])
    @Route("/add")
    async addWithPost() { // This will be called when method will be POST
       return textResult("add with method post is called");
    }
}
```
<div class="top-border"><br></div>

**<u>Params in route</u>**
<br><br>
<b>1. Constant param : </b>
<br><br>
So far we have created a route - "abc.com/user/add". How about little more complex route - "abc.com/user/add/1". 

For this, we just need to modify our route.

```
import { Controller, Worker, textResult,HTTP_METHOD, Route } from "fortjs";

export class UserController extends Controller {
    
    @Worker()
    @Route("/add/1")
    async add () {
       return textResult("add is called");
    }
}
```
<b>2. Variable param :</b> <br><br>In the url - you can see "1" is the constant value but in real life - the place where 1 is present can be any value. 

e.g - "abc.com/user/add/2", "abc.com/user/add/hi", "abc.com/user/add/1000" etc.

Basically a part of the url is a variable which can hold any value.

You can declare a variable in a route by using `{}`. Let's see - 

```
import { Controller, Worker, textResult,HTTP_METHOD, Route } from "fortjs";

export class UserController extends Controller {
    
    @Worker()
    @Route("/add/{value}")
    async add () {
       const value = this.param.value; // placeholder values are present in 'param' member of the controller.
       return textResult("add is called");
    }
}
```

<b>3. Variable & Constant :</b> <br><br>How about a route where you want to return some file based on some extension. 

e.g - "abc.com/file/scripts/jquery.js" . In this example - "jquery" is variable value and ".js" is constant value

So here :

* parent route is - 'file'
* child route is - 'scripts/jquery.js'

```
import { Controller, Worker, textResult,HTTP_METHOD, Route } from "fortjs";

export class FileController extends Controller {
    
    @Worker()
    @Route("/scripts/{fileName}.js")
    async getScripts () {
       const value = this.param.value; // placeholder values are present in 'param' member of the controller.
       return textResult("add is called");
    }
}
```



