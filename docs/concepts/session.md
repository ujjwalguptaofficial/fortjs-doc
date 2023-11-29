---
title: "Session"
keywords: [FortJs, Node.js, web framework, session, session store, documentation]
description: "Learn about sessions in FortJs, a web framework for Node.js. Understand how to manage session data and customize the session store."
---

# Session

Session is a state management technique that empowers you to store and retrieve values for a user as they navigate through pages in a web application.

## Using session

FortJs provides a session property that is available in all components.

```js
import { Controller, http, textResult } from "fortjs";

export class DefaultController extends Controller {

    @http.get("/")
    async default() {
        // Check if session exists
        const isSessionExist = await this.session.isExist('userId');

        // Add value to session
        await this.session.set('userId', 45);

        // Get session value
        const userIdFromSession = await this.session.get('userId');

        // Remove session
        await this.session.remove('session_name');

        // Set multiple sessions at a time
        await this.session.setMany({
            'user_id': 1,
            'name': 'ujjwal gupta'
        });

        return textResult('Welcome to FortJs');
    }
}
```

By default, FortJs stores all your session data in memory, which means data will be lost when the Node.js process is stopped or restarted.

If you want to preserve your session values, you need to store your values in a database or use any tools or services. You can customize the session store by creating a [session store](/docs/advanced/session-store.md)."