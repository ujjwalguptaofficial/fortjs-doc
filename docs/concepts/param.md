---
title: "Param"
keywords: [param, route, url param, fortjs, node]
description: "parameterizing route in fortjs"
---

# param

you can use `param` to extract route data for variable routing. It is class member of Guard and Controller. 

e.g - consider the route - "abc.com/{value}/hi" . Here value is a variable and this can be extracted using param. 

```javascript
export class FileController extends Controller {
   
    @route("/scripts/{file}.js")
    @worker()
    async getScripts() {
        const fileName = this.param.file;
    }
}
```

For more info about routing, please check the [route](/docs/route.md) doc.

## Inject Path Parameters

You can inject path parameters into components or controller methods for easy access to values specified in the URL path.

To achieve this, use the `@asParam` decorator.

```javascript
import { Controller, http, textResult, asParam } from "fortjs";

export class UserController extends Controller {

    @http.get("/user/:userId")
    async getUserById(@asParam() params) {
        // The 'params' object contains all path parameters
        const userId = params.userId;
        console.log(userId);

        // Your logic for processing user information based on the user ID
        // ...

        return textResult(`User information for ID ${userId} retrieved successfully`);
    }
}
```

In this corrected example, the `@asParam()` decorator without any arguments injects the entire `params` object. You can then access specific path parameters using their names as properties of the `params` object, such as `params.userId` in this case.