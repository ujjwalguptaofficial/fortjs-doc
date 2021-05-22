<template><Layout title='Bootstrap' description='fortjs bootstrap information & how to bootstrap' keywords='bootstrap, initiate, start, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/bootstrap.md'><pre><code>import { Fort } from "fortjs";
import { UserController } from "./controllers";

// add routes
Fort.routes = [{
    controller: UserController,
    path: "/user"
}]

// initiate app
Fort.create().then(()=&gt;{
    Fort.logger.info("App is started");
})
</code></pre>
<h2 id="configuringapp">Configuring App</h2>
<p><br>
FortJs provides different configurations like - port, folders, appName etc.</p>
<pre><code>import { Fort } from "fortjs";
import { UserController } from "./controllers";

Fort.appName = "MyAwesomeApp";
Fort.port = 8080
Fort.routes = [{
    controller: UserController,
    path: "/user"
}]
Fort.create();
</code></pre>
<h3 id="configurationlist">Configuration list</h3>
<p><br></p>
<ol>
<li>appName - name of application - default is fort. Visible in header and cookie. Change name if you dont want any one to know the framework name.</li>
<li>port - Port at which app will listen, default - 4000</li>
<li>logger - </li>
<li>viewPath - Views folder location. By default it is - views.</li>
<li>httpServer -  Confiure http server</li>
<li>folders - folders which should be visible to requests. By default nothing is allowed.</li>
<li>eTag - eTag Settings</li>
<li>logger -  Supply your custom logger.</li>
<li>walls - List of walls</li>
<li>customErrorHandler - A custom error handler class which will be used when framework detects error.</li>
</ol></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        