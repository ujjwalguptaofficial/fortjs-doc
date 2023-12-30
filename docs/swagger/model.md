---
title: "Swagger Model"
keywords: [swagger, automatic generate, integrate, fortjs, node]
description: "Swagger model in fortjs"
---

# Swagger Model

A model is a class which represents data. It represents what data will be used in http request or http response. 

## Configuration 

A Model can have different configurations like a field can be optional, and other fields can be required, etc. Fortjs provides different `decorators` to configure the model:

- Optional Property
- Ignore Property
- Example

Let's see what are the uses of these configurations & how to use them.    

Consider a model "User" which has the following structure:

```js
class User {
    id: string;
    name: String;
    address: string;
    gender: string;
    isValidUser: Function;
}
```

### OptionalProperty

Consider the property `id` in the model "User" represents a primary key, which means it's automatically generated. In that case:

- `id` is not required in a "POST" request since a new record will be created, and a new id will be generated for that request.
- But it can be a required field in a "PUT" request to identify the record.

So, for the above statement, we found that `id` is sometimes required and sometimes not. For this condition, we can use the decorator `OptionalProperty` which will mark the field as optional in the Swagger doc.

```js
import { swagger } from "fortjs-swagger";

class User {
    
    //highlight-start
    @swagger.optionalProperty
    id: string;
    //highlight-end

    name: String;
    address: string;
    gender: string;
    isValidUser: Function;
}
```

### IgnoreProperty

`ignoreProperty` can be used to ignore a property in the model.

Let's focus on the property `isValidUser`, it's a method that is being used internally in the application but doesn't need to be specified in the Swagger doc.

```js
import { swagger } from "fortjs-swagger";

class User {
    @swagger.optionalProperty
    id: string;

    name: String;
    address: string;
    gender: string;
    
    //highlight-start
    @swagger.ignoreProperty
    isValidUser: Function;
    //highlight-end
}
```

### Example 

Fortjs-Swagger calls `getExample` to generate the example for your model.

For example, let's see how we can provide an example for our model "User":

```javascript
import { swagger,SwaggerModel } from "fortjs-swagger";

class User extends SwaggerModel {
    @swagger.optionalProperty
    id: string;

    name: String;
    address: string;
    gender: string;

    @swagger.ignoreProperty
    isValidUser: Function;

    // initialize the fields which we want to show in example  
    getExample() {
        this.id = 0;
        this.name = "ujjwal";
        this.address = "Planet earth";
        this.gender = "male";
    }
}
```