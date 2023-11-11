---
sidebar_position: 1
title: "Get Started"
keywords: [introduction, get started, fort-creator, fortjs, node]
description: "In this tutorial, we'll go through the steps to set up a basic project and understand basic terminology about fortjs."
---

# Get started

Fort.js is a web framework for Node.js that aims to provide a simple and efficient way to build web applications. In this tutorial, we'll go through the steps to set up a basic project and understand basic terminology about fortjs.

## Setup

Fort.js provides [fort-creator](https://github.com/ujjwalguptaofficial/fort-creator) to streamline project setup and development.

### Initiate a New Project

```bash
npx fort-creator init
```

Follow the prompts to choose your project language (**typescript** or **javascript**). Fort-creator will generate the project for you.

### Run the Project

```bash
cd <project-name>
npm run dev
```

Open your browser and navigate to [http://localhost:4000](http://localhost:4000) to view the Fort.js default page.


## Basics

Let's delve into some fundamentals of fortjs -

1. Controller
2. Http Route
3. Bootstrapping

### Controller

A **Controller** in Fortjs is a class responsible for defining methods that handle specific HTTP endpoints. It encapsulates the logic for processing incoming requests and generating appropriate responses. Controllers play a pivotal role in organizing and structuring the application's request-handling logic.

👉 Each controller represents an endpoint, which is mapped to a path known as the controller route.

In our current code, the `DefaultController` is mapped to the route `/*`.


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

Here, you can observe that the `DefaultController` has been mapped with the path "/*", which signifies a controller-level route.

For more detailed information on controllers, please refer to the [Controller documentation](./controller.md).

### Http Route

Http Routes are endpoints associated with controller methods. When the endpoint is called, the method linked to that specific endpoint is executed.

A special decorator called `http` is utilized to define the supported **Http Method** for your endpoint, along with specifying the path.

Here's an example from the created project:

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

In the provided code, the `@http.get` decorator is used to specify that our endpoint supports only the **GET** `Http Method`, and the parameter value "/" is passed to set the endpoint path.

So, when we access `http://localhost:4000/`, the `index` method is executed, and we see an HTML page in the response.

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

    //hightlight-start
    @http.get("/hello-world")
    async helloWorld(){
        return textResult("Hello World");
    }
    //highlight-end
}
```

Now, navigate to the URL [http://localhost:4000/hello-world](http://localhost:4000/hello-world).

For additional details on routes, please refer to the [routes documentation](./route.md).

### Bootstrapping

Bootstrapping in Fort.js is straightforward. The minimum requirement involves defining your controller routes and providing them to Fort.js.

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

Read the [Bootstrapping documentation](/docs/setup.md) for more detailed information.
---

We hope this provides you with a basic understanding of Fortjs. If you have any doubts or specific requirements, please feel free to create a discussion or issue on [GitHub](https://github.com/ujjwalguptaofficial/fortjs).

-----

## Resources

* [Fortjs examples](https://github.com/ujjwalguptaofficial/fortjs-examples)

* [Rest Api Example] (https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/rest)

* [Article of Creating REST API using Typescript](https://medium.com/fortjs/rest-api-using-typescript-94004d9ae5e6)

* [Article of Creating REST API using es6](https://medium.com/fortjs/rest-api-in-nodejs-using-es6-227765440b2b)

* [MongoDb Example](https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/mongodb)

* [Crud operation using html form](https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/crud)
