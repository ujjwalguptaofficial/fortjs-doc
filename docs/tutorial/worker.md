---
Title: "Worker"
Keywords: "worker, route, controller method, fortjs, node"
Description: "Description about worker in fortjs"
---

Worker is a method which does particular task and return the final result. 

A worker method -

* must be async or return a promise (since async is built on top of promises).
* The result returned by worker method must be promise of type [HttpResult](/tutorial/http-result) or [HttpFormatResult](/tutorial/http-format-result).

<br>
Since a worker is part of controller, it have the access to all the things which a controller has i.e - 

* Request - `this.request`
* Response - `this.response`
* Cookie - `this.cookies`
* Session - `this.session`
* Query string data - `this.query`
* Post data - `this.post`
* Route parameter -  `this.params`
* Data from other components -  `this.data`

<br>
# Creating worker

<br>
Worker is created by using decorator - `Worker` or `DefaultWorker`.


## Example

```
import { Controller, Worker, DefaultWorker, textResult } from "fortjs";

export class UserController extends Controller {
   
    @DefaultWorker()
    async default () {
       return textResult("This is default worker for section user");
    }

    @Worker()
    async getUser() {
        return textResult("This is a worker for section user");
    }

}
```

Lets consider that controller - 'UserController' is associated with path '/user' and our domain is abc.com.

So what these decorators - `Worker` and `DefaultWorker` do ?

* **Worker** - method having decorator Worker is added to route with all http methods (GET,POST etc).And the route is '/${method_name}'. For our example - route will be : '/getuser'.

* **DefaultWorker** - method having decorator DefaultWorker is added to route with one http method GET. And the route is '/'.

<br>
So in the above example, when url will be - 

* abc.com/user - method default will be called.
* abc.com/user/:getuser - method getuser will be called.

<br>
## How to declare a method as default worker without using decorator - defaultWorker

<br>
A method can be declared as default worker by using decorators - `Worker` & `Route`.

Lets update the example -

```
import { Controller, Worker, textResult, HTTP_METHOD, Route } from "fortjs";

export class UserController extends Controller {
    
   // @defaultWorker()
    @Worker([HTTP_METHOD.Get])
    @Route("/")
    async default () {
       return textResult("This is default worker for section user");
    }
}
```
