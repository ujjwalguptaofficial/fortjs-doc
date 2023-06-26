---
sidebar_position: 1
title: "Get Started"
keywords: [introduction, get started, fort-creator, fortjs, node]
description: "In this get started tutorial - we will see how to setup a project and understand basic terminology about fortjs."
---

# Get started

In this get started tutorial - we will see how to setup a project and understand basic terminology about fortjs.

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

Once the project is successfully initated, run these command - 

```
cd <project name>
npm run dev
```

Now see your app in action by visiting url - <a target="_blank" href="http://localhost:4000">localhost:4000</a>

## Basics

Let's understand some basic of fortjs -

1. Controllers
2. Workers
3. Routes
4. Bootstrapping

### Controllers

Controller are classes which contains the logic of your application. Each class represents an end point which is mapped with a route.

In our current code - `DefaultController` is mapped with route `/*'. 

```js title="src/controllers/default_controller"

import { Controller, worker, viewResult, assign, route } from "fortjs";

export class DefaultController extends Controller {

    @worker()
    @route("/")
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

For more info on controller, please read [Controller doc](/docs/controller.md)

### Worker

`Worker` are method inside `Controller` which acts as end point. A special decorator `worker` is used to mark a method as worker.

```js title="src/controllers/default_controller"

import { Controller, worker, viewResult, assign, route } from "fortjs";

export class DefaultController extends Controller {

    @worker()
    @route("/")
    async index(@assign('FortJs') title) {

        const data = {
            title: title
        }
        const result = await viewResult('../src/views/default/index.html', data);
        return result;

    }
}
```

The `index` method here is a worker. 

For more info about worker - please read [worker doc](/docs/worker.md)

### Route

In the worker code - we are using `route` decorator to customize the worker path. Here we have used "/" path in the route.

This is how when we hit - `http://localhost:4000/`, the index method is run and we see a html page in the reponse.

Let's create another method `helloWorld` which will be mapped with endpoint `hello-world` and it will return text `Hello World`.

```js title="src/controllers/default_controller"

import { Controller, worker, viewResult, assign, route, textResult } from "fortjs";

export class DefaultController extends Controller {

    @worker()
    @route("/")
    async index(@assign('FortJs') title) {

        const data = {
            title: title
        }
        const result = await viewResult('../src/views/default/index.html', data);
        return result;

    }

    @worker()
    @route("/hello-world")
    async helloWorld(){
        return textResult("Hello World");
    }
}
```

now hit the url - [http://localhost:4000/hello-world](http://localhost:4000/hello-world)

For more information on routes, please read [routes doc](/docs/route.md).

### Bootstrapping

We only need to provide controller route list to fortjs - 

```js title="src/index"
import * as path from "path";
import { Fort } from "fortjs";
import { routes } from "@/routes";

export const createApp = async () => {
    Fort.folders = [{
        alias: "/",
        path: path.join(__dirname, "../static")
    }];
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

You can also see `Fort.folders` code. This is used to mount a folder to a route path. 

There are many more options. Please read [Bootstrapping doc](/docs/setup.md) for more information.

-----

We hope this gives you basic understanding of fortjs. If you have any doubt or requirements - please create a discussion or issue on github.

-----

## Resources

* [Fortjs examples](https://github.com/ujjwalguptaofficial/fortjs-examples)

* [Creating REST API using Typescript](https://medium.com/fortjs/rest-api-using-typescript-94004d9ae5e6)

* [Creating REST API using es6](https://medium.com/fortjs/rest-api-in-nodejs-using-es6-227765440b2b)

* [MongoDb Example](https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/mongodb)

* [Crud operation using html form](https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/crud)

* [Rest Api Example] (https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/rest)
