---
title: "Format Response"
keywords: [format response, multiple response, mime type, fortjs, node]
description: "Formatting response in nodejs using fortjs"
---

# Format response

You can customize the format of your response and based on [content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation) fortjs select the appropriate response. If an appropriate response is not found then a response with status code - 406 is returned.

A result of type - [HttpFormatResult](/docs/types/http-format-result.md) is used to return the response with different format.

Let's see an example -

```
import { Controller, defaultWorker, HttpFormatResult, HTTP_STATUS_CODE, MIME_TYPE} from "fortjs";

export class RandomController extends Controller {
    
    @defaultWorker()
    async format() {
        const result = {
            statusCode: HTTP_STATUS_CODE.Ok,
            responseFormat: {
                [MIME_TYPE.Json]: () => {
                    return { message: "hello world" }
                },
                [MIME_TYPE.Html]: () => {
                    return "<p>hello world</p>"
                },
                [MIME_TYPE.Text]: () => {
                    return "hello world"
                }
            }
        } as HttpFormatResult;
        return result;
    }
}
```

In the above code - we are returning three format (html, json, text).