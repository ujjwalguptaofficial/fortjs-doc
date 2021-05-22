<template><Layout title='Param' description='parameterizing route in fortjs' keywords='param, route, customize, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/param.md'><p><code>param</code> is class member of  Guard and Controller. It is used to extract route data for placeholder based routing.</p>
<p>e.g - consider the route - "abc.com/{value}/hi" . Here value is a placeholder and this can be extracted using param. </p>
<pre><code>export class FileController extends Controller {

    @Route("/scripts/{file}.js")
    @Worker()
    async getScripts() {
        const fileName = this.param.file;
    }
}
</code></pre>
<p>For more info about routing, please check the <a href="route">route</a> doc.</p></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        