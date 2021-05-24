<template><Layout title='Socket.io' description='How to use socket.io in fortjs' keywords='socket, integration, options, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/advanced/socket-io.md'><p>Socket.IO enables real-time, bidirectional and event-based communication.
It works on every platform, browser or device, focusing equally on reliability and speed.</p>
<p>For more info about socke.io, visit - https://socket.io/</p>
<p>socket.io can be injected into fortjs very easily. Let's see how ?</p>
<p>Fortjs exposes its httpserver object and this object can be used to initiate socket.io - </p>
<pre><code>import { Fort } from "fortjs";
import { routes } from "./routes";
import * as socketIo from "socket.io";

const initSocketIo = () =&gt; {
    const io = socketIo(Fort.httpServer);
    io.on("connection", (socket) =&gt; {
        Fort.logger.info("user connected");
        socket.on('disconnect', () =&gt; {
            Fort.logger.info('user disconnected');
        });

        socket.on('chat message', (msg) =&gt; {
            Fort.logger.info(`message is ${msg}`);
        });
    });
}

Fort.routes = routes;
Fort.create();
</code></pre>
<p>We have created a method - "initSocketIo" which will initializes the socket.io. This uses <code>httpServer</code> object.</p></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        