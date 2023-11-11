---
sidebar_position: 2
title: "Controller"
keywords: [controller, section, fortjs, node"]
description: "Description about controller in fortjs"
---

# Controller

A **Controller** is a class that contains methods also known as [worker](/docs/advanced/worker.md) serving as endpoints or routes. Think of it as a section where different resources and services are available.

For example, in a real-world application designed for a university, you might have sections like `StudentSection`, `TeacherSection`, `LibrarySection`, etc.

## Controller member

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

A **Controller** is a class that extends the `Controller` class from Fort.js.

### Example

```javascript
import { Controller } from "fortjs";

export class UserController extends Controller {
   
}
```

To make this controller active, you need to assign it to the routes of Fort. A controller is associated with a path.

```javascript
import { Fort } from "fortjs";
import { UserController } from "./controllers";

Fort.routes = [{
    controller: UserController,
    path: "/user"
}];
```

In the code, we are adding our controller to the `routes` array along with a path. The path is used to associate the controller with a top-level route.

For example, if your website is `abc.com`, when a user hits the URL "abc.com/user", the `UserController` will be executed.

**Note:** You must have a method inside the controller with an HTTP route to allow the execution of the controller.