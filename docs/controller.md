---
sidebar_position: 2
title: "Controller"
keywords: [controller, section, fortjs, node"]
description: "Description about controller in fortjs"
---

# Controller

A Controller is a class which contains methods to be used as end points or routes. You can consider it like a section where different resource and services are available.

e.g - A real world application created for university may have sections - StudentSection, TeacherSection, LibrarySection etc.

A controller has following members - 

* [Request](/docs/types/http-request.md)
* [Response](/docs/types/http-response.md)
* [Cookie](/docs/concepts/cookie.md)
* [Session](/docs/concepts/session.md)
* [Query data](/docs/concepts/query.md)
* [Body data](/docs/concepts/body.md)
* [Route parameter](/docs/concepts/param.md)
* [Data from other components](/docs/concepts/data.md)

## Creating controller

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

e.g - Consider your website is abc.com, when user hits the url - "abc.com/user" then the controller - 'UserController' will be executed. 

**Note:-** You must have method inside the controller with HTTP route to allow execution of controller.