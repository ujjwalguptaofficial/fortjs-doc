<template><Layout title='Body' description='fortjs body member details' keywords='request, post, body, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/body.md'><p><code>body</code> is class member of  Guard and Controller. It is used to access body data sent in http post request. </p>
<pre><code>import { Controller, viewResult, Worker, HTTP_METHOD, jsonResult, htmlResult, textResult, DefaultWorker, redirectResult } from "fortjs";
import { UserService } from "../services/user_service";

export class DefaultController extends Controller {

    @Worker(HTTP_METHOD.Post)
    async login() {
        // access post data
        const userId = this.body.userId;
        const pwd = this.body.password;

        if (userId != null &amp;&amp; pwd != null) {
            const userService = new UserService();
            const user = userService.getUser(userId);
            if (user != null &amp;&amp; user.password === pwd) {
                this.session.set('userId', userId);
                return textResult(`Authenticated`);
            }
            else {
                const result = textResult("Invalid credential");
                return result;
            }
        }
        else {
            const result = textResult("Invalid credential");
            return result;
        }
    }
}
</code></pre>
<p>By default fortjs parses the body data. But it can be turned off by setting option - <code>shouldParsePost</code> . Please check <a href="/tutorial/bootstrap">bootstrap</a> doc for more info.</p></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        