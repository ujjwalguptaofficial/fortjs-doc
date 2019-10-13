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
       return `<h1>The resource ${url} does not exist.</h1>`
    }
}
```

So basically it returns html response. You can also use view engine to render the page and then return the html response.

Now you have created the class, you need to inform fortjs about this.

```
import { Fort } from "fortjs";
import { UserController } from "./controllers";
import { CustomErrorHandler } from "./extra/custom_error_handler";

class App extends Fort {
    constructor() {
        super();
        //add routers
        this.routers = [{
            controller: UserController,
            path: "/user"
        }];
        this.errorHandler = CustomErrorHandler;
    }
}

new App().create();
```

The methods available for override are - 

* onServerError(ex: IException): Promise<string>
* onBadRequest(ex: IException): Promise<string>
* onForbiddenRequest(): Promise<string>
* onNotAcceptableRequest(): Promise<string>
* onMethodNotAllowed(): Promise<string>
* onNotFound(url: string): Promise<string>
  
<br>
You can see some methods also have parameters. So its upto you how you want to use those params.

e.g - for onServerError (Status code - 500), you should not show the exception information to users but you should definitely log those errors.

**Note:-** It is highly recommended to create a custom error handler and atleast override the onServerError method and log the exception, otherwise you wont have any information regarding the exception occured.

