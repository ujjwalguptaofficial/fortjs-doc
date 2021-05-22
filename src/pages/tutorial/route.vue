<template><Layout title='Route' description='Different types of route and how to customize them in fortjs' keywords='route, customize, options, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/route.md'><p>FortJs is a MVC framework which means the application will be divided into three parts - Controller, view, model.</p>
<p>A route is mapped with Controller and will target a Controller method.</p>
<p>So route in fortjs has two parts - </p>
<ul>
<li>Controller - A class</li>
<li>Worker - A method inside a class</li>
</ul>
<p><br></p>
<h2 id="howtodecidewhatpartofroutewilltargetcontrollerandworker">How to decide what part of route will target controller and worker ?</h2>
<p><br>
Consider an url - "abc.com/user/add" and let's split it - </p>
<ul>
<li>abc.com - domain of the website </li>
<li>/user - controller route</li>
<li>/add - worker route</li>
</ul>
<p><br>
Let's take another example - "abc.com/user/1/2/3" and split it again - </p>
<ul>
<li>abc.com - domain of the website</li>
<li>/user - controller route</li>
<li>/1/2/3 - worker route</li>
</ul>
<p><br>
but you can also make some part of worker route as controller depends upon the requirement</p>
<p>e.g - The above route can be also breaked as - </p>
<ul>
<li>abc.com - domain of the website</li>
<li>/user/1 - controller route</li>
<li>/2/3 - worker route</li>
</ul>
<p><br>
Let's see how the route is configured in fortjs - </p>
<h2 id="controllerroute">Controller Route</h2>
<p><br>
In order to create a controller route we must have a <a href="/tutorial/controller">controller</a>. This controller is mapped with a path.</p>
<p>e.g - Consider you have created a controller, let's say - "UserController".</p>
<p>You need to map Controller with a path. </p>
<pre><code>import { Fort } from "fortjs";
import { UserController } from "./controllers";

// here we have mapped UserController with path "/user"
Fort.routes = [{
    controller: UserController,
    path: "/user"
}]

Fort.create();
</code></pre>
<p>In the above example we are mapping "UserContoller" with a path "/user" inside the "routers" member of App. Since UserController is mapped with "/user", so controller route is - "user".</p>
<p><strong>Note :-</strong> If you have large no of controller (let's say more than 10), it is recommended to define routers in a file as array (you can also divide your routers into multiple files)and then import those inside class App. The motive of this note is to keep your routers clean.</p>
<p><br></p>
<h2 id="workerroute">Worker Route</h2>
<p><br>
Worker route is mapped to a <a href="/tutorial/worker">Worker</a> inside Controller.
e.g - </p>
<p><strong><u>Creating Worker Route</u></strong>
<br><br>
Let's say we want to create the worker route "add" - you need to create a method with the name "add" and add decoarator "Worker" above it . The decorator "Worker" add the method to route list with method name -</p>
<pre><code>import { Controller, Worker, textResult } from "fortjs";

export class UserController extends Controller {
    @Worker()
    async add () {
       return textResult("add is called");
    }
}
</code></pre>
<p>So, When url will be - "abc.com/user/add" then add method will be called.</p>
<div class="top-border"><br></div>
<p><strong><u>Customizing route</u></strong>
<br><br>
By default route is name of method, but you can customize the route using decorator "Route". The "Route" decorator is used to customize the route in multiple ways -  </p>
<pre><code>import { Controller, Worker, textResult, Route } from "fortjs";

export class UserController extends Controller {

    @Worker()
    @Route("/addCustom") // changing the route name
    async add () {
       return textResult("add is called");
    }
}
</code></pre>
<p>You can see in the code , we have used 'Route' decorator to override the route. So, now when url will be - "abc.com/user/addCustom" then add method will be called.</p>
<div class="top-border"><br></div>
<p><strong><u>Restricting the worker based on http method</u></strong>
<br><br></p>
<p>Currently with any of http methods (GET,POST, etc.) "add" method will be hit. But let's say you want to hit this only when http method is POST.</p>
<p>In this case - you need to provide desired http methods to worker. Let's see an example - </p>
<pre><code>import { Controller, Worker,textResult,HTTP_METHOD } from "fortjs";

export class UserController extends Controller {

    @Worker(HTTP_METHOD.POST) // This method will be only hit when any of the http method specified in worker will match.
    async add () {
       return textResult("add is called");
    }
}
</code></pre>
<div class="top-border"><br></div>
<p><strong><u>Single route & multiple http method</u></strong>
<br><br></p>
<p>How about you want to create a route "add" which will hit different worker based on http methods. This pattern is highly used in rest api implementation . Let's see an example -</p>
<pre><code>import { Controller, Worker, textResult,HTTP_METHOD, Route } from "fortjs";

export class UserController extends Controller {

    @Worker(HTTP_METHOD.GET)
    @Route("/add")
    async addWithGet() { // This will be called when method will be GET
       return textResult("add with method get is called");
    }

    @Worker(HTTP_METHOD.POST)
    @Route("/add")
    async addWithPost() { // This will be called when method will be POST
       return textResult("add with method post is called");
    }
}
</code></pre>
<div class="top-border"><br></div>
<p><strong><u>Params in route</u></strong>
<br><br>
<b>1. Constant param : </b>
<br><br>
So far we have created a route - "abc.com/user/add". How about little more complex route - "abc.com/user/add/1". </p>
<p>For this, we just need to modify our route.</p>
<pre><code>import { Controller, Worker, textResult,HTTP_METHOD, Route } from "fortjs";

export class UserController extends Controller {

    @Worker()
    @Route("/add/1")
    async add () {
       return textResult("add is called");
    }
}
</code></pre>
<p><b>2. Variable param :</b> <br><br>In the url - you can see "1" is the constant value but for certain requirements - the place where 1 is present can be any value. </p>
<p>e.g - "abc.com/user/add/2", "abc.com/user/add/hi", "abc.com/user/add/1000" etc.</p>
<p>Basically a part of the url is a variable which can hold any value.</p>
<p>You can declare a variable in a route by using <code>{}</code>. Let's see - </p>
<pre><code>import { Controller, Worker, textResult,HTTP_METHOD, Route } from "fortjs";

export class UserController extends Controller {

    @Worker()
    @Route("/add/{value}")
    async add () {
       const value = this.param.value; // placeholder values are present in 'param' member of the controller.
       return textResult("add is called");
    }
}
</code></pre>
<p><b>3. Variable & Constant :</b> <br><br>How about a route where you want to return some file based on some extension. </p>
<p>e.g - "abc.com/file/scripts/jquery.js" . In this example - "jquery" is variable value and ".js" is constant value</p>
<p>So here :</p>
<ul>
<li>controller route is - 'file'</li>
<li>worker route is - 'scripts/jquery.js'</li>
</ul>
<pre><code>import { Controller, Worker, textResult,HTTP_METHOD, Route } from "fortjs";

export class FileController extends Controller {

    @Worker()
    @Route("/scripts/{fileName}.js")
    async getScripts () {
       const value = this.param.value; // placeholder values are present in 'param' member of the controller.
       return textResult("add is called");
    }
}
</code></pre></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        