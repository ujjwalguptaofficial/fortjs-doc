---
Title: "Guard"
Keywords: "guard, component, types, fortjs, node"
Description: "Description about guard component in fortjs"
---

Guard is security layer on top of Worker. It contols whether a request should be allowed to call the **Worker**.

The guard is useful for - 
* Validation of data. 
* Authentication at Worker level.
* Doing some task and passing it to worker. In this case - guard will be used as subordinate.

<br>
There can be multiple guards for a worker & they are called in respective order, when a request wants to access the particular worker.

A guard has following member - 

* Request - [request](/tutorial/http-request)
* Response - [response](/tutorial/http-response)
* Cookie - [cookie](/tutorial/cookie)
* Session - [session](/tutorial/session)
* Query string data - [query](/tutorial/query)
* Post data - [body](body)
* Route parameter -  [param](/tutorial/param)
* Data from other components - [data](/tutorial/data)

<br>
# Creating guard

<br>
Guard is a class which extends the class "Guard" from fortjs.


## Example

```
import { Guard, HttpResult, MIME_TYPE, HTTP_STATUS_CODE } from "fortjs";
import { validate } from "class-validator";
import { User } from "../../models/user";

export class ModelUserGuard extends Guard {
    async check() {
        const user: User = { // extracted the info from request body
            name: this.body.name,
            gender: this.body.gender,
            address: this.body.address,
            emailId: this.body.emailId
        }
        const errors = await validate(user);
        if (errors.length === 0) { // user is valid so allow to call the worker
            // returning null means - this guard allows request to pass
            return null;
        }
        else { // user is not valid, so block the call to worker
            return {
                contentType: MIME_TYPE.Text,
                statusCode: HTTP_STATUS_CODE.BadRequest,
                responseData: "Invalid Request"
            } as HttpResult;
        }
    }
}
```

Now you have defined the guard but in order to use this guard, you need to assign it to some worker.

```
import {
    Controller,
    Guards 
} from "fortjs";
import {
    ModelUserGuard
} from "location where guard is defined";


export class UserController extends Controller {
    @Guards([ModelUserGuard])
    addUser(){
        
    }
}
```

**Note:-** A guard can be assigned to multiple worker.