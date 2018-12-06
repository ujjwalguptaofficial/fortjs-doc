---
Title: "Shield"
---

Shiled is security layer on top of Section. It controls whether a request should be allowed to enter inside the Section. It can also be used for doing some task before passing it to actions.

e.g - Consider a case - where a section "Admin" is only allowed if the request is authenticated. You can create a shield which will check for the conditions and if it does not satisfy the conditions, you can just reject it.

There can be multiple shield for a section & every section is called when a request wants to access the particular section.

A shiled have access to following - 

* Request - `this.request`
* Response - `this.response`
* Cookie - `this.cookies`
* Session - `this.session`
* Query string data - `this.query`
* Post data - `this.post`
* Route parameter -  `this.params`
* Data from other components -  `this.data`

<br>
# Creating shield

<br>
Shield is a class which extends the class "Shield" from fortjs.


## Example

```
import {
    Shield,
    textResult,
    redirectResult
} from "fortjs";
export class AuthenticationShield extends Shield {
    async protect() {
        try {
            const isExist = await this.session.isExist('userId');
            if (exist) { // user is authenticated so allow
                return null;
            } else { //user is not authenticated, so not allow
                return redirectResult("/default/login");
            }
        } catch (ex) {
            // log the error
            // return  some good message
            return textResult("Our Server is busy right now, we are sorry for inconvenience. Please try later.")
        }
    }
}
```

Now you have defined the shield but in order to use this shield, you need to assign it to some section.

```
import {
    Controller,
    shields,
    section
} from "fortjs";
import {
    AuthenticationShield
} from "location where shield is defined";

@shields([AuthenticationShield])
@section()
export class UserController extends Controller {

}
```

**Note:-** A shield can be assigned to multiple section.