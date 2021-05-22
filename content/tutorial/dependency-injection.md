---
Title: "Dependency Injection"
Keywords: "dependency injection, assign, singleton, fortjs, node js"
Description: "Dependency injection in nodejs"
---

FortJs provides "Assign" And "Singleton" decorator for dependency Injection. 

## Assign
<br>
Assign can be used in controller and all type of component.

e.g - 

To inject "hello world" to a variable value


```
export class UserController extends Controller {
    service: UserService;

    @Worker()
    index(@Assign('hello world') value) {
        console.log(value) // hello world
    }
}
```
<div class="top-border" style="margin: 25px 0;"></div>
## Singleton
<br>
Singleton creates a single object & maintain this across whole application.

e.g -

To inject a service in a controller constructor

```
export class UserController extends Controller {
    service: UserService;

    constructor(@Singleton(UserService) service) {
        super();
        this.service = service;
    }
}
```

By using `Singleton` you can save memory as its create only one instance of class & maintains throughout the app.  