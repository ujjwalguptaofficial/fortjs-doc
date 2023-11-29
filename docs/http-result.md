---
sidebar_position: 7
title: "Http Result"
keywords: [FortJs, HTTP Results, Text Result, JSON Result, HTML Result, View Result, File Result, Download Result, Redirect Result, Web Development, Node.js]
description: "Learn about different HTTP result types in FortJs, including text results, JSON results, HTML results, view results, file results, download results, and redirect results."
---

# Http Result

In a web server application, a common requirement is to return different types of results such as text, JSON, etc. FortJs provides various helper methods that make it easy to return results of different types:

- `textResult`: Used to return a text result.
- `jsonResult`: Used to return a JSON result.
- `htmlResult`: Used to return an HTML result.
- `viewResult`: Used to return a view.
- `fileResult`: Used to return a file that will be rendered by the browser.
- `downloadResult`: Used to return a file that will be downloaded by the browser.
- `redirectResult`: Used to return a result that instructs the browser to redirect to a URL.


## Text data

```js
import { Controller, http, textResult } from "fortjs";

export class MyController extends Controller {
   
    @http.get("/hello-world")
    async default() {
        // This method returns a simple text result with the content "Hello World".
        return textResult("Hello World");
    }
}
```

## JSON data

```js
import { Controller, http, jsonResult } from "fortjs";

export class MyController extends Controller {
   
    @http.get("/hello-world")
    async default() {
        // This method returns a simple json data with the content "Hello World".
        return jsonResult({
            value: "Hello World"
        });
    }
}
```

## HTML data

```js
import { Controller, http, htmlResult } from "fortjs";

export class MyController extends Controller {
   
    @http.get("/hello-world")
    async default() {
        // This method returns a simple html data with the content "Hello World".
       return htmlResult(`<h1>Hello World</h1>`);
    }
}
```

## Redirect url

```js
import { Controller, http, redirectResult } from "fortjs";

export class MyController extends Controller {
   
    @http.get("/hello-world")
    async default() {
        // This method returns url which tells browser to redirect to supplied url
       return redirectResult(`https://fortjs.net/`);
    }
}
```

## Render file

```js
import { Controller, http, fileResult } from "fortjs";
import * as path from "path"

export class MyController extends Controller {
   
    @http.get("/image")
    async default() {
        // This method returns a file which tells browser to render the file like show an image
       const pathLocation = path.join(__dirname, "../contents/JsStore_16_16.png");
       return fileResult(pathLocation);
    }
}
```

## Download file

```js
import { Controller, http, downloadResult } from "fortjs";
import * as path from "path"

export class MyController extends Controller {
   
    @http.get("/download")
    async default() {
        // This method returns a file which tells browser to download the file
       const pathLocation = path.join(__dirname, "../contents/JsStore_16_16.png");
       return downloadResult(pathLocation);
    }
}
```

## Render a view file

```js
import { Controller, http, viewResult } from "fortjs";

export class MyController extends Controller {
   
    @http.get("/view")
    async default() {
        // This method renders a view file and then returns the HTML data.
        // It uses the viewResult helper from FortJs.
        const data = { 
            title: "Hello world" 
        };
        return viewResult("views/default/index.html", data);
    }
}

```

For more information on views, please refer to the [View Engine Documentation](/docs/advanced/view-engine.md).
