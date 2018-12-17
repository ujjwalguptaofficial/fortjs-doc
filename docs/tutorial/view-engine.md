---
Title: "View Engine"
---

By default fortjs provides [eshtml](https://github.com/ujjwalguptaofficial/eshtml) as view engine. But any view engine like - handlebar, ejs, mustache etc can be used.

In order to create a view engine - You need to create a class which will implement class `VieEngine` from "fortjs".

e.g - Let's see how we can use mustache as view engine - 

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


