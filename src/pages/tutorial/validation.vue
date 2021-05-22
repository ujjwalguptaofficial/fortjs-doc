<template><Layout title='Validation' description='How to validate data in fortjs using different components & decorators.' keywords='validation, expect-body, expect-query, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/validation.md'><p>Validation is an important part of any application &amp; that's why fortjs provides several components and decorators to help you write validation code in easy &amp; standard way.</p>
<p>Let's see how - </p>
<ol>
<li><p><strong>Using guard</strong> - Guard is a component which sits on top of worker. So you can use guards for validation of incoming data. Read <a href="/tutorial/guard">guard</a> doc for more information.</p></li>
<li><p><strong>Using Shield</strong> - Shield is a component which sits on top of Controller. So you can use shield for checking something before passing control to Controller like checking session, cheking authentication data etc. Read <a href="/tutorial/shield">shield</a> doc for more information.</p></li>
<li><p><strong>Using ExpectBody</strong> - ExpectBody is a decorator which takes value as parameter and compare against incoming body data for data type. It also removes extra property which are not present in expect body value. This makes secure to store data in nosql database. Read <a href="/tutorial/decorator/expect-body">ExpectBody</a> doc for more information.</p></li>
<li><p><strong>Using ExpectQuery</strong> - ExpectQuery is similar to ExpectBody but it works for query string data. It does similar things as ExpectBody. Read <a href="/tutorial/decorator/expect-query">ExpectQuery</a> doc for more information.</p></li>
</ol></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        