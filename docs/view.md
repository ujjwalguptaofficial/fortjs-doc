---
sidebar_position: 6
Title: "View"
Keywords: "view, render, fortjs, node"
Description: "How to create & render views"
---

A view is rendered using the method `viewResult`. The viewResult accepts two parameters - 

1. view identification - view location or view name or id
2. model

<br/>
Let's see an example - 

```
export class DefaultController extends Controller {
    
    @DefaultWorker()
    async default() {
        const model = {
            title: 'FortJs'
        }
        const result = await viewResult('default/index.html',model);
        return result;
    }
}
```

By default fortjs provides [mustache](https://github.com/janl/mustache.js/) as view engine. But any view engine like - handlebar, ejs etc can be used.

For configuring other view engine, please read the docs - [viewEngine](/tutorial/advanced/view-engine)