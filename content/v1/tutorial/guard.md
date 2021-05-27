---
Title: "Guard"
Keywords: "guard, component, types, fortjs, node"
Description: "Description about guard component in fortjs"
---

Guard is security layer on top of Worker which means it is called after controller is initiated. It contols whether a request should be allowed to call the **Worker**.

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
import {isEmail, isLength, isIn} from "validator";

export class ModelUserGuard extends Guard {

    async check() {
        const user = { // extracted the info from request body
            name: this.body.name,
            gender: this.body.gender,
            address: this.body.address,
            emailId: this.body.emailId
        }
        const errMsg = this.validate(user);
        if (errMsg == null) {
            // pass user to worker method, so that they dont need to parse again
            this.data.user = user;
            // returning null means - this guard allows request to pass
            return null;
        } else {
            return textResult(errMsg, HTTP_STATUS_CODE.BadRequest);
        }
    }

    validate(user) {
        let errMessage;
        if (user.name == null || !isLength(user.name, 5)) {
            errMessage = "name should be minimum 5 characters"
        } else if (user.password == null || !isLength(user.password, 5)) {
            errMessage = "password should be minimum 5 characters";
        } else if (user.gender == null || !isIn(user.gender, ["male", "female"])) {
            errMessage = "gender should be either male or female";
        } else if (user.gender == null || !isEmail(user.emailId)) {
            errMessage = "email not valid";
        } else if (user.address == null || !isLength(user.address, 10, 100)) {
            errMessage = "address length should be between 10 & 100";
        }
        return errMessage;
    }
}
```

Now you have defined the guard but in order to use this guard, you need to assign it to some worker.

```
import { Controller, Guards } from "fortjs";
import { ModelUserGuard } from "location where guard is defined";


export class UserController extends Controller {
    @Guards([ModelUserGuard])
    addUser(){
        
    }
}
```

**Note:-** A guard can be assigned to multiple worker.

