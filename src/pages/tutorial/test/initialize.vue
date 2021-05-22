<template><Layout title='Initialize Controller' description='initialize is a method in a controller which initializes a controller.' keywords='test, unit, initialize, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/test/initialize.md'><p>initialize is a method in a controller which initializes a controller &amp; set the controller property provided in param. This is helpful when you are doing unit testing where you want to set the controller properties.</p>
<p>e.g - Let's say i want to set the <code>body</code> &amp; <code>query</code> of <code>UserController</code></p>
<pre><code>const userControllerObj = new UserController();
userControllerObj.initialize({
    body:{
        name:'ujjwal',
        gender:'male'
    },
    query:{
        id:1
    }
})
</code></pre>
<p>In same way - you can set other properties - </p>
<ul>
<li>request: HttpRequest;</li>
<li>query: { [key: string]: string };</li>
<li>body: { [key: string]: any };</li>
<li>cookieValue: { [key: string]: string };</li>
<li>param: { [key: string]: string };</li>
<li>data: { [key: string]: any };</li>
<li>file: { [fieldName: string]: HttpFile }</li>
</ul></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        