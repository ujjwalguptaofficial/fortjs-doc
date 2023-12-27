---
sidebar_position: 1
title: "Query"
keywords: [query string, http query, get request, fortjs, node]
description: "Accessing query string value in fortjs"
---

# query

`query` can be used to get the query string value. It is class member of  Wall, Guard, Shield and Controller.

e.g - Conside the url - abc.com/?userid=5&name=ujjwal

There are two variables in query string - `userid` and `name` . We can use `query` to access those value.

```javascript
import {http, Controller, textResult} from "fortjs";

export class DefaultController extends Controller {

    @http.get("/")
    async default() {
        const userId = this.query.userid;
        const name = this.query.name;

        return textResult(`userId is ${userId} & name is ${name}`);
    }
}
```

## Inject Query String Data

You can inject query string data into components or controller methods for easy access to HTTP request query string data.

To achieve this, use the `@asQuery` decorator.

```javascript
import { Controller, http, textResult, asQuery } from "fortjs";

export class UserController extends Controller {

    @http.get("/user-info")
    //highlight-next-line
    async getUserInfo(@asQuery() queryParams) {
        // The 'queryParams' parameter now contains the data from the HTTP query string
        console.log(queryParams);

        // Your logic for processing user information
        // ...

        return textResult("User information retrieved successfully");
    }
}
```

In this example, the `@asQuery()` decorator is used on the `queryParams` parameter of the `getUserInfo` method. This automatically injects the data from the HTTP query string into the `queryParams` parameter. You can then use this data within your method to perform the desired logic, such as processing user information in this case.

Please ensure that the structure of the `queryParams` object aligns with the expected format and content of the data sent in the HTTP query string.
