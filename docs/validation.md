---
sidebar_position: 4
title: "Validation"
keywords: [validation, HTTP Body validation, QueryString validation, URL Parameter validation, Data validation]
description: "Explore Fortjs validation capabilities for HTTP Body, Query String, and URL Parameters. Learn how to use the versatile validate decorator, backed by powerful components like Guard and Shield."
---

# Validation

Validation in Fort.js is facilitated through the [validate decorator](/docs/decorators/validate.md), enabling you to validate incoming data from HTTP requests. This powerful feature allows validation for:

* HTTP Body
* Query String
* URL Parameters

The `validate` decorator takes a DTO (Data Transfer Object) class as a parameter for validation. The default validator leverages the widely used validation library, [class-validator](https://www.npmjs.com/package/class-validator).

Let's see How we can validate different types of data from request - 

## Validate HTTP Body

HTTP Body validation is achieved using the `@validate.body` decorator. Simply pass the DTO class as a parameter to enforce validation.

```js
import { Controller, jsonResult, HTTP_STATUS_CODE, http, validate } from 'fortjs';
import { User } from '@/models/user';

export class UserController extends Controller {

    @http.post("/")
    //highlight-next-line
    @validate.body(User)
    async addUser() {
        const newUser = this.body;
        return jsonResult(newUser, HTTP_STATUS_CODE.Created);
    }
}
```

Here is an example of how our DTO class looks like - 

```js
import { Length, Contains, IsIn, IsEmail, IsNumber } from "class-validator";

export class User {
    @IsNumber()
    id?: number;

    @Length(5)
    name: string;

    @IsEmail()
    emailId: string;

    constructor(user: any) {
        this.id = Number(user.id);
        this.name = user.name;
        this.emailId = user.emailId;
    }
}
```

:::tip
The validator passes the request data into the constructor of the DTO class, providing an opportunity to customize it based on specific requirements. For instance:

* Changing data types
* Removing extra data
:::

## Validate Query string

Url Query string validation is achieved using the `@validate.query` decorator. Simply pass the DTO class as a parameter to enforce validation.

```js
import { Controller, textResult, HTTP_STATUS_CODE, http, validate } from 'fortjs';
import { User } from '@/models/user';
import { IsNumber } from "class-validator";

class RemoveQueryStringDTO{

    @IsNumber()
    id:number;

    constructor(data){
        // the id from query string will be always string, so it needs to be converted into number
        //highlight-next-line
        this.id = Number(data.id);
    }
}

export class UserController extends Controller {

    @http.delete("/")
    //highlight-next-line
    @validate.query(RemoveQueryStringDTO)
    async removeByQueryString() {
        // taking id from query string
        const userId = this.query.id;
        return textResult("invalid user", 404);
    }
}
```

## Validate Url Param

Url Param validation is achieved using the `@validate.param` decorator. Simply pass the DTO class as a parameter to enforce validation.

```js
import { Controller, textResult, HTTP_STATUS_CODE, http, validate } from 'fortjs';
import { User } from '@/models/user';

export class UserController extends Controller {

    @http.delete("/{id}")
    //highlight-next-line
    @validate.param(RemoveQueryStringDTO)
    async removeUser() {
        // taking id from param
        const userId = this.param.id;
        return textResult("invalid user", 404);
    }
}
```

:::tip
The validate decorator internally utilizes powerful components called [Guard](/docs/component/guard.md) and [Shield](/docs/component/shield.md). These components are versatile and offer a high level of reusability, making them excellent choices for validation purposes.

If you need to add any custom validation, you can leverage these components.
:::

**Note:-** The default validator uses `class-validator` for validation but you can customize it also. Please read [validator](/docs/advanced/validator.md) doc.