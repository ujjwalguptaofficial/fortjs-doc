---
Title: "Dependency Injection"
Keywords: "dependency injection, concept, fortjs, node"
Description: "Dependency injection in nodejs"
---

FortJs provides "Assign" decorator for dependency Injection. Assign can be used in controller and all type of component.

e.g - 
1. To inject a service in a controller constructor

```
export class UserController extends Controller {
    service: UserService;

    constructor(@Assign(UserService) service) {
        super();
        this.service = new service();
    }
}
```

2. To inject "hello world" to a variable value


```
export class UserController extends Controller {
    service: UserService;

    @Worker()
    index(@Assign('hello world') value) {
        console.log(value) // hello world
    }
}
```