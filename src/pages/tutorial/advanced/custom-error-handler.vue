<template><Layout title='Custom Error Handler' description='How to customize error in nodejs using fortjs' keywords='customize error, handle error, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/advanced/custom-error-handler.md'><p>In order to customize the error response , you need to create a class which extend class ErrorHandler and override the available methods.</p>
<p>e.g - Let's say you want to customize the error response for status code - 404.</p>
<pre><code>import { ErrorHandler } from "fortjs";

export class CustomErrorHandler extends ErrorHandler {
    async onNotFound(url){
       return  htmlResult(`&lt;h1&gt;The resource ${url} does not exist.&lt;/h1&gt;`);
    }
}
</code></pre>
<p>So basically it returns a customized http response similar to worker.</p>
<p>Now you have created the class, you need to inform fortjs about this.</p>
<pre><code>import { Fort } from "fortjs";
import { UserController } from "./controllers";
import { CustomErrorHandler } from "./extra/custom_error_handler";


//add routes
Fort.routes = [{
    controller: UserController,
    path: "/user"
}];

Fort.errorHandler = CustomErrorHandler;    

Fort.create();
</code></pre>
<p>The methods available for override are - </p>
<ul>
<li>onServerError(ex: IException): Promise&lt;HttpResult | HttpFormatResult&gt;</li>
<li>onBadRequest(ex: IException): Promise&lt;HttpResult | HttpFormatResult&gt;</li>
<li>onForbiddenRequest(): Promise&lt;HttpResult | HttpFormatResult&gt;</li>
<li>onNotAcceptableRequest(): Promise&lt;HttpResult | HttpFormatResult&gt;</li>
<li>onMethodNotAllowed(): Promise&lt;HttpResult | HttpFormatResult&gt;</li>
<li>onNotFound(url: string): Promise&lt;HttpResult | HttpFormatResult&gt;</li>
</ul>
<p><br>
You can see some methods also have parameters. So its upto you how you want to use those params.</p>
<p>e.g - for onServerError (Status code - 500), you should not show the exception information to users but you should definitely log those errors.</p>
<p><strong>Note:-</strong> It is highly recommended to create a custom error handler and atleast override the onServerError method and log the exception, otherwise you won't have any information regarding the exception occured.</p></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        