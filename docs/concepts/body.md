---
title: "Body"
keywords: [request, post, body, fortjs, node]
description: "fortjs body member details"
---

# Body

`body` is class member of [Guard](/docs/component/guard.md) and [Controller](/docs/controller.md). It is used to access body data sent in http post request. 

```javascript
import { Controller, worker, HTTP_METHOD,  textResult } from "fortjs";

export class DefaultController extends Controller {

    @worker(HTTP_METHOD.Post)
    async login() {
        // access post data
        const userId = this.body.userId;
        const pwd = this.body.password;

        return textResult("OK")
    }
}
```

By default fortjs parses the body data. But it can be turned off by setting option - `shouldParsePost` . Please check [bootstrap](/docs/setup.md) doc for more info.

Certainly! Here's the prettified version:

## Inject Body Data

You can inject body data into components or controller methods for easy access to HTTP request body data.

To achieve this, use the `@asBody` decorator.

```javascript
import { Controller, http, textResult, asBody } from "fortjs";

export class UserController extends Controller {

    @http.post("/create")
    //highlight-next-line
    async createUser(@asBody user) {
        // The 'user' parameter now contains the data from the HTTP request body
        console.log(user);

        // Your logic for creating a user
        // ...

        return textResult("User created successfully");
    }
}
```

In this example, the `@asBody()` decorator is used on the `user` parameter of the `createUser` method. This automatically injects the data from the HTTP request body into the `user` parameter. You can then use this data within your method to perform the desired logic, such as creating a user in this case.

Please ensure that the structure of the `user` object aligns with the expected format and content of the data sent in the HTTP request body.

:::tip
In typescript: you can assign a type to user variable. For example -

```js
import { UserDTO } from "@/models";
async createUser(@asBody user: UserDTO) {
    
}
```
:::