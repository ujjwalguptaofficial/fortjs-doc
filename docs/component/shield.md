---
sidebar_position: 2
title: "Shield"
keywords: [shield, component, modular, fortjs, node]
description: "Description about Shield component & how to use"
---

# Shield

Shield is security layer on top of Controller. It controls whether a request should be allowed to enter inside the Controller or not. 

It can be used for -

* Doing some task before passing it to Controller
* Authentication on controller level

e.g - Consider a case - where a controller "Admin" is only allowed if the request is authenticated. You can create a shield which will check for the conditions and if it does not satisfy the conditions, you can just reject it.

There can be multiple shield for a controller & every shield is called in the same order as they are defined.

A shield has following member - 

* [Request](/docs/types/http-request.md)
* [Response](/docs/types/http-response.md)
* [Cookie](/docs/concepts/cookie.md)
* [Session](/docs/concepts/session.md)
* [Query data](/docs/concepts/query.md)
* [Data from other components](/docs/concepts/data.md)
* Target Worker Name

## Creating shield

Shield is a class which extends the class `Shield` from fortjs. It has `protect` method as lifecycle of Shield. 

The `protect` method can perform any task such as validation etc and return the result. The method can return two types of data - 

1. **null** - It means shield has passed the request.
2. **Http response** - It means shield has rejected the request. The http resonse is directly returned to the user.


### Example

```javascript
import { Shield, textResult } from "fortjs";

export class AuthenticationShield extends Shield {
    async protect() {
         
        const isExist = await this.session.isExist('userId');

        if (exist) { // user is authenticated so allow
            return null;

        } else { //user is not authenticated, so not allow
    
            return textResult("Requires authentication", HTTP_STATUS_CODE.BadRequest);
        }

    }
}
```

Now let's use this shield to some controller.

```javascript
import { Controller, shields } from "fortjs";
import { AuthenticationShield } from "location where shield is defined";

@shields(AuthenticationShield) 
export class UserController extends Controller {

}
```

## Summary

* A shield allows you to execute logic before accessing to controller.
* It can be used for controller level task like authentication etc.
* A shield can be assigned to multiple controller. e.g - A generic autherization shield can be placed on all controller where authentication is required.