<template><Layout title='Http Format Result' description='HttpFormatResult type description' keywords='http format result, type, options, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/type/http-format-result.md'><p>The type HttpFormatResult is used for formatting http response.</p>
<pre><code>type HttpFormatResult = {
    statusCode: HTTP_STATUS_CODE;
    responseFormat?: {
        [type: string]: () =&gt; any;
    }
}
</code></pre></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        