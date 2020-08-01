---
Title: "Custom Error Handler"
Keywords: "customize error, handle error, fortjs, node"
Description: "How to customize error in nodejs using fortjs"
---

In order to customize the error response , you need to create a class which extend class ErrorHandler and override the available methods.

e.g - Let's say you want to customize the error response for status code - 404.

```
import { ErrorHandler } from "fortjs";

export class CustomErrorHandler extends ErrorHandler {
    async onNotFound(url){
       return  htmlResult(`<h1>The resource ${url} does not exist.</h1>`);
    }
}
```

So basically it returns a customized http response similar to worker.

Now you have created the class, you need to inform fortjs about this.

```
import { Fort } from "fortjs";
import { UserController } from "./controllers";
import { CustomErrorHandler } from "./extra/custom_error_handler";


//add routers
Fort.routes = [{
    controller: UserController,
    path: "/user"
}];

Fort.errorHandler = CustomErrorHandler;    

Fort.create();
```

The methods available for override are - 

* onServerError(ex: IException): Promise<HttpResult | HttpFormatResult>
* onBadRequest(ex: IException): Promise<HttpResult | HttpFormatResult>
* onForbiddenRequest(): Promise<HttpResult | HttpFormatResult>
* onNotAcceptableRequest(): Promise<HttpResult | HttpFormatResult>
* onMethodNotAllowed(): Promise<HttpResult | HttpFormatResult>
* onNotFound(url: string): Promise<HttpResult | HttpFormatResult>
  
<br>
You can see some methods also have parameters. So its upto you how you want to use those params.

e.g - for onServerError (Status code - 500), you should not show the exception information to users but you should definitely log those errors.

**Note:-** It is highly recommended to create a custom error handler and atleast override the onServerError method and log the exception, otherwise you won't have any information regarding the exception occured.

