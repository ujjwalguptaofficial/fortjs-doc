---
title: "Format Response"
keywords: [format response, multiple response, mime type, fortjs, node]
description: "Formatting response in nodejs using fortjs"
---

# Format response

You can customize the format of your response and based on [content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation) fortjs select the appropriate response. If an appropriate response is not found then a response with status code - 406 is returned.

Let's see an example -

```js
import { Controller, http, MIME_TYPE} from "fortjs";

export class RandomController extends Controller {
    
    @http.get("/format")
    async format() {
        const result = {
            [MIME_TYPE.Json]: () => {
                return { message: "hello world" }
            },
            [MIME_TYPE.Html]: () => {
                return "<p>hello world</p>"
            },
            [MIME_TYPE.Text]: () => {
                return "hello world"
            }
        };
        return multiFormatResult(result);
    }
}
```

In the above code - we are returning three format (html, json, text).