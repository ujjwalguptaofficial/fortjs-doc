---
Title: "Data"
Keywords: "data, components, options, fortjs, node"
Description: "How to pass & access components data"
---


`data` is class member of Wall, Guard , Shield and Controller. It is used to transfer data from one component to another and finally to worker.

e.g - Let's see how we can pass data from wall to controller - 

### Wall

```
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

### Controller

```
import { Controller, textResult, DefaultWorker } from "fortjs";

export class DefaultController extends Controller {

    @DefaultWorker()
    async default() {
        // access ip 
        const ip = this.data.ip;
        return textResult(`Ip is ${ip}`);
    }
}
```