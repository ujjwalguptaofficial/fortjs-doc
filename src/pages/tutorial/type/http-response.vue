<template><Layout title='Http Response' description='Type HttpResponse member description' keywords='http response, type, options, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/type/http-response.md'><pre><code>type HttpResponse = {
    setHeader(name: string, value: number | string | string[]): void;
    getHeader(name: string): number | string | string[] | undefined;
    getHeaders(): OutgoingHttpHeaders;
    getHeaderNames(): string[];
    hasHeader(name: string): boolean;
    removeHeader(name: string): void;
}
</code></pre></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        