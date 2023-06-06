---
Title: "View Engine"
Keywords: "view engine, cutomize, options, fortjs, node"
Description: "Creating custom view engine in fortjs"
---

# View Engine

In order to create a view engine - You need to create a class which will implement class `ViewEngine` from "fortjs".

e.g - Let's see how we can use ejs as view engine. You can download the code for below example here - <a href="https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/ejs" target="_blank">ViewEngine configurtion example</a>

```
import { ViewEngine, ViewEngineData, getViewFromFile } from "fortjs";
import * as ejs from "ejs"; 

export class EjsViewEngine implements ViewEngine {

    async render(value: ViewEngineData) {
        const viewData = await getViewFromFile({ fileLocation: value.view});
        return ejs.render(viewData, value.model);
    }
}
```

The method `render` will be called by fortjs with value of type [ViewEngineData](/tutorial/type/view-engine-data). You need to use this value and return html string.

After you have created view engine, you need to tell fort to use this view engine. Open app.ts /app.js

```
import { Fort } from 'fortjs';
import { routes } from './routes';
import { EjsViewEngine } from './ejs_view_engine';


Fort.viewEngine = EjsViewEngine;
Fort.routes = routes;
Fort.create();

```

Now We have successfully integrated our view engine with fortjs. Let's test our view engine setup - 

## Create a view
<br/>
create a file "index.ejs" inside the folder - "views". Paste the below code inside the file -

```
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><%=title%></title>
</head>

<body>
    <h1><%=msg%></h1>
</body>

</html>
```

In the above code - `title` and `msg` will be sent from the controller and rendered by ejs view engine. 

Now let's pass data from Controller and call our view engine for rendering this view - 

```
export class DefaultController extends Controller {

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
```

we are using `viewResult` to render the view, which takes - the relative location of view and model value.
