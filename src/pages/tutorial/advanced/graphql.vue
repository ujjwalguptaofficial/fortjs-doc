<template><Layout title='GraphQl' description='How to use graphql in node using fortjs' keywords='graphql, integrate, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/advanced/graphql.md'><p>FortJs provides a seperate package - <a href="https://github.com/ujjwalguptaofficial/fortjs-graphql">fort-graphql</a> for integration of graphql.</p>
<h2 id="uses">Uses</h2>
<ol>
<li><code>npm i fortjs-graphql</code> or <code>yarn add fortjs-graphql</code></li>
<li>Create a controller and inherit <code>GraphQlHelper</code> </li>
</ol>
<ul>
<li>Create a default worker and call <code>processGraphQl</code> inside it. </li>
<li>For graphiql , create another worker and call <code>getGraphiqlUi</code> inside it.</li>
</ul>
<pre><code>import { HTTP_METHOD, DefaultWorker, Worker } from "fortjs";
import { GraphQlHelper } from "fort-graphql";

export class GraphQlController extends GraphQlHelper {

    /**
     * This method will be used to process graphql query 
     *
     * @returns
     * @memberof GraphQlController
     */
    @DefaultWorker(HTTP_METHOD.Get, HTTP_METHOD.Post)
    async  default() {
        return this.processGraphQl();
    }

    /**
     * This method will return graphiql 
     *
     * @returns
     * @memberof GraphQlController
     */
    @Worker()
    async  graphiql() {
        return this.getGraphiqlUi();
    }

}
</code></pre>
<ol start="3">
<li>Add the controller into routes </li>
<li>Initiate the graphql, where you have bootstrapped your app. By default file is app.ts/app.js - </li>
</ol>
<pre><code>import { Fort } from 'fortjs';
import { routes } from './routes';
import { FortViewEngine } from 'eshtml';
import * as path from "path";
import { FortGraphQl } from 'fortjs-graphql';
import { GraphQLError, buildSchema } from 'graphql';


Fort.routes = routes;

Fort.create({
    defaultPath: "default" 
}).then(() =&gt; {
    console.log("Your fort is located at address - localhost:4000");
    // setup graphql

    new FortGraphQl().initiate({
        schema: buildSchema(`
        type Query {
          hello: String
        }
        ` ),
        resolver: { hello: () =&gt; 'Hello world!' }
    })
}).catch(err =&gt; {
    console.error(err);
})
</code></pre></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        