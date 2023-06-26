---
title: "Http Format Result"
keywords: "http format result, type, options, fortjs, node"
description: "HttpFormatResult type description"
---

# HttpFormatResult

The type HttpFormatResult is used for formatting http response.

```
type HttpFormatResult = {
    statusCode: HTTP_STATUS_CODE;
    responseFormat?: {
        [type: string]: () => any;
    }
}
```