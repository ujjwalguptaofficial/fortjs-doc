---
title: "Customize Error"
keywords: "customize error, handle error, fortjs, node"
description: "How to customize error in nodejs using fortjs"
---

# Customize Error

In order to customize the error response , you need to create a class which extend class `ErrorHandler` and override the available methods.

e.g - Let's say you want to customize the error response for status code - **404**.

```
import { ErrorHandler } from "fortjs";

export class CustomErrorHandler extends ErrorHandler {
    async onNotFound(url){
       return htmlResult(`<h1>The resource ${url} does not exist.</h1>`);
    }
}
```

So basically it returns a customized http response similar to worker.

After creating the error handler class - you need to inform fortjs about this.

```
import { Fort } from "fortjs";
import { UserController } from "./controllers";
import { CustomErrorHandler } from "./extra/custom_error_handler";


//add routes
Fort.routes = [{
    controller: UserController,
    path: "/user"
}];

Fort.errorHandler = CustomErrorHandler;    

Fort.create();
```

The methods available for override are - 

* onServerError(ex: IException): Promise&lt;HttpResult | HttpFormatResult&gt;
* onBadRequest(ex: IException): Promise&lt;HttpResult | HttpFormatResult&gt;
* onForbiddenRequest(): Promise&lt;HttpResult | HttpFormatResult&gt;
* onNotAcceptableRequest(): Promise&lt;HttpResult | HttpFormatResult&gt;
* onMethodNotAllowed(): Promise&lt;HttpResult | HttpFormatResult&gt;
* onNotFound(url: string): Promise&lt;HttpResult | HttpFormatResult&gt;
  
<br/>
You can see some methods also have parameters. So its upto you how you want to use those params.

e.g - for onServerError (Status code - 500), you should not show the exception information to users but you should definitely log those errors.

**Note:-** It is highly recommended to create a custom error handler and atleast override the onServerError method and log the exception, otherwise you won't have any information regarding the exception occured.

