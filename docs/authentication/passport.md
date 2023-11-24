---
sidebar_position: 1
title: "Passport"
keywords: [Fort.js Authentication, Web Framework Documentation, Node.js Authentication, User Session, Web Application Security]
description: "Learn how to implement authentication in Fort.js, covering session-based authentication for securing your web applications. Explore the documentation for robust user authentication."
---
 
# Passportjs integration

[Passport](https://github.com/jaredhanson/passport) stands out as the most popular authentication library for Node.js, widely recognized within the community and successfully deployed in numerous production applications. Integrating this library with a FortJs application becomes seamless through the [fortjs-passport](https://github.com/ujjwalguptaofficial/fortjs-passport) module.

Passport boasts a diverse ecosystem of [strategies](http://www.passportjs.org/) that cover a spectrum of authentication mechanisms. Despite the conceptual simplicity, the array of Passport strategies is extensive, offering a wide range of options. Passport streamlines these diverse steps into a standardized pattern.

This guide walks you through the implementation of a comprehensive end-to-end authentication solution tailored for a RESTful API server. The concepts outlined here serve as a foundation for incorporating any Passport strategy, allowing you to customize your authentication scheme. Follow the steps in this guide to construct a fully functional example.

## Requirements

### 1. Registration and Login Routes

#### 1.1 Registration Page
- **Route:** `/register` (GET)
- **Description:** This route renders an HTML page allowing users to register for the application.

#### 1.2 Login Page
- **Route:** `/login` (GET)
- **Description:** Accessing this route will display an HTML page for user login.

### 2. User Login

#### 2.1 Login Post Route
- **Route:** `/login` (POST)
- **Description:** Users can submit their credentials through a POST request to this route for authentication.

### 3. Protected Routes

#### 3.1 Protected Route
- **Route:** `/protected` (GET)
- **Description:** Access to this route is restricted to authenticated users only.

By implementing these routes, users can seamlessly register, log in, and access protected areas within the application.

## Installation

Our first step involves installing the necessary packages. Passport offers a strategy named [passport-local](https://github.com/jaredhanson/passport-local), specifically designed for username/password authentication — a fitting choice for this phase of our use case.


```bash
npm i fortjs-passport passport-local
```

You have the option to install typings for passport-local, although it's not mandatory.

```bash
npm i @types/passport-local -D
```

## Implementation

### Initiate

```js title=src/index

import * as path from "path";
import { Fort } from "fortjs";
import { routes } from "@/routes";
import { PassportAuth } from "fortjs-passport";
import { Strategy } from 'passport-local';
import { db } from "./services/db";

export const createApp = async () => {
    Fort.routes = routes;

    //highlight-start
    // Initiate Passport authentication
    PassportAuth.init();

    // Register the local strategy for user login
    PassportAuth.passport.use('local', new Strategy({
        usernameField: 'email',
        passwordField: 'password'
    },
        function (email, password, done) {
            const user = db.users.find(user => user.emailId === email);
            if (!user) { return done(null, false); }
            if (user.password !== password) { return done(null, false); }
            return done(null, user);
        }
    ));
    //highlight-end

    // Create the Fort application
    await Fort.create();

    // Set the application URL
    process.env.APP_URL = `http://localhost:${Fort.port}`;
};

if (process.env.NODE_ENV !== "test") {
    createApp().then(() => {
        Fort.logger.debug(`Your fort is located at address - ${process.env.APP_URL}`);
    }).catch(err => {
        console.error(err);
    });
}
```

In the provided code snippet, the Passport module is initialized using `PassportAuth.init()`, and a local strategy is registered for user login authentication. The configuration includes specifying the username and password fields. The `createApp` function is responsible for setting up the Fort application, and the application URL is logged once the setup is complete.

:::info
1. You can get the `passport` instance by `PassportAuth.passport` and use it for almost everything as you would do in express application.
:::

### Create Controller

Let's Create a controller named `AuthController` which is mapped with route "/auth". This route is accessible to everyone without any authentication.

```js title=src/controllers/auth_controller
import { Controller } from "fortjs"
export class AuthController extends Controller {

}
```

```js title=src/routes
import { AuthController } from "@/controllers/auth_controller";


export const routes = [{
    path: "/auth",
    controller: AuthController
}]
```

### Registration and Login routes

```js
import { http, Controller, viewResult } from "fortjs"
export class AuthController extends Controller {

    // Route for rendering the login page
    @http.get("/login")
    async getLoginPage() {
        const result = viewResult("loginPage");
        return result;
    } 

    // Route for rendering the registration page
    @http.get("/register")
    async getRegisterPage() {
        const result = viewResult("registerPage");
        return result;
    } 
}
```

In the AuthController, two routes, /login and /register, are defined with the GET HTTP method. The getLoginPage method renders the login page, and the getRegisterPage method renders the registration page using the viewResult function.

For information on how `viewResult` works, refer to [viewResult Doc](/docs/view.md).

### User Login

```js
import { http, Controller, viewResult } from "fortjs"
import { auth } from "fortjs-passport";

export class AuthController extends Controller {

    //highlight-start
    @http.post("/login")
    // apply local guard which will handle the login and pass user in the method
    @guards(auth.guard('local'))
    async doLogin() {
        const { user } = this.request as any;
        return textResult(`Welcome ${user.name}`);
    }
    //highlight-end

    // Route for rendering the login page
    @http.get("/login")
    async getLoginPage() {
        const result = viewResult("loginPage");
        return result;
    } 

    // Route for rendering the registration page
    @http.get("/register")
    async getRegisterPage() {
        const result = viewResult("registerPage");
        return result;
    } 
}
```

In the provided code snippet, a **POST** route for user login has been implemented using the `@http.post` decorator. The `@guards(auth.guard('local'))` decorator is applied to handle the login process using the local strategy. The `user` object is then accessed from the `request`, and a welcome message is returned in the response. 

:::info
The `auth` property from `fortjs-passport` can be utilized to execute the Passport strategy by providing the registered strategy name. It exposes two key functions: `auth.guard` and `auth.shield`. These functions streamline the usage of Passport's authentication features within the Fort.js application.
:::

:::tip
By default, `fortjs-passport` initializes sessions for you to enable persistent authentication. However, you have the option to turn off session support by setting `Fort.shouldParseCookie` to `false`. This action disables cookie parsing, consequently turning off the session functionality.
:::

### Protected route 

Let's create a controller named - `ProtectedController` with route `/protected`. It will have some endpoints and will be accessible to only authenticated user.

```js title=src/controller/protected_controller
import { Controller, shields } from "fortjs";
import { auth } from 'fortjs-passport';

@shields(auth.shield("isAuthenticated"))
export class ProtectedController extends Controller {

}
```

```js title=src/routes
import { AuthController } from "@/controllers/auth_controller";
import { ProtectedController } from "@/controllers/protected_controller";

export const routes = [
    {
        path: "/auth",
        controller: AuthController
    },
    //highlight-start
    {
        path: "/protected",
        controller: ProtectedController
    }
    //highlight-end
]
```

In the provided code snippet, a `ProtectedController` is created with the route `/protected`. The controller is protected by the **isAuthenticated** shield, which is applied using `auth.shield("isAuthenticated")`. This shield ensures that only authenticated users have access to the endpoints within the `ProtectedController`.

#### Access user

Let's create a controller method named - `getUser` which is mapped with route `/user` and http method `GET`. It will return the `user` object as `json`.

```js
import { Controller, shields, http, jsonResult } from "fortjs";
import { auth } from 'fortjs-passport';

@shields(auth.shield("isAuthenticated"))
export class ProtectedController extends Controller {
    
    //highlight-start
    @http.get("/user")
    getUser(){
        // isAuthenticated shield pass `user` via data.
        const { user } = this.data;

        // const user = this.request['user'] - this is how you would get user in expressjs

        return jsonResult(user);
    }
    //highlight-end
}
```

### JWT Authentication

So far we have used `session` to persist the user, but we can use the JWT Authentication which allows us to have stateless persistence.

For implementing JWT Authentication - we need to use the `jwt strategy`.

Let's install the strategy and register it - 

#### installation

```bash
npm i passport-jwt
```

#### Registration

```js title=src/index

import * as path from "path";
import { Fort } from "fortjs";
import { routes } from "@/routes";
import { PassportAuth } from "fortjs-passport";
import { Strategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { db } from "./services/db";

export const createApp = async () => {
    Fort.routes = routes;

    // Initiate Passport authentication
    PassportAuth.init();

    //highlight-start
    // register the jwt stategy
    const opts = {} as any;
    opts.jwtFromRequest = ExtractJwt.fromHeader('authorization');
    opts.secretOrKey = 'thisisthesecretkey';
    PassportAuth.passport.use('jwt', new JwtStrategy(opts,
        function (jwt_payload, done) {
            const user = db.users.find(user => user.id === jwt_payload.id);
            if (!user) {
                return done(null, false, {
                    message: 'Not authenticated'
                });
            }

            return done(null, user);
        }
    ));
    //highlight-end


    // Register the local strategy for user login
    PassportAuth.passport.use('local', new Strategy({
        usernameField: 'email',
        passwordField: 'password'
    },
        function (email, password, done) {
            const user = db.users.find(user => user.emailId === email);
            if (!user) { return done(null, false); }
            if (user.password !== password) { return done(null, false); }

            return done(null, user);
        }
    ));

    // Create the Fort application
    await Fort.create();

    // Set the application URL
    process.env.APP_URL = `http://localhost:${Fort.port}`;
};

if (process.env.NODE_ENV !== "test") {
    createApp().then(() => {
        Fort.logger.debug(`Your fort is located at address - ${process.env.APP_URL}`);
    }).catch(err => {
        console.error(err);
    });
}
```

In the highlighted section, the JWT strategy is registered in PassportJS. This allows authentication using JSON Web Tokens (JWT) in the Fort.js application. The strategy inernally extracts the JWT from the request header and verifies it using the provided secret key. If the token is valid, it retrieves the user information from the database based on the user ID stored in the JWT payload. If the user is found, authentication is successful; otherwise, it returns an error message indicating that the user is not authenticated.

#### Login

In case of jwt authentication - we need to create the token and send it to client either in response data or via headers.

Let's change the `doLogin` method code from our previous example to generate the token and send the token via headers. 


```js
import { http, Controller, viewResult } from "fortjs"
import { auth } from "fortjs-passport";

export class AuthController extends Controller {

    @http.post("/login")
    // apply local guard which will handle the login and pass user in the method
    @guards(auth.guard('local'))
    async doLogin() {
        const { user } = this.request as any;

        //highlight-start
        const token = jwt.sign(user, 'thisisthesecretkey');
        this.response.setHeader("authorization", token);
        //highlight-end

        return textResult(`Welcome ${user.name}`);
    }
}
```

In the highlighted section, the jwt.sign function is used to generate a JWT token for the authenticated user (user) using the provided secret key ('thisisthesecretkey'). The generated token is then set in the response header with the key "authorization". This allows the client to receive the token in the response headers after a successful login, enabling further authenticated requests using this token.

#### Protected routes

In the session example - we have used `auth.shield('isAuthenticated')` to protect the shield, but in case of jwt auth - it won't work alone as for every request the token needs to be parsed and then extract the payload from the token which means calling `jwt-strategy` for each request.

For calling `jwt-strategy` : we will use `auth.shield` and pass the strategy name `jwt`.

```js
import { Controller, shields, http, jsonResult } from "fortjs";
import { auth } from 'fortjs-passport';

//highlight-start
@shields(auth.shield("jwt",{ session: false}))
//highlight-end
export class ProtectedController extends Controller {
    
    @http.get("/user")
    getUser(){
        // isAuthenticated shield pass `user` via data.
        const { user } = this.data;

        // const user = this.request['user'] - this is how you would get user in expressjs

        return jsonResult(user);
    }
}
```

In the highlighted section, `@shields(auth.shield("jwt", { session: false }))` is used to apply the JWT authentication shield to protect the route. The `{ session: false }` option is passed to the shield to ensure that the session is not used, as JWT is a stateless authentication method. This shield validates the incoming JWT token for each request and extracts the user information for further processing in the route handler.

:::tip
You can store the `auth.shield` result in a variable and use it wherever its needed. For example - 

```js
const JWT_SHIELD = auth.shield("jwt",{ session: false});
```

and then use it - 

```js
@shields(JWT_SHIELD)
export class ProtectedController extends Controller {
}
```
:::