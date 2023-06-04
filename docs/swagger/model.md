---
Title: "Swagger Model"
Keywords: "swagger, automatic generate, integrate, fortjs, node"
Description: "Swagger model in fortjs"
---

A model in swagger is a class. But you may want to have some configuration for your models. 

**Note :-**  No configuration is required to use a class as model.

Fortjs-Swagger provides following configuration - 

* Optional Property
* Ignore Property
* Example

<br/>
## Let's see what are the uses of these configuration & how to use -    

<br/>
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

#### OptionalProperty

Consider the property `id` in the model "User" is a primary key which means its automatically generated, In that case - 

* `id` is not required in a "POST" request, since new record will be created and new id will be generated for that request.

* But it can be a required field in "PUT" request to identify the record.

So from above statement we found that id is sometimes required & sometimes not. For this condition - we can use decorator `OptionalProperty` which will mark the field as optional in swagger doc.

<br/>
#### IgnoreProperty

Now let's focus on property `isValidUser`, its a method which is being used internally in the application but it doesn't need to be specified in the swagger doc. So we can use decorator `IgnoreProperty` which will ignore this property.

After changes - our class will look something like this - 

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

<br/>
#### Example 

Fortjs-Swagger calls `getExample` to generate the example for your model.

e.g - Let's see how we can provide an example for our model "User" 

```
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






