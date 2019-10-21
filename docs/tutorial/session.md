---
Title: "Session"
Keywords: "session, uses, example, fortjs, node"
Description: "Using session in fortjs"
---

`session` is class member of Wall, Guard , Shield and Controller. 

Let's see how we can use session - 

```
import { Controller, DefaultWorker, textResult, viewResult } from "fortjs";

export class DefaultController extends Controller {
    @DefaultWorker()
    async default() {
        // check if session exist
        const isSessionExist = await this.session.isExist('userId');

        // add value to session
        await this.session.set('userId', 45);

        // get session value
        const userIdFromSession = await this.session.get('userId');

        // remove session
        await this.session.remove('session_name');

        // set multiple session at a time
        this.session.setMany([{
            key: 'user_id',
            value: 1
        }, {
            key: 'name',
            value: 'ujjwal gupta'
        }])

        const result = await viewResult('controller:default,action:default');
        return result;
    }
}
```
