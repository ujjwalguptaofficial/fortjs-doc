---
Title: "GraphQl"
Keywords: "graphql, integrate, fortjs, node"
Description: "How to use graphql in node using fortjs"
---

FortJs provides a seperate package - [fort-graphql](https://github.com/ujjwalguptaofficial/fortjs-graphql) for integration of graphql.

## Uses

1. `npm i fortjs-graphql` or `yarn add fortjs-graphql`
2. Create a controller and inherit `GraphQlHelper` 
   *  Create a default worker and call `processGraphQl` inside it. 
   *  For graphiql , create another worker and call `getGraphiqlUi` inside it.
```
import { HTTP_METHOD, DefaultWorker, Worker } from "fortjs";
import { GraphQlHelper } from "fort-graphql";

export class GraphQlController extends GraphQlHelper {
    
    /**
     * This method will be used to process graphql query 
     *
     * @returns
     * @memberof GraphQlController
     */
    @DefaultWorker([HTTP_METHOD.Get, HTTP_METHOD.Post])
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
``` 
3. Add the controller into routes 
4. Initiate the graphql, where you have bootstrapped your app. By default file is app.ts/app.js - 

```
import { Fort } from 'fortjs';
import { routes } from './routes';
import { FortViewEngine } from 'eshtml';
import * as path from "path";
import { FortGraphQl } from 'fortjs-graphql';
import { GraphQLError, buildSchema } from 'graphql';

export class App extends Fort {
    constructor() {
        super();
        this.routes = routes;
        this.viewEngine = FortViewEngine;
    }
}

new App().create({
    defaultPath: "default" 
}).then(() => {
    console.log("Your fort is located at address - localhost:4000");
    // setup graphql

    new FortGraphQl().initiate({
        schema: buildSchema(`
        type Query {
          hello: String
        }
        ` ),
        resolver: { hello: () => 'Hello world!' }
    })
}).catch(err => {
    console.error(err);
})
``` 