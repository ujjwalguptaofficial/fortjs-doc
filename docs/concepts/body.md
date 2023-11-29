---
sidebar_position: 3
title: "Http Body"
keywords: [request body, post data, body, http body ,nodejs]
description: "Explore the HTTP body handling capabilities in Fort.js. Learn how to access and parse the request body in a Fort.js application."
---

# HTTP Body

The `body` is a class member of [Guard](/docs/component/guard.md) and [Controller](/docs/controller.md). It provides access to the HTTP body data sent in an HTTP request.

```javascript
import { Controller, worker, HTTP_METHOD, textResult } from "fortjs";

export class DefaultController extends Controller {

    @worker(HTTP_METHOD.Post)
    async login() {
        //highlight-start
        // Access post data
        const userId = this.body.userId;
        const password = this.body.password;
        //highlight-end

        return textResult("OK");
    }
}
```

In the example above, `this.body` is used to retrieve data from the HTTP body of a POST request in a Fort.js controller. Adjust the properties based on the structure of your incoming data.

## Body Parsing Configuration

By default, Fort.js parses the body data. However, you can turn off this feature by setting the option - `shouldParseBody`. Please refer to the [bootstrap](/docs/setup.md) documentation for more information.

```js
// In your bootstrap file
Fort.shouldParseBody = false;
```

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