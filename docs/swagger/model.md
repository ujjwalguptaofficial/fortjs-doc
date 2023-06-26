---
title: "Swagger Model"
keywords: [swagger, automatic generate, integrate, fortjs, node]
description: "Swagger model in fortjs"
---

# Swagger Model

A model is a class which represents data. It represents what data will return on different responses. 

## Configuration 

A Model can have different configuration like a field can be optional and other field can be required etc. Fortjs provides different `decorators` to configure the model -

* Optional Property
* Ignore Property
* Example

Let's see what are the uses of these configuration & how to use -    

Consider a model "User" which has following structure - 

```
class User {
    id: string;

    name : String;
    address: string;
    gender: string;

    isValidUser : Function;
}
```

### OptionalProperty

Consider the property `id` in the model "User" represents a primary key which means its automatically generated, In that case - 

* `id` is not required in a "POST" request - since new record will be created and new id will be generated for that request.

* But it can be a required field in "PUT" request to identify the record.

So from above statement we found that `id` is sometimes required and sometimes not. For this condition - we can use decorator `OptionalProperty` which will mark the field as optional in swagger doc.

```
import { OptionalProperty } from "fortjs-swagger";

class User {

    @OptionalProperty
    id: string;

    name : String;
    address: string;
    gender: string;

    isValidUser : Function;
}
```


### IgnoreProperty

`IgnoreProperty` can be used to ignore a property in the model.

Let's focus on property `isValidUser`, its a method which is being used internally in the application but it doesn't need to be specified in the swagger doc.

```
import { IgnoreProperty, OptionalProperty } from "fortjs-swagger";

class User {

    @OptionalProperty
    id: string;

    name : String;
    address: string;
    gender: string;

    @IgnoreProperty
    isValidUser : Function;
}
```

### Example 

Fortjs-Swagger calls `getExample` to generate the example for your model.

e.g - Let's see how we can provide an example for our model "User" 

```javascript
import { IgnoreProperty, OptionalProperty, SwaggerModel } from "fortjs-swagger";

class User implements SwaggerModel {

    @OptionalProperty
    id: string;

    name : String;
    address: string;
    gender: string;

    @IgnoreProperty
    isValidUser : Function;

    // initialize the fields which we want to show in example  
    getExample(){
        this.id = 0;
        this.name = "ujjwal";
        this.address = "Planet earth";
        this.gender = "male";
    }
}

```






