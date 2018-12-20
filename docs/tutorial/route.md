---
Title: "Route"
---

There are two parts of route in fortjs - 

* Parent Route
* Child Route

<br>
e.g - Consider an url - "abc.com/user/add" and let's split it - 

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

Let's see how this route is configured in fortjs - 

## Parent Route 

<br>
In order to create a parent route we must have a [controller](controller). This controller is mapped with a path.

e.g - Consider you have created a controller, let's say - "UserController".

Now you need to map this with a path - 

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

**Note :-** If you have large no of controller (let's say more than 10), it is recommended to define routers in a file as array (you can also divide your routers into multiple files)and then import those inside class App. The motive of this note is to keep your routers clean.

<br>
## Child Route

<br>
Child route is nothing but a [Worker](worker) inside a Controller.
e.g - 

Since UserController is mapped with "/user", so parent route is - "user". Now let's say we want to create the child route - "add".

```
import { Controller, worker, textResult } from "fortjs";

export class UserController extends Controller {
    @worker()
    async add () {
       return textResult("add is called");
    }
}
```

When url will be - "abc.com/user/add" then add method will be called.

Here you can see method name is used to create the child route. But you can change the route name manually also. Let's see how ?

```
import { Controller, worker, textResult, route } from "fortjs";

export class UserController extends Controller {
    @worker()
    @route("/add")
    async add () {
       return textResult("add is called");
    }
}
```

You can see in the code , we have used 'route' decorator to override the route.

Currently with any of http methods (GET,POST, etc.) add method will be hit. But let's say you want to hit this only when http method is POST.

In this case - you need to provide desired http methods to worker. Let's see an example - 

```
import { Controller, worker,textResult,HTTP_METHOD } from "fortjs";

export class UserController extends Controller {
    @worker([HTTP_METHOD.POST]) // This method will be only hit when any of the http method specified in worker will match.
    async add () {
       return textResult("add is called");
    }
}
```

How about you want to create a route "add" which will hit different methods based on http methods.

```
import { Controller, worker, textResult,HTTP_METHOD, route } from "fortjs";

export class UserController extends Controller {
    
    @worker([HTTP_METHOD.GET])
    @route("/add")
    async addWithGet() { // This will be called when method will be GET
       return textResult("add with method get is called");
    }

    @worker([HTTP_METHOD.POST])
    @route("/add")
    async addWithPost() { // This will be called when method will be POST
       return textResult("add with method post is called");
    }
}
```

So far we have created a route - "abc.com/user/add". How about little more complex route - "abc.com/user/add/1". 

For this, we just need to modify our route.

```
import { Controller, worker, textResult,HTTP_METHOD, route } from "fortjs";

export class UserController extends Controller {
    
    @worker()
    @route("/add/1")
    async add () {
       return textResult("add is called");
    }
}
```

In the url - you can see "1" is the constant value but in real life - the place where 1 is present can be any value. 

e.g - "abc.com/user/add/2", "abc.com/user/add/hi", "abc.com/user/add/1000" etc.

Basically a part of the url is like a placeholder where different values are being placed.

So now the question should be how to create a placeholder in a route. Let's see - 

```
import { Controller, worker, textResult,HTTP_METHOD, route } from "fortjs";

export class UserController extends Controller {
    
    @worker()
    @route("/add/{value}")
    async add () {
       const value = this.params.value; // placeholder values are present in 'params' member of the controller.
       return textResult("add is called");
    }
}
```

I promise - this will be last. How about a route where you want to return some file based on some extension. 

e.g - "abc.com/file/scripts/jquery.js" . In this example - "jquery" is dynmaic value means value can be anything like - "jsstore", "vue" , "underscore" etc. So that place is basically a placeholder.

So here :

* parent route is - 'file'
* child route is - 'scripts/jquery.js'

```
import { Controller, worker, textResult,HTTP_METHOD, route } from "fortjs";

export class FileController extends Controller {
    
    @worker()
    @route("/scripts/{fileName}.js")
    async getScripts () {
       const value = this.params.value; // placeholder values are present in 'params' member of the controller.
       return textResult("add is called");
    }
}
```