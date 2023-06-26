---
sidebar_position: 3
title: "Worker"
keywords: "worker, route, controller method, fortjs, node"
description: "Description about worker in fortjs"
---

# Worker

Worker is a class method which acts as end point. It does particular task and return the final result. 

> For simpler understanding - Consider worker is a person who does a particular task and return the result.

A worker method -

* must be async or return a promise (since async is built on top of promises).
* The result returned by worker method must be promise of type [HttpResult](/docs/types/http-result.md) or [HttpFormatResult](/docs/types/http-format-result.md).

Since a worker is part of controller, it have the access to all the things which a controller has i.e - 

* Request - `this.request`
* Response - `this.response`
* Cookie - `this.cookies`
* Session - `this.session`
* Query string data - `this.query`
* Post data - `this.post`
* Route parameter -  `this.param`
* Data from other components -  `this.data`

## Creating worker

Worker is created by using decorator - `worker` or `defaultWorker`.

### Example

```javascript
import { Controller, worker, defaultWorker, textResult } from "fortjs";

export class UserController extends Controller {
   
    @defaultWorker()
    async default () {
       return textResult("This is default worker for section user");
    }

    @worker()
    async getUser() {
        return textResult("This is a worker for section user");
    }

}
```

Lets consider that controller - 'UserController' is associated with path '/user' and our domain is abc.com.

So what these decorators - `worker` and `defaultWorker` do ?

* **worker** - method is added to route with all http methods (GET,POST etc) and route is '/${method_name}'. For our example - route will be : '/getuser'.

* **defaultWorker** - method having decorator defaultWorker is added to route with one http method GET. And the route is '/'.

So in the above example, when url will be - 

* abc.com/user - method `default` will be called.
* abc.com/user/getuser - method `getUser` will be called.

## default worker implementation

A method can be declared as default worker by using decorators - `worker` & `route`.

Lets update the example -

```javascript
import { Controller, worker, textResult, HTTP_METHOD, route } from "fortjs";

export class UserController extends Controller {
    
   // @defaultWorker()
    @worker(HTTP_METHOD.Get)
    @route("/")
    async default () {
       return textResult("This is default worker for section user");
    }
}
```

A [route](/docs/route.md) allows you to customize the path of worker or end point.