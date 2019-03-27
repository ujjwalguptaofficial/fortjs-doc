---
Title: "Authentication"
---
 
There are multiple ways in which we can authenticate. But we will learn how to do session authentication based on userid/password combination.

So the concept is simple - a registered user has userid and password and they can access the system once they have entered valid credential. We need to design a login page through which user can login.

let's consider that our app has a default controller and it can be accessed by anyone without login. Basically it contains a home page, a login page, a registration page etc.

```
export class DefaultController extends Controller {
    @DefaultWorker()
    async default() {
        try {
            const result = await viewResult('controller:default,action:default');
            return result;
        } catch (ex) {
            console.log(ex);
            // handle exception and show user a good message.
            const result = await textResult(`Our server is busy right now. Please try later.`);
            return result;
        }
    }

    @Worker([HTTP_METHOD.Get])
    @Route("/login")
    async getloginForm() {
        const result = viewResult("login_form");
        return result;
    } 

    @Worker([HTTP_METHOD.Post])
    async login() {
        const emailId = this.body.emailId;
        const pwd = this.body.password;
        if (emailId != null && pwd != null) {
            const userService = new UserService();
            const user = userService.getUserByEmail(emailId);
            if (user != null && user.password === pwd) {
                this.session.set('userId', user.id);
                this.session.set('emailId', emailId);
                return textResult(`Authenticated`);
            }
            else {
                const result = textResult("Invalid credential");
                return result;
            }
        }
        else {
            const result = textResult("Please make sure, you are sending emailId and password");
            return result;
        }
    }
}
```

You can see - we have three worker.

* **default** - is used to show the home page
* **getloginForm** - is used to show the login form when request is "GET"
* **login** - is  used to login into the sytem through POST request.This method retrieve emailId and password from post and check whether emailId/password is correct. And if correct - it creates the session.

Once the session has been set for a user. It can be accessed anywhere in the system (any controller/worker) using - `this.session.get('userId')`  or `this.session.isExist('userId')`

In order to not allow unauthenticated user to access restricted method : we can check in every worker - If session is set or not and then based on that take actions.

e.g - if session is present then fulfill the request otherwise redirect to login page or send a text response with http code 401.

We can take the above concept and divide into [component](/tutorial/components). So that we dont need to write in every method. We can use shield or guard - this completely depends upon application.

Let's consider that we want to restrict at controller level and for this we need to create a [shield](/tutorial/shield) - 

```
import { Shield, textResult,  redirectResult } from "fortjs";
export class AuthenticationShield extends Shield {
    async protect() {
        try {
            const isExist = await this.session.isExist('userId');
            if (exist) { // user is authenticated so allow
                return null;
            } else { //user is not authenticated, so redirect to login page
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

Now we can add shield to any controllers where we need to restrict. Let's add this into user controller - 

```
import { Controller, Shields } from "fortjs";
import { AuthenticationShield } from "location where shield is defined";

@Shields([AuthenticationShield]) 
export class UserController extends Controller {

}
```

In the similar way - you can create a [guard](/tutorial/guard) to restrict at worker level.

