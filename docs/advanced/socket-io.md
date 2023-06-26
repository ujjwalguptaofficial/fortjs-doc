---
title: "Socket.io"
keywords: "socket, integration, options, fortjs, node"
description: "How to use socket.io in fortjs"
---

# Socket.io Configuration

Socket.IO enables real-time, bidirectional and event-based communication.
It works on every platform, browser or device, focusing equally on reliability and speed.

For more info about socke.io, visit - https://socket.io/

socket.io can be injected into fortjs very easily. Let's see how ?

Fortjs exposes its httpserver object and this object can be used to initiate socket.io - 

```
import { Fort } from "fortjs";
import { routes } from "./routes";
import * as socketIo from "socket.io";

const initSocketIo = () => {
    const io = socketIo(Fort.httpServer);
    io.on("connection", (socket) => {
        Fort.logger.info("user connected");
        socket.on('disconnect', () => {
            Fort.logger.info('user disconnected');
        });

        socket.on('chat message', (msg) => {
            Fort.logger.info(`message is ${msg}`);
        });
    });
}

Fort.routes = routes;
Fort.create();

```

We have created a method - "initSocketIo" which will initializes the socket.io. This uses `httpServer` object.