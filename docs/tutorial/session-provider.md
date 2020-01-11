---
Title: "Session Provider"
Keywords: "session provider, create session provider, options, fortjs, node"
Description: "Customize session provider in fortjs"
---

By default fortjs provides a memory session provider which stores all your data in memory & data is lost when nodejs process is stopped or restarted.

You can create your own session provider & store it in database or wherever you want. A session provider is a class which extends the class - `SessionProvider`.

Let's see how we can implement a simple memory session provider - 

```
import { SessionProvider } from "fortjs";

const sessionValues = {};

export class CustomSessionProvider extends SessionProvider {

    async get(key: string) {
        const savedSession = sessionValues[this.sessionId];
        return savedSession != null ? savedSession[key] : null;
    }

    async isExist(key: string) {
        const savedValue = sessionValues[this.sessionId];
        return savedValue == null ? false : savedValue[key] != null;
    }

    async getAll() {
        const savedValue = sessionValues[this.sessionId];
        return savedValue == null ? {} : savedValue;
    }

    async set(key: string, val: any) {
        const savedValue = sessionValues[this.sessionId];
        if (savedValue == null) {
            this.createSession();
            sessionValues[this.sessionId] = {
                [key]: val
            };
        }
        else {
            savedValue[key] = val;
        }
    }

    setMany(values: { [key: string]: any }) {
        return Promise.all(
            Object.keys(values).map((key) => {
                return this.set(key, values[key]);
            })
        );
    }

    async remove(key: string) {
        const savedValue = sessionValues[this.sessionId];
        if (savedValue != null) {
            savedValue[key] = null;
        }
    }

    async clear() {
        // remove session values
        delete sessionValues[this.sessionId];
        // expire cookie in browser
        await this.destroySession();
    }
}

```

After you have created a session provider, you need to tell fortjs to use new session provider.

```
import { Fort } from "fortjs";
import { UserController } from "./controllers";
import { CustomSessionProvider } from "./extra/custom_session_provider";

class App extends Fort {
    constructor() {
        super();

        // set your session provider
        this.sessionProvider = CustomSessionProvider

        //add routers
        this.routers = [{
            controller: UserController,
            path: "/user"
        }];
        
    }
}

new App().create({
    appName: "MyAwesomeApp"
});
```

Have a look at redis session provider example - [https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/session-provider/redis](https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/session-provider/redis)