---
sidebar_position: 5
title: "Authentication"
keywords: [Fort.js Authentication, Web Framework Documentation, Node.js Authentication, User Session, Web Application Security]
description: "Learn how to implement authentication in Fort.js, covering session-based authentication for securing your web applications. Explore the documentation for robust user authentication."
---
 
# Authentication

> Authentication is the process of verifying the identity of a user, system, or entity attempting to access a particular resource or service. It ensures that the entity requesting access is who it claims to be.

There are multiple ways to implement authentication. In this documentation guide, we will focus on learning how to perform session authentication based on a user ID/password combination.

# Requirements

## 1. Registration and Login Routes

### 1.1 Registration Page
- **Route:** `/register` (GET)
- **Description:** This route renders an HTML page allowing users to register for the application.

### 1.2 Login Page
- **Route:** `/login` (GET)
- **Description:** Accessing this route will display an HTML page for user login.

## 2. User Login

### 2.1 Login Post Route
- **Route:** `/login` (POST)
- **Description:** Users can submit their credentials through a POST request to this route for authentication.

## 3. Protected Routes

### 3.1 Protected Route
- **Route:** `/protected` (GET)
- **Description:** Access to this route is restricted to authenticated users only.

By implementing these routes, users can seamlessly register, log in, and access protected areas within the application.

## Registering user into system

Consider the following scenario: a registered user possesses a user ID and password, granting access to the system upon entering valid credentials. Our application includes a `Defaultcontroller`` featuring a login page, a registration page. Notably, this `DefaultController` is accessible to anyone without requiring a login.

```js
import { http, Controller, textResult, viewResult } from "fortjs"
export class DefaultController extends Controller {

    @http.get("/login")
    async getLoginPage() {
        const result = viewResult("loginPage");
        return result;
    } 

    @http.get("/register")
    async getRegisterPage() {
        const result = viewResult("registerPage");
        return result;
    } 

    @http.post("/login")
    async login() {
        const {emailId, password} = this.body;

        const userService = new UserService();
        const user = userService.getUserByEmail(emailId);

        if (user != null && user.password === pwd) {

            // highlight-start
            this.session.set('userId', user.id);
            this.session.set('emailId', emailId);
            // highlight-end

            return textResult(`Authenticated`);
        }
        else {
            return textResult("Invalid credential");
        }
    }
}
```

In the provided code, three methods are present:

- **getLoginPage:** This method is utilized to display the login form when the request is 'GET'.
- **getRegisterPage:** It is employed to showcase the user registration page.
- **login:** This method is responsible for the login process through a POST request. It retrieves the email ID and password from the request body, validates whether the provided credentials are correct, and, if so, creates a session. When a session is established, the framework generates a cookie and sends it to the browser. The framework subsequently tracks the user using this cookie.

Once a session has been established for a user, it becomes accessible throughout the system, including any controller or component, using `this.session`. For example:

```js
// Get userId from the session
this.session.get('userId');

// Check if the session exists
this.session.isExist('userId');

```
These methods allow convenient retrieval of user-related information stored in the session.

---

## Restricting User Access to resource

To prevent unauthenticated users from accessing restricted methods, a common practice is to check the session in every method. If the session is set, proceed with the request; otherwise, redirect to the login page or send a text response with HTTP code 401.

However, this logic tends to be repetitive and can be extracted into a common method for reuse. Fort.js facilitates this through [components](/docs/component/component.md). Depending on the specific requirements, you can use Shield or Guard.

:::info
Shields allow you to protect your controller, ensuring that only authorized users can access it. Guards, on the other hand, enable you to protect your controller methods, adding an additional layer of authorization at the method level.
:::

Let's consider the scenario where we want to restrict access at the controller level. To achieve this, we'll create an [Shield](/docs/component/shield.md) named `AuthenticationShield`. We'll encapsulate our authentication logic within this shield.

### Creating Shield

To create the `AuthenticationShield`, we need to define a class that extends the `Shield` class from Fortjs.

```js
import { Shield, textResult } from "fortjs";
export class AuthenticationShield extends Shield {

    async protect() {
        
        const isExist = await this.session.isExist('userId');
        if(!exist) {
            //user is not authenticated, so return error message with 401
            return textResult("Not authenticated", 401);
        }

        // returning nothing or null means shield has allowed 
    }
}
```

### Using shield

Now, we can add this shield to any controllers where authorization is required. Let's incorporate this into the `UserController`.

To utilize the shield, the `shields` decorator is used, which can accept multiple shields.

```js
import { Controller, shields } from "fortjs";
import { AuthenticationShield } from "@/shields";

@shields(AuthenticationShield) 
export class UserController extends Controller {

}
```

Now, our `AuthenticationShield` will safeguard the `UserController` from unauthorized access. Any attempt by an unauthenticated user to access the `UserController` will result in an unauthenticated error response, as defined in the shield logic.

Similarly, you can create a [Guard](/docs/component/guard.md) to restrict access at the controller method level.

For a complete example, refer to the [Authentication Example](https://github.com/ujjwalguptaofficial/fortjs/tree/master/example/authentication).

:::tip
👉 In this documentation, we've demonstrated how to use Shields to restrict access to a controller, specifically for session authentication. However, the same logic can be applied to other types of authentication, such as Basic Authentication or JWT Authentication. If you encounter any challenges or need assistance, feel free to ask in the GitHub discussion channel.
:::