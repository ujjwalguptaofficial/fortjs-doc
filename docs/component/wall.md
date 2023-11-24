---
sidebar_position: 1
title: "Wall"
keywords: [wall, HTTP Request Control, Gatekeeper, CORS Headers]
description: "A Wall in Fort.js acts as the initial gatekeeper for incoming HTTP requests. It controls whether a request should be allowed or rejected, and it can execute tasks and pass data to the Controller. Walls are essential components for implementing global application logic, such as setting CORS headers or counting requests. They provide a modular and reusable way to structure the initial handling of incoming requests."
---

# Wall

A **Wall** serves as the primary gatekeeper for every HTTP request in a Fort.js application. It determines whether a request should be allowed or rejected. Additionally, walls can perform tasks and pass data to the other Components.

In summary, Walls play a crucial role as the initial layer of a Fortjs application, controlling global aspects, executing tasks, and facilitating seamless data transfer to subsequent layers.

## Use cases 

* Setting cors 
* Counting no of requests
* Calculating some global data like ip address of the client

## Wall members

A wall has following member- 

* [Request](/docs/types/http-request.md)
* [Response](/docs/types/http-response.md)
* [Cookie](/docs/concepts/cookie.md)
* [Session](/docs/concepts/session.md)
* [Query data](/docs/concepts/query.md)
* [Data from other components](/docs/concepts/data.md)

## Wall Events

A Wall in Fortjs has two essential events:

### onIncoming

- **Description:**
  - Called when a request is initiated.
  - If this event returns `null`, it means the request is allowed to enter. Otherwise, it is rejected with the returned result.

- **Sequential Execution:**
  - If there are multiple walls, the `onIncoming` event is called in the order they are defined.

### onOutgoing

- **Description:**
  - Called when a request has been executed from component lifecycles.
  - This event is optional, and the result returned from this event is ignored.
  - `onOutgoing` is invoked with the returned response, allowing you to perform actions such as adding/removing headers or modifying the result.

- **Sequential Execution:**
  - If there are multiple walls, the `onOutgoing` event is called in reverse order from how they are defined.

These events provide hooks for executing custom logic during the incoming and outgoing phases of a request's lifecycle. They enhance the flexibility of Walls in managing the flow and behavior of your Fort.js application.


## Creating wall

A Wall is a class which extends the class "Wall" from fortjs.

```js
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

To use your custom wall, open the `app.ts`` (or `app.js``) file and add your wall to the `walls` array.

```js
import { Fort } from "fortjs";
import { UserController } from "./controllers";
import { AppWall } from "./walls/app_wall";

//add routes
Fort.routes = [{
    controller: UserController,
    path: "/user"
}]

//highlight-start
// adding AppWall to the walls array
Fort.walls = [AppWall]
//highlight-end

```

## Use case examples

### Pass ip address of the incoming request to other components

```js
import { Wall, textResult, HttpResult, assign } from "fortjs";

export class RequestLogger extends Wall {

    private getIP(req) {
        const ip = (req.headers['x-forwarded-for'] || '').split(',').pop() ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;
        return ip;
    }

    async onIncoming() {
        // highlight-start
        this.data.ip = this.getIP(this.request);
        // highlight-end
    }
}
```

In the above snippet, we are evaluating the IP address of the incoming request inside the onIncoming method of the wall. The obtained IP address is then set to the data property of the wall. This data value is passed to subsequent components, including controller methods, in the request flow.

### How to modify returning result

The returning result of the request can be modified in `onOutgoing` method by replacing with a custom http result.

```js
class AppWall extends Wall {
    async onIncoming() {
        return null;
    }

    //highlight-start
    async onOutgoing(result) {
       Object.assign(result, textResult("result modified by wall outgoing");
    }
    //highlight-end
}
```