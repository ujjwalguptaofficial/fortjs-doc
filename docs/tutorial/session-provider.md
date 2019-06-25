---
Title: "Session Provider"
Keywords: "session provider, create session provider, options, fortjs, node"
Description: "Customize session provider in fortjs"
---

By default fortjs provides a memory session provider for development but its not good for production and not recommended to use. You must create your own session provider or use some packages if available.

A session provider is a class which implements the class - `SessionProvider`.

Strcuture of SessionProvider is - 

```
abstract class SessionProvider {

    sessionId: string;
    protected cookies: CookieManager;

    abstract get(key: string): Promise<ISessionValue>;
    abstract isExist(key: string): Promise<boolean>;
    abstract getAll(): Promise<ISessionValue[]>;
    abstract set(key: string, val: any): Promise<void>;
    abstract setMany(values: ISessionValue[]): Promise<void[]>;
    abstract remove(key: string): Promise<void>;

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