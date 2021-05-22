<template><Layout title='Dependency Injection' description='Dependency injection in nodejs' keywords='dependency injection, assign, singleton, fortjs, node js' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/dependency-injection.md'><p>FortJs provides "Assign" And "Singleton" decorator for dependency Injection. </p>
<h2 id="assign">Assign</h2>
<p><br>
Assign can be used in controller and all type of component.</p>
<p>e.g - </p>
<p>To inject "hello world" to a variable value</p>
<pre><code>export class UserController extends Controller {
    service: UserService;

    @Worker()
    index(@Assign('hello world') value) {
        console.log(value) // hello world
    }
}
</code></pre>
<div class="top-border" style="margin: 25px 0;"></div>
<h2 id="singleton">Singleton</h2>
<p><br>
Singleton creates a single object &amp; maintain this across whole application.</p>
<p>e.g -</p>
<p>To inject a service in a controller constructor</p>
<pre><code>export class UserController extends Controller {
    service: UserService;

    constructor(@Singleton(UserService) service) {
        super();
        this.service = service;
    }
}
</code></pre>
<p>By using <code>Singleton</code> you can save memory as its create only one instance of class &amp; maintains throughout the app.  </p></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        