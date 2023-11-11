---
sidebar_position: 3
title: "Guard"
keywords: [guard, component, types, fortjs, node]
description: "Guard is security layer on top of Worker"
---

# Guard

A **Guard** is a security layer on top of a Worker in Fort.js, meaning it is called after the controller is initiated. It controls whether a request should be allowed to call the controller methods or worker.

## Use Cases

- Data validation at the method level.
- Authentication at the controller method level.
- Performing tasks and passing them to the Worker.

## Multiple Guards

Multiple guards can be assigned to a Worker, and they are called in the same order as declared.

## Guard members

A guard has following member - 

* [Request](/docs/types/http-request.md)
* [Response](/docs/types/http-response.md)
* [Cookie](/docs/concepts/cookie.md)
* [Session](/docs/concepts/session.md)
* [Query data](/docs/concepts/query.md)
* [Body data](/docs/concepts/body.md)
* [Route parameter](/docs/concepts/param.md)
* [Data from other components](/docs/concepts/data.md)

## Creating a Guard

A **Guard** is a class that extends the `Guard` class from Fort.js. It has a `check` method as its lifecycle.

### Lifecycle Method

The `check` method can perform various tasks, such as validation, and return the result. It can return two types of data:

1. **null** - It means the guard has passed the request.
2. **HTTP response** - It means the guard has rejected the request. The HTTP response is directly returned to the user.

Explore the powerful capabilities of Guards by implementing them in your Fort.js application.

### Example

Let's create a Guard that validates user data sent in the HTTP body. It will allow the request to proceed if the user is valid and reject it otherwise.


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

            return null; // Guard allows the request to pass

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

Now you can use this guard on any controller method:

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

This guard will validate the user data before allowing the request to proceed to the addUser method in the UserController.

## Summary

* Guards enable the extraction of reusable logic such as validation and authentication.
* Guards can be independently used by multiple controller methods, enhancing code reusability.
* The use of guards contributes to cleaner code structures.
* Guards can be independently unit-tested, ensuring reliability in isolation.
