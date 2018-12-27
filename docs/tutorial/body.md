---
Title: "Body"
---

`body` is class member of  Guard and Controller. It is used to access body data sent in http post request. 

```
import { Controller, viewResult, worker, HTTP_METHOD, guards, route, jsonResult, htmlResult, textResult, defaultWorker, redirectResult } from "fortjs";
import { UserService } from "../services/user_service";

export class DefaultController extends Controller {

    @worker([HTTP_METHOD.Post])
    async login() {
        // access post data
        const userId = this.body.userId;
        const pwd = this.body.password;

        if (userId != null && pwd != null) {
            const userService = new UserService();
            const user = userService.getUser(userId);
            if (user != null && user.password === pwd) {
                this.session.set('userId', userId);
                return textResult(`Authenticated`);
            }
            else {
                const result = textResult("Invalid credential");
                return result;
            }
        }
        else {
            const result = textResult("Invalid credential");
            return result;
        }
    }
}
```

By default fortjs parses the body data. But it can be turned off by setting option - `shouldParsePost` while bootstraping the app in `create` method. Please check [bootstrap](bootstrap) doc for more info.