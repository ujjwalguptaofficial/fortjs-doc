<template><Layout title='Test' description='Setting up test in fortjs' keywords='test, unit, e2e, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/test/index.md'><p>Setting up test configuration is very easy in FortJs, infact Fortjs already provides setup configuration for unit testing and e2e testing.</p>
<p>The default setup uses - </p>
<ul>
<li>Jest as a test framework</li>
<li>Axios for sending http request in e2e test</li>
</ul>
<p><br>The default setup adds the unit test cases inside particular components folder &amp; e2e test cases inside dedicated folder e2e. 
e.g - controllers test are added in controllers folder with suffix ".test" - test for "user_controller.js" is added into file "user-controller.test.js".</p>
<p>However with the project growing, its very necessary to put your test cases in seperate dedicated folder. So feel free to rearrange the files.</p>
<h4 id="testcommand">Test Command</h4>
<p>The default setup is configured with script test, so command - <code>npm run test</code> will run all test cases. It sets the <code>NODE_ENV</code> as test.</p>
<h4 id="testexamples">Test Examples</h4>
<ul>
<li><p><a href="/tutorial/test/unit-test">Unit Test</a></p></li>
<li><p><a href="/tutorial/test/e2e-test">e2e Test</a></p></li>
</ul></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        