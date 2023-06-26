---
title: "Guard"
keywords: [guard, component, types, fortjs, node]
description: "Guard is security layer on top of Worker"
---

# Guard

Guard is security layer on top of Worker which means it is called after controller is initiated. It contols whether a request should be allowed to call the **Worker**.

The guard is useful for - 
* Validation of data. 
* Authentication at Worker level.
* Doing some task and passing it to worker. In this case - guard will be used as subordinate.

<br/>
There can be multiple guards for a worker and they are called in same order as declared.

A guard has following member - 

* [Request](/docs/types/http-request.md)
* [Response](/docs/types/http-response.md)
* [Cookie](/docs/concepts/cookie.md)
* [Session](/docs/concepts/session.md)
* [Query data](/docs/concepts/query.md)
* [Body data](/docs/concepts/body.md)
* [Route parameter](/docs/concepts/param.md)
* [Data from other components](/docs/concepts/data.md)

## Creating guard

Guard is a class which extends the class "Guard" from fortjs. It has `check` method as lifecycle of Guard. 

The `check` method can perform any task such as validation etc and return the result. The method can return two types of data - 

1. **null** - It means guard has passed the request.
2. **Http response** - It means guard has rejected the request. The http resonse is directly returned to the user.

### Example

Let's create a Guard which validates a user object. It passes if the user is valid and rejects if not.


```javascript
import { Guard, HttpResult, MIME_TYPE, HTTP_STATUS_CODE } from "fortjs";
import {isEmail, isLength, isIn} from "validator";

export class ValidUserGuard extends Guard {

    async check() {
        const user = { // extracted the info from request body
            name: this.body.name,
            gender: this.body.gender,
            address: this.body.address,
            emailId: this.body.emailId
        };

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

Now let's use this guard on some worker -

```
import { Controller, guards } from "fortjs";
import { ValidUserGuard } from "@/guards";


export class UserController extends Controller {

    @guards(ValidUserGuard)
    addUser(){
        const user = this.data.user ;
    }
    
}
```
### Summary

* A guard allows you to extract reusable logic like validation, authentication etc 
* A guard can be independently used by multiple workers
* A guard makes your code much clean
* A guard can be independently unit tested
