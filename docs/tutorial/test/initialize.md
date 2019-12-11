---
Title: "Initialize Controller"
Keywords: "test, unit, initialize, fortjs, node"
Description: "initialize is a method in a controller which initializes a controller."
---

initialize is a method in a controller which initializes a controller & set the controller property provided in param. This is helpful when you are doing unit testing where you want to set the controller properties.

e.g - Let's say i want to set the `body` & `query` of `UserController`

```
const userControllerObj = new UserController();
userControllerObj.initialize({
    body:{
        name:'ujjwal',
        gender:'male'
    },
    query:{
        id:1
    }
})
```

In same way - you can set other properties - 

* request: HttpRequest;
* query: { [key: string]: string };
* body: { [key: string]: any };
* cookieValue: { [key: string]: string };
* param: { [key: string]: string };
* data: { [key: string]: any };
* file: { [fieldName: string]: HttpFile }