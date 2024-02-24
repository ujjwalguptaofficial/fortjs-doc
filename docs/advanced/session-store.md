---
title: "Session store"
keywords: [FortJs, Session Store, Custom Session Store, FortJs Examples, Web Development, Node.js]
description: "Explore the implementation of a custom session store in FortJs. Learn how to manage user sessions efficiently for your FortJs applications."
---

# Session Store

FortJs allows you to configure your session store and store session data in a database, or use any service. A session store is a class that implements the interface - `ISessionStore`.

## Implement a session store

Let's explore how to implement a simple memory session store 

```js
import { ISessionStore } from "fortjs";

// A simple in-memory storage for session data
const sessionValues: Map<string, { [key: string]: any }> = new Map();

export class MemorySessionStore implements ISessionStore {
    sessionId: string;

    constructor(sessionId: string) {
        this.sessionId = sessionId;
    }

    // Private method to get the session data associated with the current session ID
    private getSessionValue_() {
        return sessionValues.get(this.sessionId);
    }

    // Check if any session data exists
    async isAnyExist() {
        return this.getSessionValue_() != null;
    }

    // Get the value associated with a specific key in the session
    async get(key: string): Promise<any> {
        const savedValue = this.getSessionValue_();
        return savedValue != null ? savedValue[key] : null;
    }

    // Get all session data
    async getAll(): Promise<{ [key: string]: any }> {
        const savedValue = this.getSessionValue_();
        return savedValue || {};
    }

    // Check if a specific key exists in the session
    async isExist(key: string): Promise<boolean> {
        const savedValue = this.getSessionValue_();
        return savedValue == null ? false : savedValue[key] != null;
    }

    // Clear all session data for the current session ID
    async clear(): Promise<void> {
        // Remove session values
        sessionValues.delete(this.sessionId);
    }

    // Set a value for a specific key in the session
    async set(key: string, val: any) {
        const savedValue = this.getSessionValue_();
        if (savedValue == null) {
            // If no session data exists, create a new entry
            sessionValues.set(this.sessionId, {
                [key]: val
            });
        } else {
            // Update the value for an existing key
            savedValue[key] = val;
        }
    }

    // Set multiple values in the session at once
    async setMany(values: { [key: string]: any }) {
        return Promise.all(
            Object.keys(values).map((key) => {
                return this.set(key, values[key]);
            })
        );
    }

    // Remove a specific key from the session
    async remove(key: string) {
        const savedValue = this.getSessionValue_();
        if (savedValue != null) {
            // Set the value to null to effectively remove it
            savedValue[key] = null;
        }
    }
}
```

## Use Session Store

Once you have created a session store, you need to instruct FortJs to use the new session store.

```js
import { Fort } from "fortjs";
import { UserController } from "./controllers";
import { MemorySessionStore } from "./memory_session_store";

//highlight-start
// set your session provider
Fort.sessionStore = MemorySessionStore
//highlight-end

//add routes
Fort.routes = [{
    controller: UserController,
    path: "/user"
}];

Fort.create();
```

For a complete example, refer to the [Session Store Example](https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/session-store)