<template><Layout title='View' description='How to create & render views' keywords='view, render, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/view.md'><p>A view is rendered using the method <code>viewResult</code>. The viewResult accepts two parameters - </p>
<ol>
<li>view identification - view location or view name or id</li>
<li>model</li>
</ol>
<p><br>
Let's see an example - </p>
<pre><code>export class DefaultController extends Controller {

    @DefaultWorker()
    async default() {
        const model = {
            title: 'FortJs'
        }
        const result = await viewResult('default/index.html',model);
        return result;
    }
}
</code></pre>
<p>By default fortjs provides <a href="https://github.com/janl/mustache.js/">mustache</a> as view engine. But any view engine like - handlebar, ejs etc can be used.</p>
<p>For configuring other view engine, please read the docs - <a href="/tutorial/view-engine">viewEngine</a></p></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        