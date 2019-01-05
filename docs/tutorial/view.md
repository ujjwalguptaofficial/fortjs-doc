
A view is rendered using the method `viewResult`. The viewResult accepts two parameters - 

1. view name or id
2. model

<br>
Let's see an example - 

```
export class DefaultController extends Controller {
    @DefaultWorker()
    async default() {
        const model = {
            title: 'FortJs'
        }
        const result = await viewResult('index',model);
        return result;
    }
}
```

By default fortjs provides [eshtml](https://github.com/ujjwalguptaofficial/eshtml) as view engine. But any view engine like - handlebar, ejs, mustache etc can be used.

For configuring other view engine, please read the docs - [viewEngine](view-engine)