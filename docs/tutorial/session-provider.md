---
Title: "Session Provider"
Keywords: "session provider, create session provider, options, fortjs, node"
Description: "Customize session provider in fortjs"
---

By default fortjs provides a memory session provider which stores all your data in memory & data is lost when nodejs process is stopped or restarted.

You can create your own session provider & store it in database or wherever you want. A session provider is a class which extends the class - `SessionProvider`.

Strcuture of SessionProvider is - 

```
abstract class SessionProvider {

    sessionId: string;
    protected cookies: CookieManager;

    abstract get(key: string): Promise<any>;
    abstract isExist(key: string): Promise<boolean>;
    abstract getAll(): Promise<SessionValue[]>;
    abstract set(key: string, val: any): Promise<void>;
    abstract setMany(values: { [key: string]: any }): Promise<void[]>;
    abstract remove(key: string): Promise<void>;
    abstract clear(): Promise<void>;

    protected createSession()
    protected destroySession()
}
```

So you need to implement all abstract methods.

After you have created a session provider, you need to tell fortjs to use new session provider.

```
import { Fort } from "fortjs";
import { UserController } from "./controllers";
import { CustomSessionProvider } from "./extra/custom_session_provider";

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
    sessionProvider: CustomSessionProvider,
});
```