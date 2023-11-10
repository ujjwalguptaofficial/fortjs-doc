---
sidebar_position: 1
title: "Get Started"
keywords: [introduction, get started, fort-creator, fortjs, node]
description: "In this get started tutorial - we will see how to setup a project and understand basic terminology about fortjs."
---

# Get started

Fort.js is a web framework for Node.js that aims to provide a simple and efficient way to build web applications. In this tutorial, we'll go through the steps to set up a basic project and understand basic terminology about fortjs.

## Setup

Fortjs provides [fort-creator](https://github.com/ujjwalguptaofficial/fort-creator) for setting up the project and helping you with the development.

Let's initiate a new project -

```
npx fort-creator init
```

You will see a prompt to choose project language with options - 

1. typescript
2. javascript

Choose your language and fort-creator will create a project for you.

Once the project is successfully created, run these command - 

```
cd <project name>
npm run dev
```

Open your browser and navigate to `http://localhost:4000` - You will see fortjs default page.

## Basics

Let's understand some basic of fortjs -

1. Controller
2. Route
3. Bootstrapping

### Controller

Controller is a class that defines methods to handle specific HTTP endpoints, encapsulating the logic for processing incoming requests and producing appropriate responses. Controllers play a central role in organizing and structuring the application's request-handling logic.

👉 Each controller represents an end point which is mapped with a route.

In our current code - `DefaultController` is mapped with route `/*'. 

```js title="src/controllers/default_controller"

import { Controller, viewResult, assign, http } from "fortjs";

export class DefaultController extends Controller {

    @http.get("/")
    async index(@assign('FortJs') title) {

        const data = {
            title: title
        }
        const result = await viewResult('../src/views/default/index.html', data);
        return result;

    }
}
```

```js title=src/routes
import { DefaultController } from "@/controllers/default_controller";

export const routes = [{
    path: "/*",
    controller: DefaultController
}]
```

Here you can see that `DefaultController` has been mapped with path "/*". This is a controller level route.

For more info on controller, please read [Controller doc](./controller.md)

### Route

Route are endpoint which is coupled with controller method. When the endpoint is called, the method tied with that endpoint is executed.

A special decorator `http` is used to defined which `Http Method` you want to support for your end point and the path of your endpoint.

```js title="src/controllers/default_controller"
import { Controller, viewResult, assign, http } from "fortjs";

export class DefaultController extends Controller {

    @http.get("/")
    async index(@assign('FortJs') title) {

        const data = {
            title: title
        }
        const result = await viewResult('../src/views/default/index.html', data);
        return result;

    }
}
```

In the above code - `http.get` decorator is used to make our endpoint support only get `Http Method` and parameter value "/" is passed which will set our endpoint path. 

This is how when we hit - `http://localhost:4000/`, the index method is run and we see a html page in the reponse.

Let's create another method `helloWorld` which will be mapped with endpoint `hello-world` and it will return text `Hello World`.

```js title="src/controllers/default_controller"
import { Controller, viewResult, assign, http } from "fortjs";

export class DefaultController extends Controller {

    @http.get("/")
    async index(@assign('FortJs') title) {

        const data = {
            title: title
        }
        const result = await viewResult('../src/views/default/index.html', data);
        return result;

    }

    @http.get("/hello-world")
    async helloWorld(){
        return textResult("Hello World");
    }
}
```

now hit the url - [http://localhost:4000/hello-world](http://localhost:4000/hello-world)

For more information on routes, please read [routes doc](./route.md).

### Bootstrapping

Bootstrapping is very simple in fortjs. The minimum requirement is to define your controller routes and provide routes to fortjs - 

```js title="src/index"
import * as path from "path";
import { Fort } from "fortjs";
import { routes } from "@/routes";

export const createApp = async () => {
    Fort.routes = routes;
    process.env.APP_URL = `http://localhost:${Fort.port}`;
    await Fort.create();
};

if (process.env.NODE_ENV !== "test") {
    createApp().then(() => {
        Fort.logger.debug(`Your fort is located at address - ${process.env.APP_URL}`);
    }).catch(err => {
        console.error(err);
    });
}

```

Read [Bootstrapping doc](/docs/setup.md) for more information.
-----

We hope this gives you basic understanding of fortjs. If you have any doubt or requirements - please create a discussion or issue on github.

-----

## Resources

* [Fortjs examples](https://github.com/ujjwalguptaofficial/fortjs-examples)

* [Rest Api Example] (https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/rest)

* [Creating REST API using Typescript](https://medium.com/fortjs/rest-api-using-typescript-94004d9ae5e6)

* [Creating REST API using es6](https://medium.com/fortjs/rest-api-in-nodejs-using-es6-227765440b2b)

* [MongoDb Example](https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/mongodb)

* [Crud operation using html form](https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/crud)
