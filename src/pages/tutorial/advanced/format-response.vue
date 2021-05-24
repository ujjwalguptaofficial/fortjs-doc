<template><Layout title='Format Response' description='Formatting response in nodejs using fortjs' keywords='format response, multiple response, mime type, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/advanced/format-response.md'><p>You can customize the format of your response and based on <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation">content negotiation</a> fortjs select the appropriate response. If an appropriate response is not found then a response with status code - 406 is returned.</p>
<p>A result of type - <a href="/tutorial/type/http-format-result">HttpFormatResult</a> is used to return the response with different format.</p>
<p>Let's see an example -</p>
<pre><code>import { Controller, DefaultWorker, HttpFormatResult, HTTP_STATUS_CODE, MIME_TYPE} from "fortjs";

export class RandomController extends Controller {

    @DefaultWorker()
    async format() {
        const result = {
            statusCode: HTTP_STATUS_CODE.Ok,
            responseFormat: {
                [MIME_TYPE.Json]: () =&gt; {
                    return { message: "hello world" }
                },
                [MIME_TYPE.Html]: () =&gt; {
                    return "&lt;p&gt;hello world&lt;/p&gt;"
                },
                [MIME_TYPE.Text]: () =&gt; {
                    return "hello world"
                }
            }
        } as HttpFormatResult;
        return result;
    }
}
</code></pre>
<p>In the above code - we are returning three format (html, json, text).</p></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        