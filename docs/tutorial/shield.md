---
Title: "Shield"
---

Shiled is security layer on top of Section (Controller). It controls whether a request should be allowed to enter inside the Section. It can also be used for doing some task before passing it to workers.

e.g - Consider a case - where a controller "Admin" is only allowed if the request is authenticated. You can create a shield which will check for the conditions and if it does not satisfy the conditions, you can just reject it.

There can be multiple shield for a controller & every shield is called when a request wants to access the particular controller.

A shiled has following member - 

* Request - [request](/tutorial/http-request)
* Response - [response](/tutorial/http-response)
* Cookie - [cookie](/tutorial/cookie)
* Session - [session](/tutorial/session)
* Query string data - [query](/tutorial/query)
* Data from other components - [data](/tutorial/data)

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

Now you have defined the shield but in order to use this shield, you need to assign it to some controller.

```
import {
    Controller,
    Shields 
} from "fortjs";
import {
    AuthenticationShield
} from "location where shield is defined";

@Shields([AuthenticationShield]) 
export class UserController extends Controller {

}
```

**Note:-** A shield can be assigned to multiple controller.