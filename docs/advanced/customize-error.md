---
title: "Customize Error"
keywords: [customize error, handle error, fortjs, node]
description: "How to customize error in nodejs using fortjs"
---

# Customize Error

Handling various errors, such as exceptions or route not found scenarios, is common in a web server. FortJs provides default handling for these errors with simple HTTP responses. However, you might want to customize these responses for better messages or to facilitate error logging.

To achieve this customization, follow these steps:

## Create ErrorHandler

To customize error responses in FortJs, create a class that extends the ErrorHandler class and override the available methods.

For example, if you want to customize the error response for the status code 404:

```js
import { ErrorHandler } from "fortjs";

export class CustomErrorHandler extends ErrorHandler {
    async onNotFound(url){
       return htmlResult(`<h1>The resource ${url} does not exist.</h1>`);
    }
}
```

## Use ErrorHandler

Once you've created the error handler class to customize HTTP responses, you need to inform FortJs about it.

```js
import { Fort } from "fortjs";
import { UserController } from "./controllers";
import { CustomErrorHandler } from "./extra/custom_error_handler";


//add routes
Fort.routes = [{
    controller: UserController,
    path: "/user"
}];

//highlight-start
Fort.errorHandler = CustomErrorHandler;  
//highlight-end

Fort.create();
```

## Error Handling Methods

When creating a custom error handler in FortJs, you have several methods that you can override to customize the handling of specific HTTP error scenarios. The available methods are:

1. `onServerError(ex: IException): Promise<IHttpResult>`
   - Override this method to handle server errors (Status code - 500). It is recommended not to expose exception information to users but to log the errors.

2. `onBadRequest(ex: IException): Promise<IHttpResult>`
   - Override this method to handle bad request errors.

3. `onForbiddenRequest(): Promise<IHttpResult>`
   - Override this method to handle forbidden request errors.

4. `onNotAcceptableRequest(): Promise<IHttpResult>`
   - Override this method to handle not acceptable request errors.

5. `onMethodNotAllowed(): Promise<IHttpResult>`
   - Override this method to handle method not allowed errors.

6. `onNotFound(url: string): Promise<IHttpResult>`
   - Override this method to handle not found errors, providing the requested URL.

For example, for `onServerError` (Status code - 500), it's advisable not to show exception information to users but to log the errors.

**Note:**
It is highly recommended to create a custom error handler and at least override the `onServerError` method to log the exception. This ensures that you have information about the exceptions that occur.