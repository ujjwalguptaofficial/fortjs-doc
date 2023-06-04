---
sidebar_position: 5
Title: "Bootstrap"
Keywords: "bootstrap, initiate, start, fortjs, node"
Description: "fortjs bootstrap information & how to bootstrap"
---
 

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

<br/>
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
<br/>
1. appName - name of application - default is fort. Visible in header and cookie. Change name if you dont want any one to know the framework name.
2. port - Port at which app will listen, default - 4000
3. logger - 
4. viewPath - Views folder location. By default it is - views.
5. httpServer -  Confiure http server
6. folders - folders which should be visible to requests. By default nothing is allowed.
7. eTag - eTag Settings
8. logger -  Supply your custom logger.
9. walls - List of walls
10. customErrorHandler - A custom error handler class which will be used when framework detects error.