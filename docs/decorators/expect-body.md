---
title: "Expect Body"
keywords: "body, secure body, validation, fortjs, node"
description: "This page tells about decorator ExpectBody & how to use this."
---

# expectBody

`expectBody` helps you to validate http request body data. It has following features -

* Check data type of incoming body data against expected body.
* Removes unnecessary data from incoming body. This helps you to store data in nosql database without retrieving particular property and thus saving lots of code.

## Check data type
Consider a post request which sends following data in request 

```
{
    price:"1200",
    name:"black jeans nike"
}
```

Here price being sent is 1200 which is string but server expects it to be number. In this case you will write codes to check for data type of `price` property. 

But when using `expectBody` it will automatically check the datatype & if not matches then returns a 400 request. This saves you writing code for validation of property type.

Let's see how to configure this using `expectBody`

```javascript
export class ProductController{

    @route("/")
    @worker("post")
    @expectBody({ price:0, name:""})
    saveProduct(){
       const product =  this.body;
    }
}
```

You can also provide a class as parameter. Make sure that class properties are initialized.

e.g - 

```
export class Product {
  price = 0;
  name = ""
}

export class ProductController{

    @route("/")
    @worker("post")
    @expectBody(Product)
    saveProduct(){
       const product =  this.body;
    }
}
```
## Removes unnecessary data from incoming body

Consider a post request which sends following data in request 

```
{
    name:"ujjwal gupta",
    gender:"male",
    extra:"some extra value" // some extra value which is not required
}
```

now for such requests -

### 1. We either save the whole data

```
export class UserController{

    @route("/")
    @worker("post")
    saveUser(){
       const user = this.body;
       // save user into mongodb
       const service = new UserService();
       service.saveUser(user);
    }
}
```

In this case - property `extra` will be saved too & thus your database has now garbage value. This is a very big risk & you shouldn't save data this way when using nosql database.

### 2. Extract particular value from body

```
export class UserController{

    @Route("/")
    @Worker("post")
    saveUser(){
       const user = {
           name:this.body.name,
           gender: this.body.gender
       } ;
       // save user into mongodb
       const service = new UserService();
       service.saveUser(user);
    }
}
```

this is a good way but consider user value with 10 properties which means you need to write 10 lines of code.

Instead you can use `expectBody` which will remove extra property from the body -

```
export class UserController{

    @route("/")
    @worker("post")
    @expectBody({name:"", gender: ""})
    saveUser(){
       const user =  this.body;
       // save user into mongodb
       const service = new UserService();
       service.saveUser(user);
    }
}
```
