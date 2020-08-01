---
Title: "Logger"
Keywords: "logger, customization, fortjs, node"
Description: "How to use & customize logger in fortjs"
---

Logging is a very necessary part of development. We log for debugging, saving exception, information etc.

That's why fortjs provides a default logger which is very simple & logs everything in console. The advantage of provided logger is that you don't need to import it everywhere.

The `logger` is a class member of all components i.e controller, shield, wall, guard. Let's see an example - 

```
import { Controller, Worker } from "fortjs";

export class UserController extends Controller {
   
   @Worker()
   async getAllUsers(){
       const users = [{
           id:1,
           name:'ujjwal'
       }];
       // log users
       this.logger.debug('users are', users);
   }
}
```

But you might want to log everything in files or database, so want to customize the logger. Logger can be customized very easily by creating a class & extending `Logger` 

```
import { Logger } from 'fortjs';

export class CustomLogger extends Logger {
    debug(message) {
        // do anything with message
    }
    
}
```

Logger has following methods available - 

* debug(...args)
* info(...args)
* error(...args)
* log(...args)

<br>Since you are extending, you can create your own method too.

<br>
For more help - You can see examples for [winston](https://www.npmjs.com/package/winston) implementation : [https://github.com/ujjwalguptaofficial/fortjs/tree/master/example/winston](https://github.com/ujjwalguptaofficial/fortjs/tree/master/example/winston)