<template><Layout title='Session Provider' description='Customize session provider in fortjs' keywords='session provider, create session provider, options, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/session-provider.md'><p>By default fortjs provides a memory session provider which stores all your data in memory &amp; data is lost when nodejs process is stopped or restarted.</p>
<p>You can create your own session provider &amp; store it in database or wherever you want. A session provider is a class which extends the class - <code>SessionProvider</code>.</p>
<p>Let's see how we can implement a simple memory session provider - </p>
<pre><code>import { SessionProvider } from "fortjs";

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
            Object.keys(values).map((key) =&gt; {
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
</code></pre>
<p>After you have created a session provider, you need to tell fortjs to use new session provider.</p>
<pre><code>import { Fort } from "fortjs";
import { UserController } from "./controllers";
import { CustomSessionProvider } from "./extra/custom_session_provider";

// set your session provider
Fort.sessionProvider = CustomSessionProvider

//add routes
Fort.routes = [{
    controller: UserController,
    path: "/user"
}];

Fort.create();
</code></pre>
<p>Have a look at redis session provider example - <a href="https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/session-provider/redis">https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/session-provider/redis</a></p></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        