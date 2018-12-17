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

Structure of class Fort is - 

<br>
## Configuring App

<br>
FortJs provides different configurations like - port, customErrorHandler etc. The configuration is supplied to create method and is type of [appOption](app-option).

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
    port: 8080,
    foldersAllowed: ['contents', 'static']
});
```

