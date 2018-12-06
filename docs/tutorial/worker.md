---
Title: "Worker"
---

Worker is a method which does particular task and return the final result. 

A worker method -

* must be async or return a promise (since async is built on top of promises).
* The result retruned by worker method must be of type [HttpResult](http-result).

FortJs provides some helper method which return result of type HttpResult. These are - 

* textResult - used to return text result.
* jsonResult - used to return json result.
* htmlResult - used to return html result.
* viewResult - used to return a view.
* fileResult - used to return a file which will be rendered by browser.
* downloadResult - used to return a file which will be downloaded by browser.
* redirectResult - used to return a result which will tell browser to redirect url.

<br>
Since a worker is part of controller, it have the access to all the things which a controller have i.e - 

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
Worker is created by using decorator - `worker` or `defaultWorker`.


## Example

```
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

* **worker** - method having decorator worker is added to route with all http methods (GET,POST etc).And the route is '/${method_name}'. For our example - route will be : '/getuser'.
* **defaultWorker** - method having decorator defaultWorker is added to route with one http method GET. And the route is '/'.

<br>
So when url will be - 
* abc.com/user - method default will be called.
* abc.com/getuser - method getuser will be called.

<br>
## How to declare a method as default worker without using decorator - defaultWorker

<br>
A method can be declared as default worker by using decorators - `worker` & `route`.

Lets update the example -

```
import { Controller, worker, textResult, HTTP_METHOD, route } from "fortjs";

export class UserController extends Controller {
    
   // @defaultWorker()
    @worker([HTTP_METHOD.Get])
    @route("/")
    async default () {
       return textResult("This is default worker for section user");
    }
}
```
