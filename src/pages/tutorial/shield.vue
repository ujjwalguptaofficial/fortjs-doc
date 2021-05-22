<template><Layout title='Shield' description='Description about Shield component & how to use' keywords='shield, component, modular, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/shield.md'><p>Shiled is security layer on top of Section (Controller). It controls whether a request should be allowed to enter inside the Section or not. It can also be used for doing some task before passing it to workers.</p>
<p>e.g - Consider a case - where a controller "Admin" is only allowed if the request is authenticated. You can create a shield which will check for the conditions and if it does not satisfy the conditions, you can just reject it.</p>
<p>There can be multiple shield for a controller &amp; every shield is called when a request wants to access the particular controller in the same order as they are defined.</p>
<p>A shiled has following member - </p>
<ul>
<li>Request - <a href="/tutorial/http-request">request</a></li>
<li>Response - <a href="/tutorial/http-response">response</a></li>
<li>Cookie - <a href="/tutorial/cookie">cookie</a></li>
<li>Session - <a href="/tutorial/session">session</a></li>
<li>Query string data - <a href="/tutorial/query">query</a></li>
<li>Data from other components - <a href="/tutorial/data">data</a></li>
<li>Target Worker Name - <a href="#">workerName</a></li>
</ul>
<p><br></p>
<h1 id="creatingshield">Creating shield</h1>
<p><br>
Shield is a class which extends the class "Shield" from fortjs.</p>
<h2 id="example">Example</h2>
<pre><code>import { Shield, textResult, redirectResult} from "fortjs";

export class AuthenticationShield extends Shield {
    async protect() {

        const isExist = await this.session.isExist('userId');
        if (exist) { // user is authenticated so allow
            return null;
        } else { //user is not authenticated, so not allow
            return redirectResult("/default/login");
        }

    }
}
</code></pre>
<p>Now you have defined the shield but in order to use this shield, you need to assign it to some controller.</p>
<pre><code>import { Controller,Shields } from "fortjs";
import { AuthenticationShield } from "location where shield is defined";

@Shields(AuthenticationShield) 
export class UserController extends Controller {

}
</code></pre>
<p><strong>Note:-</strong> A shield can be assigned to multiple controller.</p></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        