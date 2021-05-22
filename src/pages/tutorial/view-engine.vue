<template><Layout title='View Engine' description='Creating custom view engine in fortjs' keywords='view engine, cutomize, options, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/view-engine.md'><p>In order to create a view engine - You need to create a class which will implement class <code>ViewEngine</code> from "fortjs".</p>
<p>e.g - Let's see how we can use ejs as view engine. You can download the code for below example here - <a href="https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/ejs" target="_blank">ViewEngine configurtion example</a></p>
<pre><code>import { ViewEngine, ViewEngineData, getViewFromFile } from "fortjs";
import * as ejs from "ejs"; 

export class EjsViewEngine implements ViewEngine {

    async render(value: ViewEngineData) {
        const viewData = await getViewFromFile({ fileLocation: value.view});
        return ejs.render(viewData, value.model);
    }
}
</code></pre>
<p>The method <code>render</code> will be called by fortjs with value of type <a href="/tutorial/type/view-engine-data">ViewEngineData</a>. You need to use this value and return html string.</p>
<p>After you have created view engine, you need to tell fort to use this view engine. Open app.ts /app.js</p>
<pre><code>import { Fort } from 'fortjs';
import { routes } from './routes';
import { EjsViewEngine } from './ejs_view_engine';


Fort.viewEngine = EjsViewEngine;
Fort.routes = routes;
Fort.create();
</code></pre>
<p>Now We have successfully integrated our view engine with fortjs. Let's test our view engine setup - </p>
<h2 id="createaview">Create a view</h2>
<p><br>
create a file "index.ejs" inside the folder - "views". Paste the below code inside the file -</p>
<pre><code>&lt;html lang="en"&gt;

&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="ie=edge"&gt;
    &lt;title&gt;&lt;%=title%&gt;&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;h1&gt;&lt;%=msg%&gt;&lt;/h1&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre>
<p>In the above code - title and msg will be sent from the controller and rendered by mustache. </p>
<p>Now its time to call our view engine for rendering this view - </p>
<pre><code>export class DefaultController extends Controller {

    @DefaultWorker()
    async default() {
        const model = {
            title: "FortJs",
            msg: "This is rendered by mustache"
        };
        const result = await viewResult("index.ejs", model);
        return result;
    }
}
</code></pre>
<p>we are using <code>viewResult</code> to render the view, which takes - the relative location of view and model value.</p></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        