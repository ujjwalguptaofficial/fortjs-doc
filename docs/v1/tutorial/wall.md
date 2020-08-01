---
Title: "Wall"
Keywords: "wall, component, options, fortjs, node"
Description: "Description about wall components & its uses"
---

Wall is security layer on top of your app. It controls whether a request should be allowed to enter inside the app. It can also be used to do some tasks and pass data inside app.

There can be multiple wall for an app & all walls are called in the same order as they are defined.

Wall has two events -

* **onIncoming** - called when a request wants to enter inside the fort (app). If this events returns null means request is allowed to enter otherwise rejects with the result returned.

    If there are multiple walls then "onIncoming" is called in order as they are defined.
* **onOutgoing** - called when a request is about to leave. This is an optional event & Result returned from this event is ignored. onOutgoing is called with returned response & based on that response you can take actions, even you can modify the whole result.

    If there are multiple walls then "onOutgoing" is called in reverse order as they are defined.


A wall have access to following - 

* Request - [request](/tutorial/http-request)
* Response - [response](/tutorial/http-response)
* Cookie - [cookie](/tutorial/cookie)
* Session - [session](/tutorial/session)
* Query string data - [query](/tutorial/query)
* Data from other components - [data](/tutorial/data)

<br>
# Creating wall

<br>
Wall is a class which - Extends the class "Wall" from fortjs.

```
import { Wall } from "fortjs"

export class AppWall extends Wall {
    async onIncoming() {
        console.log("request is asking for entering into the fort");
        if (some condition) {
            // block request
            return textResult("This request is blocked by wall");
        } else {
            // allow request
            return null;
        }

    }

    async onOutgoing(result) {
        // can be used to set headers, log events, modify returning result etc
        console.log("request finished with result", result);
    }
}
```

Now you have defined the wall but in order to use this wall, you need to assign it to App. Open app.ts/.js file and add your wall to the walls array.

```
import { Fort } from "fortjs";
import { UserController } from "./controllers";
import { AppWall } from "./walls/app_wall";

class App extends Fort {
    constructor() {
        super();
        //add routers
        this.routers = [{
            controller: UserController,
            path: "/user"
        }]
        // adding AppWall to the walls array
        this.walls = [AppWall]
    }
}

```

## How to modify returning result

```
class AppWall extends Wall {
    async onIncoming() {
        return null;
    }

    async onOutgoing(result) {
       Object.assign(result, textResult("result modified by wall outgoing");
    }
}
```