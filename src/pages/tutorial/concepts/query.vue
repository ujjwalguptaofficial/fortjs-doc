<template><Layout title='Query' description='Accessing query string value in fortjs' keywords='query string, variable, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/concepts/query.md'><p><code>query</code> is class member of  Wall, Guard, Shield and Controller. It is used to get the query string value.</p>
<p>e.g - Conside the url - abc.com/?userid=5&amp;name=ujjwal</p>
<p>There are two variables in query string - <code>userid</code> and <code>name</code> . We can use <code>query</code> to access those value.</p>
<pre><code>export class DefaultController extends Controller {

    @DefaultWorker()
    async default() {
        const userId = this.query.userid;
        const name = this.query.name;

        return textResult(`userId is ${userId} &amp; name is ${name}`);
    }
}
</code></pre></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        