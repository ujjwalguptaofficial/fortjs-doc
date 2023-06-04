---
sidebar_position: 2
Title: "Controller"
Keywords: "controller, section, fortjs, node"
Description: "Description about controller in fortjs"
---

A Controller is a class which contains methods to be used as end points.  You can consider it like a section or area where different resource & services are available.

e.g - A Fort may have sections - WeaponSection, LibrarySection, MeetingSection etc. 

Now consider a real world application created for university may have sections - StudentSection, TeacherSection, LibrarySection etc.

A controller has following members - 

* Request - [request](/tutorial/http-request)
* Response - [response](/tutorial/http-response)
* Cookie - [cookie](/tutorial/cookie)
* Session - [session](/tutorial/session)
* Query string data - [query](/tutorial/query)
* Post data - [body](/tutorial/body)
* Route parameter -  [param](/tutorial/param)
* Data from other components - [data](/tutorial/data)

<br/>
# Creating controller

<br/>
Controller is a class which extends the class "Controller" from fortjs.


## Example

```
import { Controller } from "fortjs";

export class UserController extends Controller {
   
}
```

In order to make this controller active, you need to assign it to routes of Fort. A controller is associated with a path.

```
import { Fort } from "fortjs";
import { UserController } from "./controllers";


Fort.routes = [{
    controller: UserController,
    path: "/user"
}]

```

In the code we are adding our controller into routes array along  with a path. The path is used to associate the controller with a top level route.

e.g - Consider your website is abc.com , so when user hits the url - "abc.com/user" then the controller - 'UserController' will be called. 

Note :- You must have [worker](/tutorial/worker) inside the controller otherwise it won't work.