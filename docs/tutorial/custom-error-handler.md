---
Title: "Custom Error Handler"
---

In order to customize the error page , you need to create a class which extend class ErrorHandler and overwrite the methods.

e.g - Let's say you want to customize the ErrorPage for status code - 404.

```
import { ErrorHandler } from "fortjs";

export class CustomErrorHandler extends ErrorHandler {
    async onNotFound(url){
       return `<h1>The resource ${url} does not exist.</h1>`
    }
}
```

So basically it returns html response. If you are using a view engine then you can also use view engine to render the page and then return the html response.

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
        }]
    }
}

new App().create({
    appName: "MyAwesomeApp",
    errorHandler: CustomErrorHandler,
});
```

