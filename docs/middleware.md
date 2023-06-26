---
sidebar_position: 10
title: "Middleware"
keywords: "middleware, pattern, fortjs, node"
description: "How to use middleware pattern in fortjs."
---

# Middleware

Middleware is a technique which is heavily used in nodejs frameworks like express etc. It is based on chain of responsibility pattern means one middleware will call another.

>Middleware are methods which has parameters - request, response and next callback.

## How to use in fortjs 

every component has access to request and response object. Thus you can use any middleware inside the component and you have the control how to use & in what order.

### Using helmet

Let's see how to use [helmetjs](https://www.npmjs.com/package/helmet) inside component wall - 

```javascript
import { Wall, textResult } from "fortjs";
import * as helmet from 'helmet';
export class HelmetWall extends Wall {
    async onIncoming() {
        const result = await this.callMiddleWare(helmet());
    }

    callMiddleWare(middleWare) {
        return new Promise((res, rej) => {
            middleWare(this.request, this.response, res);
        });
    }
}
```

In a similar way other middleware can be used in any component.

You can download example from here - [Middleware example](https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/middleware)

For detailed information visit this article - [https://medium.com/fortjs/middleware-pattern-in-fortjs-7329cc7cf499](https://medium.com/fortjs/middleware-pattern-in-fortjs-7329cc7cf499) written by [Ujjwal Gupta](https://twitter.com/ujjwal_kr_gupta)

