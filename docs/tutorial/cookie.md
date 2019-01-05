---
Title: "Cookie"
---

`cookie` is class member of Wall, Guard , Shield and Controller.

Let's see how we can use cookie -

```
import { Controller, DefaultWorker textResult, viewResult } from "fortjs";
import { HttpCookie } from "fortjs";

export class DefaultController extends Controller {
    @DefaultWorker()
    async default() {
        try {
            // check exist
            const isCookieExist = this.cookie.isExist('cookie_name');

            // get cookie
            const cookie = this.cookie.getCookie('cookie_name');

            //add cookie
            const newCookie = new HttpCookie('new_cookie','cookie_value');
            this.cookie.addCookie(newCookie);

            //remove cookie
            this.cookie.removeCookie('cookie_name');

            const result = await viewResult('controller:default,action:default');
            return result;
        } catch (ex) {
            console.log(ex);
            // handle exception and show user a good message.
            // save this ex in a file or db, so that you can know what's the issue and where
            const result = await textResult(`Our server is busy right now. Please try later.`);
            return result;
        }
    }
}
```

In the same way you can access cookie in Wall, Guard and Shield.