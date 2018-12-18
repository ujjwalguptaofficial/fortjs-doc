---
Title: "Http Request"
---

The type HttpRequest is used for accessing request resources like url, headers etc.

```
type HttpRequest = {
    url: string;
    method: HTTP_METHOD;
    headers: IncomingHttpHeaders;
    connection: net.Socket;
}
```