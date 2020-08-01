---
Title: "Http Response"
Keywords: "http response, type, options, fortjs, node"
Description: "Type HttpResponse member description"
---


```
type HttpResponse = {
    setHeader(name: string, value: number | string | string[]): void;
    getHeader(name: string): number | string | string[] | undefined;
    getHeaders(): OutgoingHttpHeaders;
    getHeaderNames(): string[];
    hasHeader(name: string): boolean;
    removeHeader(name: string): void;
}
```