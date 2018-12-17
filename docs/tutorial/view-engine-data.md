---
Title: "View Engine Data"
---

type ViewEngineData is used by ViewEngine to get view related data from workers.

```
type ViewEngineData = {
    view: string;
    model: any;
    extra?: any;
}
```