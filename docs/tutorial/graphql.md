---
Title: "GraphQl"
---

FortJs provides a seperate package - [fort-graphql](https://github.com/ujjwalguptaofficial/fortjs-graphql) for integration of graphql.

## Uses

1. `npm i fortjs-graphql` or `yarn add fortjs-graphql`
2. Create a controller and inherit `FortGraphQl` 
   *  Create a default worker and call `processGraphQl` inside it. 
   *  For graphiql , create another worker and call `getGraphiqlUi` inside it.

```
import { HTTP_METHOD, DefaultWorker, Worker } from "fortjs";
import { FortGraphQl } from "fort-graphql";
export const graphqlSchema = `
type Query {
  hello: String
}
`;

export class GraphQlController extends FortGraphQl {
    rootValue = { hello: () => 'Hello world!' };

    constructor() {
        super(graphqlSchema);
    }

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