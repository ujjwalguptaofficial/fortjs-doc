---
Title: "Cookie"
Keywords: "cookie, http, manipulation, fortjs, node"
Description: "How to access Http Cookie in node using fortjs"
---

# Cookie

`cookie` is class member of Wall, Guard , Shield and Controller.

Let's see how we can use cookie -

```
import { Controller, defaultWorker textResult } from "fortjs";

export class DefaultController extends Controller {

    @defaultWorker()
    async default() {
        
        // check exist
        const isCookieExist = this.cookie.isExist('cookie_name');

        // get cookie
        const cookie = this.cookie.getCookie('cookie_name');

        //add cookie
        const newCookie = new HttpCookie('new_cookie','cookie_value');
        this.cookie.addCookie(newCookie);

        //remove cookie
        this.cookie.removeCookie('cookie_name');

        return textResult("Hey, we have tested cookie successfully");
    }
}
```

In the same way you can access cookie in Wall, Guard and Shield.