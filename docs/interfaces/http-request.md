---
title: "Http Request"
keywords: [http request, type, options, fortjs, node]
description: "Type http request member description"
---

# HttpRequest

The type `HttpRequest` is used for accessing request resources like url, headers etc.

```
interface IHttpRequest {
    url: string;
    method: HTTP_METHOD;
    headers: IncomingHttpHeaders;
    connection: net.Socket;
}
```