---
Title: "Http Format Result"
---

The type HttpFormatResult is used for formatting http response.

```
type HttpFormatResult = {
    statusCode: HTTP_STATUS_CODE;
    responseFormat?: {
        [type: string]: () => any;
    }
}
```