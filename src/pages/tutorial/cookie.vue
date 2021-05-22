<template><Layout title='Cookie' description='How to access Http Cookie in node using fortjs' keywords='cookie, http, manipulation, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/cookie.md'><p><code>cookie</code> is class member of Wall, Guard , Shield and Controller.</p>
<p>Let's see how we can use cookie -</p>
<pre><code>import { Controller, DefaultWorker textResult, viewResult } from "fortjs";
import { HttpCookie } from "fortjs";

export class DefaultController extends Controller {
    @DefaultWorker()
    async default() {

        // check exist
        const isCookieExist = this.cookie.isExist('cookie_name');

        // get cookie
        const cookie = this.cookie.getCookie('cookie_name');

        //add cookie
        const newCookie = new HttpCookie('new_cookie','cookie_value');
        this.cookie.addCookie(newCookie);

        //remove cookie
        this.cookie.removeCookie('cookie_name');

        return textResult("Hey, we have tested cookie successfully");
    }
}
</code></pre>
<p>In the same way you can access cookie in Wall, Guard and Shield.</p></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        