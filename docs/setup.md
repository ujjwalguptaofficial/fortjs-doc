---
sidebar_position: 5
title: "Bootstrap"
keywords: "bootstrap, setup, initiate, start, fortjs, node"
description: "fortjs bootstrap information & how to bootstrap"
---

# Setup

Bootstrapping fortjs is very easy. The minimal requirement is to define a route - that's all. After that you can use different configuration to customize as per your need. 
 

```
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

```
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

### Configuration list

* **appName** - name of application - default is fort. Visible in header and cookie. Change name if you dont want any one to know the framework name.
* **port** - Port at which app will listen, default - 4000
* **logger** - Supply your custom logger.
* **viewPath** - Views folder location. By default it is - views.
* **folders** - folders which should be visible to requests. By default nothing is allowed.
* **eTag** - eTag Settings
* **walls** - List of walls
* **customErrorHandler** - A custom error handler class which will be used when framework detects error.