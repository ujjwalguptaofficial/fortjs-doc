<template><Layout title='HttpResult' description='Type HttpResult member description' keywords='http result, type, options, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/type/http-result.md'><p>The type <code>httpResult</code> is used by workers to return the result. </p>
<p>Structure of httpResult is - </p>
<pre><code>type HttpResult = {
    statusCode: HTTP_STATUS_CODE;
    responseData: any;
    contentType: MIME_TYPE;
    file ? : FileResultInfo;
    shouldRedirect ? : boolean;
};
</code></pre>
<p>FortJs provides some helper method which return result of type HttpResult. These are - </p>
<ul>
<li>textResult - used to return text result.</li>
<li>jsonResult - used to return json result.</li>
<li>htmlResult - used to return html result.</li>
<li>viewResult - used to return a view.</li>
<li>fileResult - used to return a file which will be rendered by browser.</li>
<li>downloadResult - used to return a file which will be downloaded by browser.</li>
<li>redirectResult - used to return a result which will tell browser to redirect url.</li>
</ul>
<p><br></p>
<h2 id="example">Example</h2>
<h3 id="retruningastringusinghttpresult">Retruning a string using httpResult</h3>
<pre><code>import { Controller, defaultWorker, HTTP_STATUS_CODE, MIME_TYPE  } from "fortjs";

export class UserController extends Controller {

    @defaultWorker()
    async default () {
       return {
            statusCode: HTTP_STATUS_CODE.Ok,
            responseData: "This is default worker for section user",
            contentType: MIME_TYPE.Text
        };
    }
}
</code></pre>
<h3 id="retruningastringusinghelpermethodtextresult">Retruning a string using helper method - textResult</h3>
<pre><code>import { Controller, defaultWorker, textResult } from "fortjs";

export class UserController extends Controller {

    @defaultWorker()
    async default () {
       return textResult("This is default worker for section user");
    }
}
</code></pre>
<p>You can see - helper methods make things easy and looks pretty cool.</p></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        