---
Title: "HttpResult"
Keywords: "http result, type, options, fortjs, node"
Description: "Type HttpResult member description"
---

# HttpResult

The type `HttpResult` is used by workers to return the result. 

Structure of HttpResult is - 

```
type HttpResult = {
    statusCode: HTTP_STATUS_CODE;
    responseData: any;
    contentType: MIME_TYPE;
    file ? : FileResultInfo;
    shouldRedirect ? : boolean;
};
```

FortJs provides some helper method which return result of type HttpResult. These are - 

* textResult - used to return text result.
* jsonResult - used to return json result.
* htmlResult - used to return html result.
* viewResult - used to return a view.
* fileResult - used to return a file which will be rendered by browser.
* downloadResult - used to return a file which will be downloaded by browser.
* redirectResult - used to return a result which will tell browser to redirect url.

<br/>

## Example

### Retruning a string using httpResult

```
import { Controller, defaultWorker, HTTP_STATUS_CODE, MIME_TYPE  } from "fortjs";

export class UserController extends Controller {
   
    @defaultWorker()
    async default () {
       return {
            statusCode: HTTP_STATUS_CODE.Ok,
            responseData: "This is default worker for section user",
            contentType: MIME_TYPE.Text
        };
    }
}
```

### Retruning a string using helper method - textResult

```
import { Controller, defaultWorker, textResult } from "fortjs";

export class UserController extends Controller {
    
    @defaultWorker()
    async default () {
       return textResult("This is default worker for section user");
    }
}
```

You can see - helper methods make things easy and looks pretty cool.
