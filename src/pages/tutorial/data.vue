<template><Layout title='Data' description='How to pass & access components data' keywords='data, components, options, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/data.md'><p><code>data</code> is class member of Wall, Guard , Shield and Controller. It is used to transfer data from one component to another and finally to worker.</p>
<p>e.g - Let's see how we can pass data from wall to controller - </p>
<h3 id="wall">Wall</h3>
<pre><code>import { Wall, textResult } from "fortjs";
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
</code></pre>
<p>The above wall is using <code>data</code> to pass ip to other components.</p>
<h3 id="accessipaddresspassdedfromwallincontroller">Access ip address passded from Wall in Controller</h3>
<pre><code>import { Controller, textResult, DefaultWorker } from "fortjs";

export class DefaultController extends Controller {

    @DefaultWorker()
    async default() {
        // access ip 
        const ip = this.data.ip;
        return textResult(`Ip is ${ip}`);
    }
}
</code></pre></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        