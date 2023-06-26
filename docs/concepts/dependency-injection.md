---
title: "Dependency Injection"
keywords: "dependency injection, assign, singleton, fortjs, node js"
description: "Dependency injection in nodejs"
---

# Dependency Injection

Dependency Injection is a process of injecting dependency into different parts by framework. it allows to write unit testable code.

FortJs provides `assign` and `singleton` decorator for dependency Injection. 
## assign
assign can be used in controller and all type of component.

Let's inject "hello world" to a variable value


```
export class UserController extends Controller {
    service: UserService;

    @worker()
    index(@assign('hello world') value) {

        console.log(value) // hello world
    }
}
```

## singleton

`singleton` allows you to inject a class dependency and maintain a single instance of the class across whole application.

Let's inject a class `UserService` in a controller constructor

```
export class UserController extends Controller {
    service: UserService;

    constructor(@singleton(UserService) service) {
        super();
        this.service = service;
    }
}
```

By using `singleton` you can save memory as its create only one instance of class and maintains throughout the app. 