---
sidebar_position: 8
title: "Bootstrap"
keywords: [bootstrap, setup, initiate, start, fortjs, node]
description: "fortjs bootstrap information & how to bootstrap"
---

# Setup

:::info
Bootstrapping in the context of software development refers to the process of initializing and preparing a system or application for execution. It involves setting up the necessary components, configurations, and resources to ensure that the system is in a ready state to start processing requests or tasks.
:::

Bootstrapping in Fort.js is straightforward. The minimum requirement involves defining your controller routes and providing them to Fort.js.

```js
import { Fort } from "fortjs";
import { UserController } from "./controllers";

// add routes
Fort.routes = [{
    controller: UserController,
    path: "/user"
}]

// initiate app
Fort.create().then(()=>{
    Fort.logger.info("App is started");
})
```

## Configuring App

FortJs provides different configurations like - port, folders, appName etc.

```js
import { Fort } from "fortjs";
import { UserController } from "./controllers";

Fort.appName = "MyAwesomeApp";
Fort.port = 8080
Fort.routes = [{
    controller: UserController,
    path: "/user"
}]
Fort.create();
```

### Configuration options

* **appName** - name of application - default is fort. Visible in header and cookie. Change name if you dont want any one to know the framework name.
* **port** - Port at which app will listen, default - 4000
* **logger** - Supply your custom logger.
* **viewPath** - Views folder location. By default it is - views.
* **folders** - folders which should be visible to requests. By default nothing is allowed.
* **eTag** - eTag Settings
* **walls** - List of walls
* **customErrorHandler** - A custom error handler class which will be used when framework detects error.
* **shouldParseBody** - Whether to parse http body data in post request or not. It is boolean value and default value is true.
* **shouldParseCookie** - Whether to parse cookie or not. It is boolean value and default value is true.
