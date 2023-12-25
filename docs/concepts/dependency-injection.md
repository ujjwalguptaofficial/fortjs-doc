---
sidebar_position: 5
title: "Dependency Injection"
keywords: [Dependency Injection, singleton, assign, JavaScript framework, Web development, Code modularity, Unit testing]
description: "Learn about Dependency Injection in Fort.js and how to use decorators such as `@singleton` and `@assign` for injecting dependencies into controllers and components. These decorators provide a clean and modular way to manage dependencies, making your code more maintainable and testable.
"
---

# Dependency Injection

Dependency Injection is a crucial process that enables the injection of dependencies into various parts of the code by the framework. This facilitates the writing of unit-testable code and improves overall code maintainability.

Fort.js offers several decorators for dependency injection:

1. **`singleton`**: Used to mark a class as a singleton, ensuring that only one instance is created and reused throughout the application.

2. **`assign`**: Allows assigning dependencies to class properties, making it easy to access them within the class.

3. **`asBody`**: Enables the injection of HTTP request body data into components or controller methods, providing easy access and type safety. Read [asBody Doc](/docs/concepts/body.md?#inject-body-data) for more information.

4. **`asQuery`**: Facilitates the injection of HTTP request query string data into components or controller methods, simplifying access to query parameters. Read [asQuery Doc](/docs/concepts/query.md?#inject-query-string-data) for more information.

5. **`asParam`**: Injects the entire object as a parameter, making it available for use within components or controller methods. Read [asParam Doc](/docs/concepts/param.md?#inject-path-parameters) for more information.

These decorators play a crucial role in the Dependency Injection mechanism in Fort.js, contributing to code modularity, testability, and overall development efficiency.

## singleton

The `singleton` decorator in Fort.js allows you to inject a class dependency and maintain a single instance of that class throughout the entire application. This helps optimize memory usage by creating only one instance of the class, which is reused wherever it is injected.

### Inject into constructor

Let's illustrate how to use `singleton` by injecting a `UserService` class into a controller's constructor:

```javascript
import { Controller, singleton } from "fortjs";
import { UserService } from "@/services";

export class UserController extends Controller {
    service: UserService;

    //highlight-next-line
    constructor(@singleton(UserService) service) {
        super();
        this.service = service;
    }
}
```

In this example, the `UserService` class is injected into the `UserController` as a singleton. This ensures that the same instance of `UserService` is utilized throughout the entire application, promoting efficient memory management.

### Inject into controller methods

The dependency injection can be also performed on controller methods or any component methods which is called by framework.

```javascript
import { Controller, singleton, http } from "fortjs";
import { UserService } from "@/services";

export class UserController extends Controller {
    service: UserService;

    constructor(@singleton(UserService) service) {
        super();
        this.service = service;
    }

    @http.post("/")
    //highlight-next-line
    addUser(@singleton(UserService) service){

    }
}
```

In the above code snippet, the `UserService` is injected into both the constructor and the `addUser` method of the `UserController`. Since the `@singleton` decorator is used, only one instance of the `UserService` will be shared among the entire application. This ensures a single, shared instance of the service, promoting consistency and efficient memory usage.

## assign

The `assign` decorator in Fort.js allows you to inject a specific value into a variable in a controller or any type of component.

Here's an example of injecting the value "hello world" into a variable using the `assign` decorator in a controller:

```javascript
import { Controller, assign, http } from "fortjs";

export class UserController extends Controller {

    @http.get("/")
    //highlight-next-line
    index(@assign('hello world') value) {
        console.log(value); // Output: hello world
    }
}
```

In this example, the `assign` decorator injects the value "hello world" into the `value` variable. This provides a flexible way to assign specific values to variables within your components.

## Summary

* **@singleton** allows injection of a class dependency with a single instance maintained throughout the app.
* **@assign** injects specific values into variables, providing flexibility for assigning values in components.
