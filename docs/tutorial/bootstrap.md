---
Title: "Bootstrap"
---

In order to bootstrap the app, you need to perform two steps - 

* Create a class which will extend the class `Fort` from 'fortjs'.
* Create an instance of class and call the method create.

<br>
Let's see an example - 

```
import { Fort } from "fortjs";
import { UserController } from "./controllers";

class App extends Fort {
    constructor() {
        super();
        //add routers
        this.routers = [{
            controller: UserController,
            path: "/user"
        }]
    }
}

new App().create();
```

## Configuring App

<br>
FortJs provides different configurations like - port, folders, appName etc. The configuration is supplied to create method and is type of [appOption](/tutorial/app-option).

```
import { Fort } from "fortjs";
import { UserController } from "./controllers";

class App extends Fort {
    constructor() {
        super();
        //add routers
        this.routers = [{
            controller: UserController,
            path: "/user"
        }]
    }
}

new App().create({
    appName: "MyAwesomeApp"
    port: 8080
});
```

<br>
## Structure - 

<br>
```
class Fort {
    routes: Route[];

    walls: Array<typeof Wall>;

    httpServer: http.Server;
    /**
    * view engine use to render the view
    *
    * @type {typeof ViewEngine}
    */
    viewEngine?: typeof ViewEngine;

    /**
     * sessionProvider class, default - MemorySessionProvider
     *
     * @type {typeof SessionProvider}
     */
    sessionProvider?: typeof SessionProvider;

    /**
     * Custom error handler class
     *
     * @type {typeof ErrorHandler}
     */
    errorHandler?: typeof ErrorHandler;

    create(option: AppOption): Promise<any>;
    
    destroy(): Promise<any>;
}
```