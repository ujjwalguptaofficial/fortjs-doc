---
Title: "Expect Query"
Keywords: "query, secure query, validation, fortjs, node"
Description: "This page tells about decorator ExpectQuery & how to use this."
---

ExpectQuery is a decorator which helps you to validate query string data. It provides following features -

* Check data type of incoming query string data against expected query string & automatically convert if possible.
* Removes unnecessary data from incoming query string. This helps you to store data in nosql database without retrieving particular property and thus saving lots of code.

<br>
## Check data type
<br>
Consider a http request which sends value id in query string -

```
http://abc.com/product?id=1
```

Here Id being sent is 1 which will be always string (query strings value are always string).In this case you will write codes to convert `id`  

But when using `ExpectQuery` it will automatically check the datatype & convert to number.

Let's see how to configure this using `ExpectQuery`

```
export class ProductController{

    @Route("/")
    @Worker(["get"])
    @ExpectQuery({ id: 0})
    saveProduct(){
       const id =  this.query.id;
    }
}
```

You can also provide a class as parameter. Make sure that class properties are initialized.

e.g - 

```
export class Product {
  id = 0;
}

export class ProductController{

    @Route("/")
    @Worker(["get"])
    @ExpectQuery(Product)
    saveProduct(){
       const id =  this.query.id;
    }
}
```
<br>
## Removes unnecessary data from incoming body
<br>
Consider a http request which sends following data in request as query string

```
{
    name:"ujjwal",
    gender:"male",
    extra:"extra_value" // some extra value which is not required
}
```

so url will be  - "http://abc.com/user?name=ujjwal&gender=male&extra=extra_value"

Let's see how to use ExpectQuery to only retrieve value that we want, so that property extra will be removed.
```
export class UserController{

    @Route("/")
    @Worker(["get"])
    @ExpectQuery({name:"", gender: ""})
    saveUser(){
       const user =  this.query;
    }
}
```
