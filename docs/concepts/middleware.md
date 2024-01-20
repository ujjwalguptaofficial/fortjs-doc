---
sidebar_position: 10
title: "Middleware"
keywords: [Middleware, fortjs, node, Middleware, Helmet.js, Fort.js Middleware Example]
description: "Explore how to use middleware, including Helmet.js, in Fort.js for securing your API."
---

# Middleware

Middleware is a prevalent design pattern extensively utilized in Node.js frameworks such as Express, among others. It is rooted in the Chain of Responsibility pattern, wherein one middleware calls another in a sequential manner.

> Middleware consists of methods with parameters - request, response, and a next callback.

# How to use in Fort.js

Fort.js provides a `middleware` property, enabling the execution of various middleware functions.

## Using Helmet

Let's explore how to incorporate [Helmet.js](https://www.npmjs.com/package/helmet).

> Helmet is a middleware library that allows you to secure your API by setting various HTTP headers.

The Helmet code needs to be executed for every request, and that's why in Fort.js, we need to use the [Wall](/docs/component/wall.md) components.

Let's create a wall where we will execute the `helmet` middleware.

```javascript
import { Wall, textResult } from "fortjs";
import * as helmet from 'helmet';

export class HelmetWall extends Wall {

    async onIncoming() {
        // Execute helmet middleware
        const result = await this.middleWare(helmet()).execute();
    }
}
```

To use this wall, add it to the `walls` property of `Fort`:

```javascript
import { Fort } from "fortjs";

Fort.walls = [HelmetWall];
```

Similarly, other middleware can be employed in any component.

You can access the example [here](https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/middleware).