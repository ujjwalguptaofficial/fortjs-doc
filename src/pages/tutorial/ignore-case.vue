<template><Layout title='Ignore Case - (deprecated)' description='select data from indexeddb with case insensitivity' keywords='case sensitive, ignore case, query, indexeddb, jsstore' contentSrc='/home/warrior/projects/opensource/doc-template/content/tutorial/ignore-case.md'><div class="highlight">
Ignore case is removed from v - 3.10.0. It is recommended to use regex instead.
</div>
<p><br></p>
<p>JavasScript is case sensitive, so is the IndexedDB. You can use option - 'IgnoreCase' to filter records with case insensitive.</p>
<pre><code>connection.select({
    from: "Table_Name",
    ignoreCase: true,
    where: {
        Column1: some_value,
        Column2: some_another_value
    }
}).then(function(results) {
    //results will be array of objects.
    console.log(results);
}).catch(function(error) {
    alert(error.message);
});
</code></pre>
<p class="margin-top-40px center-align">
    <a class="btn info" target="_blank" href="https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20%22Customers%22%2C%0A%20%20%20%20ignoreCase%3Atrue%2C%0A%20%20%20%20where%3A%7B%0A%20%20%20%20%20%20%20%20country%3A'mexico'%0A%20%20%20%20%7D%0A%7D)%3B%0A">Example</a>
    <button class="btn info btnNext">Next</button>
</p></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/doc-template/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        