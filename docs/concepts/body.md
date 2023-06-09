---
Title: "Body"
Keywords: "request, post, body, fortjs, node"
Description: "fortjs body member details"
---

# Body

`body` is class member of [Guard](/docs/components/guard.md) and [Controller](/docs/controller.md). It is used to access body data sent in http post request. 

```javascript
import { Controller, worker, HTTP_METHOD,  textResult } from "fortjs";

export class DefaultController extends Controller {

    @worker(HTTP_METHOD.Post)
    async login() {
        // access post data
        const userId = this.body.userId;
        const pwd = this.body.password;

        return textResult("OK")
    }
}
```

By default fortjs parses the body data. But it can be turned off by setting option - `shouldParsePost` . Please check [bootstrap](/docs/setup.md) doc for more info.