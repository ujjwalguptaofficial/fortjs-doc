<template><Layout title='Http Request' description='Type http request member description' keywords='http request, type, options, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/type/http-request.md'><p>The type HttpRequest is used for accessing request resources like url, headers etc.</p>
<pre><code>type HttpRequest = {
    url: string;
    method: HTTP_METHOD;
    headers: IncomingHttpHeaders;
    connection: net.Socket;
}
</code></pre></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        