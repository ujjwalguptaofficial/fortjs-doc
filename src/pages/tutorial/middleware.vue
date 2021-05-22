<template><Layout title='Middleware' description='How to use middleware pattern in fortjs.' keywords='middleware, pattern, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/middleware.md'><p>Middleware is a technique which is heavily used in nodejs frameworks like express etc. It is based on chain of responsibility pattern means one middleware will call another.</p>
<p class="highlight">Middleware are methods which has parameters - request, response and next callback.</p>
<h2 id="howtouseinfortjs">How to use in fortjs</h2>
<p><br>FortJs provides different types of components which are in hierarchy and every component has access to request and response object. Thus you can use any middleware inside the component and you have the control how to use &amp; in what order.</p>
<p>Let's see how to use <a href="https://www.npmjs.com/package/helmet">helmetjs</a> inside component wall - </p>
<pre><code>import { Wall, textResult } from "fortjs";
import * as helmet from 'helmet';
export class HelmetWall extends Wall {
    async onIncoming() {
        const result = await this.callMiddleWare(helmet());
    }

    callMiddleWare(middleWare) {
        return new Promise((res, rej) =&gt; {
            middleWare(this.request, this.response, res);
        });
    }
}
</code></pre>
<p>In a similar way other middleware can be used in any component.</p>
<p>You can download example from here - <a href="https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/middleware">Middleware example</a></p>
<p>For detailed information visit this article - <a href="https://medium.com/fortjs/middleware-pattern-in-fortjs-7329cc7cf499">https://medium.com/fortjs/middleware-pattern-in-fortjs-7329cc7cf499</a> written by <a href="https://twitter.com/ujjwal_kr_gupta">Ujjwal Gupta</a></p></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        