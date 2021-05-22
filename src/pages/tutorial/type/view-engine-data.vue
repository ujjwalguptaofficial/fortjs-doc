<template><Layout title='View Engine Data' description='Type viewEngineData member description' keywords='view engine, data, types, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/type/view-engine-data.md'><p>The type ViewEngineData is used by ViewEngine to get view related data from workers.</p>
<pre><code>type ViewEngineData = {

    /**
     * name of the view or path of view
     *
     * @type {string}
     */
    view: string;

    /**
     * view model
     *
     * @type {*}
     */
    model: any;
};
</code></pre></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        