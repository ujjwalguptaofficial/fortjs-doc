---
sidebar_position: 8
title: "View"
keywords: [view, render, fortjs, node]
description: "How to create & render views"
---

# View

A view is a HTML page which needs some data also called **model** to show those datas to users.The data(model) is passed from controller to view where view engine accepts the data and create the html page.

## viewResult

A view is rendered using the method `viewResult`. The viewResult accepts two parameters - 

1. view identification - view location or view name or id
2. model

Let's see an example - 

```javascript
import { defaultWorker, viewResult } from "fortjs"

export class DefaultController extends Controller {
    
    @defaultWorker()
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

For configuring other view engine, please read the docs - [viewEngine](/docs/advanced/view-engine)