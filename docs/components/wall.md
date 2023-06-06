---
Title: "Wall"
Keywords: "wall, component, options, fortjs, node"
Description: "Description about wall components & its uses"
---

# Wall

Wall is a top layer for every http request. It controls whether a request should be allowed or not. It can also be used to do some tasks and pass data inside Controller.

There can be multiple wall for an app & all walls are called in the same order as they are defined.

A wall have access to following - 

* [Request](/docs/types/http-request.md)
* [Response](/docs/types/http-response.md)
* [Cookie](/docs/concepts/cookie.md)
* [Session](/docs/concepts/session.md)
* [Query data](/docs/concepts/query.md)
* [Data from other components](/docs/concepts/data.md)

## Events

Wall has two events -

### onIncoming

It is called when a request is initiated. If this events returns null means request is allowed to enter otherwise rejected with the result returned.

If there are multiple walls then "onIncoming" is called in order as they are defined.

### onOutgoing 

It called when a request has been executed from component lifecyles. 

This is an optional event & result returned from this event is ignored. `onOutgoing` is called with returned response & based on that response you can take actions such as -

* Adding/Removing Header
* Modifying result

If there are multiple walls then "onOutgoing" is called in reverse order as they are defined.



## Creating wall

Wall is a class which extends the class "Wall" from fortjs.

```javascript
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

Let's use this wall - open app.ts/.js file and add your wall to the walls array.

```
import { Fort } from "fortjs";
import { UserController } from "./controllers";
import { AppWall } from "./walls/app_wall";

//add routes
Fort.routes = [{
    controller: UserController,
    path: "/user"
}]

// adding AppWall to the walls array
Fort.walls = [AppWall]

```

### How to modify returning result

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