---
Title: "Http Request"
Keywords: "http request, type, options, fortjs, node"
Description: "Type http request member description"
---

# HttpRequest

The type `HttpRequest` is used for accessing request resources like url, headers etc.

```
type HttpRequest = {
    url: string;
    method: HTTP_METHOD;
    headers: IncomingHttpHeaders;
    connection: net.Socket;
}
```