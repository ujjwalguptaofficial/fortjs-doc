---
sidebar_position: 4
title: "Data"
keywords: [data, components, options, fortjs, node]
description: "How to pass & access components data"
---

# Data

`data` is class member of Wall, Guard , Shield and Controller. It is used to transfer data from one component to another till worker.

e.g - Let's see how we can pass data from **Wall** to **Controller** - 

## Pass data from Wall

```javascript
import { Wall, textResult } from "fortjs";
export class RequestLogger extends Wall {

    private getIP(req) {
        var ip = (req.headers['x-forwarded-for'] || '').split(',').pop() ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress
        return ip;
    }

    async onIncoming() {
        // here we are sending ip to other components
        this.data.ip = this.getIP(this.request);

        return null;
    }
}
```

The above wall is using `data` to pass ip to other components.

## Access data passed from Wall in Controller

```javascript
import { Controller, textResult, defaultWorker } from "fortjs";

export class DefaultController extends Controller {

    @defaultWorker()
    async default() {
        // access ip 
        const ip = this.data.ip;
        return textResult(`Ip is ${ip}`);
    }
}
```