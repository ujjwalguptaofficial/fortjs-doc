---
Title: "Controller"
---

Controller is like a section where a list of resource of particular types are available.

e.g - A Fort may have sections - WeaponSection, LibrarySection, MeetingSection etc. Now consider a real world application created for university may have sections - StudentSection, TeacherSection, LibrarySection etc.

A controller have access to following - 

* Request - `this.request`
* Response - `this.response`
* Cookie - `this.cookies`
* Session - `this.session`
* Query string data - `this.query`
* Post data - `this.post`
* Route parameter -  `this.params`
* Data from other components -  `this.data`

<br>
# Creating controller

<br>
Controller is a class which extends the class "Controller" from fortjs.


## Example

```
import { Controller } from "fortjs";

export class UserController extends Controller {
   
}
```

Now you have created the controller but in order to use this, you need to assign it to routes where you have [bootstrapped](bootstrap) your app.

```
import { Fort } from "fortjs";
import { UserController } from "./controllers";

class App extends Fort {
    constructor() {
        super();
        this.routers = [{
            controller: UserController,
            path: "/user"
        }]
    }
}
```

In the code we are adding our controller into routers list along  with a path. The path is used to associate the controller with a top level route.

e.g - Consider your website is abc.com , so when user hits the url - "abc.com/user" then the controller - 'UserController' will be called. 

Note :- You must have [worker](worker) inside the controller otherwise it wont work.