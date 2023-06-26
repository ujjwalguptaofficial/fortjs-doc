---
sidebar_position: 8
title: "Authentication"
keywords: [authentication, example, tutorial, fortjs, node]
description: "How to authenticate in nodejs using fortjs"
---
 
# Authentication

There are multiple ways in which we can authenticate. In this doc guide - we will learn how to do session authentication based on userid/password combination.

Consider this scenario - A registered user has userid and password. They can access the system once they have entered valid credential. We need to design a login page through which user can login.

Let's consider that our app has a default controller and it can be accessed by anyone without login. Basically it contains a home page, a login page, a registration page etc.

```
export class DefaultController extends Controller {

    @defaultWorker()
    async default() {
        const result = await viewResult('controller:default,action:default');
        return result;
    }

    @worker(HTTP_METHOD.Get)
    @route("/login")
    async getloginForm() {
        const result = viewResult("login_form");
        return result;
    } 

    @worker(HTTP_METHOD.Post)
    async login() {
        const {emailId, password} = this.body;

        if (emailId != null && pwd != null) {
            const userService = new UserService();
            const user = userService.getUserByEmail(emailId);

            if (user != null && user.password === pwd) {
                this.session.set('userId', user.id);
                this.session.set('emailId', emailId);
                return textResult(`Authenticated`);
            }
            else {
               return textResult("Invalid credential");
            }
        }
        else {
            return textResult("Please make sure, you are sending emailId and password");
        }
    }
}
```

In the above code - we have three worker.

* **default** - is used to show the home page
* **getloginForm** - is used to show the login form when request is "GET"
* **login** - is  used to login into the sytem through POST request. This method retrieve emailId and password from body and check whether emailId/password is correct. If data correct - then it creates the session. When session is created, framework creates a cookie and sent to browser. Framework tracks user by cookie. 

Once the session has been set for a user. It can be accessed anywhere in the system (any controller/worker) using - `this.session.get('userId')`  or `this.session.isExist('userId')`

In order to not allow unauthenticated user to access restricted method : we can check in every worker - If session is set or not and then take actions.

e.g - if session is present then fulfill the request otherwise redirect to login page or send a text response with http code 401.

But this is repeatative logic which we can extract into a common method and reuse this.

For this - Fortjs provides [component](/docs/components/components.md). We can use shield or guard - this completely depends upon requirement.

Let's consider - we want to restrict at controller level and for this we need to create a [shield](/docs/components/shield.md). 

Let's create our `Authentication Shield` and put our authentication logic inside it - 

```
import { Shield, textResult,  redirectResult } from "fortjs";
export class AuthenticationShield extends Shield {

    async protect() {
        
        const isExist = await this.session.isExist('userId');

        if (exist) { // user is authenticated so allow
            return null;

        } else { //user is not authenticated, so redirect to login page

            return redirectResult("/default/login");
        }
    }
}
```

Now we can add this shield to any controllers where we need to authorize. Let's add this into user controller - 

```
import { Controller, shields } from "fortjs";
import { AuthenticationShield } from "@/shields";

@shields(AuthenticationShield) 
export class UserController extends Controller {

}
```

Now our AuthenticationShield will protect the UserController from unauthorized access.

In similar way - you can create a [guard](/docs/components/guard.md) to restrict at worker level.

Here is example link for above guide - [Authentiction Example](https://github.com/ujjwalguptaofficial/fortjs/tree/master/example/authentication)



