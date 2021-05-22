<template><Layout title='Get Started' description='Fortjs introduction & how to use.' keywords='introduction, get started, fort-creator fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/get-started.md'><h2 id="install">Install</h2>
<p><br>
Fortjs provides an app generator - "Fort Creator" which helps you with fortjs development.</p>
<p>To Install Fort Creator</p>
<pre><code>npm install fort-creator -g
</code></pre>
<h2 id="createyourapp">Create your app</h2>
<p><br>
To generate an app, run command </p>
<pre><code>fort-creator new my-new-app
</code></pre>
<p>You will see a prompt to choose project language with options - </p>
<ol>
<li>typescript</li>
<li>javascript</li>
</ol>
<p><br>
Choose your language and fort-creator will create a project for you.</p>
<p>To run your new app </p>
<pre><code>cd my-new-app
fort-creator start
</code></pre>
<p>Now see your app in action by visiting url - <a target="_blank" href="http://localhost:1337">localhost:4000</a></p>
<p>You must want to create something cool or for realtime. Visit these articles and learn more.</p>
<ul>
<li><p><a href="https://medium.com/fortjs/rest-api-using-typescript-94004d9ae5e6">Creating REST API using Typescript</a></p></li>
<li><p><a href="https://medium.com/fortjs/rest-api-in-nodejs-using-es6-227765440b2b">Creating REST API using es6</a></p></li>
<li><p><a href="https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/mongodb">MongoDb Example</a></p></li>
<li><p><a href="https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/crud">Crud operation using html form</a></p></li>
<li><p><a href="https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/rest">Rest Api Example</a></p></li>
</ul>
<div class="top-border" style="margin: 25px 0;"></div>
<p>Alternatively you can also clone/download starter template - </p>
<ul>
<li><p>Typescript - <a href="https://github.com/ujjwalguptaofficial/fortjs-typescript-starter">https://github.com/ujjwalguptaofficial/fortjs-typescript-starter</a></p></li>
<li><p>Javascript - <a href="https://github.com/ujjwalguptaofficial/fortjs-javascript-starter">https://github.com/ujjwalguptaofficial/fortjs-javascript-starter</a></p></li>
</ul>
<p><br>
After downloading the repo - open the console, move to project directory and run the commands -</p>
<ul>
<li><code>npm install</code> - It will install all the dependency</li>
<li><code>npm run start</code> - It will run the app.</li>
</ul></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        