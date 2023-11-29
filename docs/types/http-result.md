---
title: "HttpResult"
keywords: [http result, type, options, fortjs, node]
description: "Type HttpResult member description"
---

# IHttpResult

The interface `HttpResult` is used by workers or components to return the result. 

```js
export interface IHttpResult {
    statusCode: HTTP_STATUS_CODE;
    responseData: any;
    contentType: MIME_TYPE;
    type: HTTP_RESULT_TYPE;
}
```

## Returning data

Let's see an example to return a text data -

```js
import { Controller, http, HTTP_STATUS_CODE, MIME_TYPE  } from "fortjs";

export class UserController extends Controller {
   
    @http.get("/")
    async default () {
       return {
            statusCode: HTTP_STATUS_CODE.Ok,
            responseData: "Hello World",
            contentType: MIME_TYPE.Text
        };
    }
}
```

In the above snippet - we are sending data "Hello World" with MIME Type `Text` which tells browser to consider this as text result. 

## Helper methods

FortJs provides some helper method which return result of type IHttpResult. These are - 

* textResult - used to return text result.
* jsonResult - used to return json result.
* htmlResult - used to return html result.
* viewResult - used to return a view.
* fileResult - used to return a file which will be rendered by browser.
* downloadResult - used to return a file which will be downloaded by browser.
* redirectResult - used to return a result which will tell browser to redirect url.


## Returning text data using helper method

```js
import { Controller, http, textResult } from "fortjs";

export class UserController extends Controller {
    
    @http.get("/")
    async default () {
       return textResult("Hello World");
    }
}
```

You can see - helper methods make things very easy and clean.
