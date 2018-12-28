---
Title: "View Engine"
---

In order to create a view engine - You need to create a class which will implement class `ViewEngine` from "fortjs".

e.g - Let's see how we can use mustache as view engine. You can download the code for below example here - https://github.com/ujjwalguptaofficial/fortjs/tree/master/example/mustache

```
import { ViewEngine, IViewValue } from "fortjs";
import * as Mustache from "moustache";
import * as Fs from "fs";
import * as path from "path";

export class MoustacheViewEngine implements ViewEngine {

    getViewDataFromFile(location: string) {
        return new Promise((res, rej) => {
            const pathOfView = path.join(__dirname, `views/${location}`);
            Fs.readFile(pathOfView, {
                encoding:'utf8'
            },(err, data) => {
                if (err) {
                    rej(err);
                }
                else {
                    res(data);
                }
            });
        });
    }

    async render(value: ViewEngineData) {
        const viewData = await this.getViewDataFromFile(value.view);
        return Mustache.render(viewData, value.model);
    }
}
```

The method `render` is called by fortjs with value of type [ViewEngineData](view-engine-data). You need to use this value and return html string.

After you have created view engine, you need to tell fort to use this view engine. Open app.ts/app.js

```
import { Fort } from 'fortjs';
import { routes } from './routes';
import { MoustacheViewEngine } from './view_engine';

export class App extends Fort {
    constructor() {
        super();
        this.routes = routes;
        this.viewEngine = MoustacheViewEngine;
    }
}

new App().create({
    defaultPath: "/default"
});
```

Now We have successfully integrated our view engine with fortjs. Let's render some view using mustache - 

## Create a view

create a file "index.html" inside the folder - "views". Paste the below code inside the file -

```
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{title}}</title>
</head>

<body>
    <h1>{{msg}}</h1>
</body>

</html>
```

In the above code - title and msg will be sent from the controller and rendered by mustache. 

Now its time to call our view engine for rendering this view - 

```
export class DefaultController extends Controller {
    @defaultWorker()
    async default() {
        const model = {
            title: "FortJs",
            msg: "This is rendered by mustache"
        };
        const result = await viewResult("default/index.html", model);
        return result;
    }
}
```

Basically we are sending the relative location of view and model data using `viewResult`. 

That's all, run your code and you can see the view rendered.