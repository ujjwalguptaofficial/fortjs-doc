<template><Layout title='Import Scripts' description='import scripts in web worker' keywords='import scripts, transaction, query, indexeddb, jsstore' contentSrc='/home/warrior/projects/opensource/doc-template/content/tutorial/import-scripts.md'><p>importScripts can be used to add scripts inside jsstore web worker. It internally uses <a href="https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/importScripts">importScripts</a> .</p>
<pre><code>await connection.importScripts("file1.js","file2.js");
</code></pre>
<p>importScripts is useful for executing transaction.</p>
<p class="margin-top-40px center-align">
    <button class="btn info btnNext">Next</button>
</p></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/doc-template/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        