<template><Layout title='Worker' description='Description about worker in fortjs' keywords='worker, route, controller method, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/worker.md'><p>Worker is a method which does particular task and return the final result. </p>
<p>A worker method -</p>
<ul>
<li>must be async or return a promise (since async is built on top of promises).</li>
<li>The result returned by worker method must be promise of type <a href="/tutorial/http-result">HttpResult</a> or <a href="/tutorial/http-format-result">HttpFormatResult</a>.</li>
</ul>
<p><br>
Since a worker is part of controller, it have the access to all the things which a controller has i.e - </p>
<ul>
<li>Request - <code>this.request</code></li>
<li>Response - <code>this.response</code></li>
<li>Cookie - <code>this.cookies</code></li>
<li>Session - <code>this.session</code></li>
<li>Query string data - <code>this.query</code></li>
<li>Post data - <code>this.post</code></li>
<li>Route parameter -  <code>this.param</code></li>
<li>Data from other components -  <code>this.data</code></li>
</ul>
<p><br></p>
<h1 id="creatingworker">Creating worker</h1>
<p><br>
Worker is created by using decorator - <code>Worker</code> or <code>DefaultWorker</code>.</p>
<h2 id="example">Example</h2>
<pre><code>import { Controller, Worker, DefaultWorker, textResult } from "fortjs";

export class UserController extends Controller {

    @DefaultWorker()
    async default () {
       return textResult("This is default worker for section user");
    }

    @Worker()
    async getUser() {
        return textResult("This is a worker for section user");
    }

}
</code></pre>
<p>Lets consider that controller - 'UserController' is associated with path '/user' and our domain is abc.com.</p>
<p>So what these decorators - <code>Worker</code> and <code>DefaultWorker</code> do ?</p>
<ul>
<li><p><strong>Worker</strong> - method having decorator Worker is added to route with all http methods (GET,POST etc).And the route is '/${method_name}'. For our example - route will be : '/getuser'.</p></li>
<li><p><strong>DefaultWorker</strong> - method having decorator DefaultWorker is added to route with one http method GET. And the route is '/'.</p></li>
</ul>
<p><br>
So in the above example, when url will be - </p>
<ul>
<li>abc.com/user - method default will be called.</li>
<li>abc.com/user/:getuser - method getuser will be called.</li>
</ul>
<p><br></p>
<h2 id="howtodeclareamethodasdefaultworkerwithoutusingdecoratordefaultworker">How to declare a method as default worker without using decorator - defaultWorker</h2>
<p><br>
A method can be declared as default worker by using decorators - <code>Worker</code> &amp; <code>Route</code>.</p>
<p>Lets update the example -</p>
<pre><code>import { Controller, Worker, textResult, HTTP_METHOD, Route } from "fortjs";

export class UserController extends Controller {

   // @defaultWorker()
    @Worker(HTTP_METHOD.Get)
    @Route("/")
    async default () {
       return textResult("This is default worker for section user");
    }
}
</code></pre></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        