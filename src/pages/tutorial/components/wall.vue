<template><Layout title='Wall' description='Description about wall components & its uses' keywords='wall, component, options, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/components/wall.md'><p>Wall is security layer on top of your app. It controls whether a request should be allowed to enter inside the app. It can also be used to do some tasks and pass data inside app.</p>
<p>There can be multiple wall for an app &amp; all walls are called in the same order as they are defined.</p>
<p>Wall has two events -</p>
<ul>
<li><p><strong>onIncoming</strong> - called when a request wants to enter inside the fort (app). If this events returns null means request is allowed to enter otherwise rejects with the result returned.</p>
<p>If there are multiple walls then "onIncoming" is called in order as they are defined.</p></li>
<li><p><strong>onOutgoing</strong> - called when a request is about to leave. This is an optional event &amp; Result returned from this event is ignored. onOutgoing is called with returned response &amp; based on that response you can take actions, even you can modify the whole result.</p>
<p>If there are multiple walls then "onOutgoing" is called in reverse order as they are defined.</p></li>
</ul>
<p>A wall have access to following - </p>
<ul>
<li>Request - <a href="/tutorial/http-request">request</a></li>
<li>Response - <a href="/tutorial/http-response">response</a></li>
<li>Cookie - <a href="/tutorial/cookie">cookie</a></li>
<li>Session - <a href="/tutorial/session">session</a></li>
<li>Query string data - <a href="/tutorial/query">query</a></li>
<li>Data from other components - <a href="/tutorial/data">data</a></li>
</ul>
<p><br></p>
<h1 id="creatingwall">Creating wall</h1>
<p><br>
Wall is a class which - Extends the class "Wall" from fortjs.</p>
<pre><code>import { Wall } from "fortjs"

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
</code></pre>
<p>Now you have defined the wall but in order to use this wall, you need to assign it to App. Open app.ts/.js file and add your wall to the walls array.</p>
<pre><code>import { Fort } from "fortjs";
import { UserController } from "./controllers";
import { AppWall } from "./walls/app_wall";

//add routes
Fort.routes = [{
    controller: UserController,
    path: "/user"
}]

// adding AppWall to the walls array
Fort.walls = [AppWall]
</code></pre>
<h2 id="howtomodifyreturningresult">How to modify returning result</h2>
<pre><code>class AppWall extends Wall {
    async onIncoming() {
        return null;
    }

    async onOutgoing(result) {
       Object.assign(result, textResult("result modified by wall outgoing");
    }
}
</code></pre></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        