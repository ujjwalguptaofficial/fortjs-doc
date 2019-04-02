---
Title: "Socket.io"
---

Socket.IO enables real-time, bidirectional and event-based communication.
It works on every platform, browser or device, focusing equally on reliability and speed.

For more info about socke.io, visit - https://socket.io/

socket.io can be injected into fortjs very easily. Let's see how ?

Fortjs exposes its httpserver object and this object can be used to initiate socket.io - 

```
import { Fort, MustacheViewEngine } from 'fortjs';
import { routes } from './routes';
import * as path from "path";
import * as socketIo from "socket.io";

export class App extends Fort {
    constructor() {
        super();
        this.routes = routes;
        this.viewEngine = MustacheViewEngine;
    }

    initSocketIo() {
        const io = socketIo(this.httpServer);
        io.on("connection", (socket) => {
            console.log("user connected");
            socket.on('disconnect', () => {
                console.log('user disconnected');
            });

            socket.on('chat message', (msg) => {
                console.log(`message is ${msg}`);
            });
        });
    }
}

```

We have created a method - "initSocketIo" which will initializes the socket.io. This uses `httpServer` object.

Now you need to call "initSocketIo" - you should call it after the app has been initialized like this :

```
import { App } from "./app";
import * as path from "path";

const app = new App();
app.create({
    defaultPath: "default",
    folders: [{
        alias: "/",
        path: path.join(__dirname, "../static")
    }]
}).then(() => {
    console.log("Your fort is located at address - localhost:4000");
    app.initSocketIo();
}).catch(err => {
    console.error(err);
})
```