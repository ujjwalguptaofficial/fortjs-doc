---
sidebar_position: 2
title: "Passport JWT Authentication"
keywords: [Fort.js, Passport.js, JWT Authentication, Web Security, Fort Framework]
description: "Implement secure JWT authentication in Fort.js using Passport.js. Enhance your web application's security and user authentication with stateless persistence."
---

# Passport JWT Authentication

So far, we've utilized **sessions** for user persistence, but an alternative is **JWT Authentication**, offering stateless persistence. To implement this, we employ the [JWT strategy](https://www.passportjs.org/packages/passport-jwt/).

Let's install the strategy and register it - 

## installation

```bash
npm i passport-jwt
```

## Registration

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

## Login

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

## Protected routes

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