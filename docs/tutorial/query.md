---
Title: "Query"
---

`query` is class member of  Wall, Guard, Shield and Controller. It is used to get the query string value.

e.g - Conside the url - abc.com/?userid=5&name=ujjwal

There are two variables in query string - `userid` and `name` . We can use `query` to access those value.

```
export class DefaultController extends Controller {

    @defaultWorker()
    async default() {
        const userId = this.query.userid;
        const name = this.query.name;

        return textResult(`userId is ${userId} & name is ${name}`);
    }
}
```