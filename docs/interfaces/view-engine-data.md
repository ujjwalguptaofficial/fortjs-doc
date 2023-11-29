---
title: "View Engine Data"
keywords: [view engine, data, types, fortjs, node]
description: "Type viewEngineData member description"
---

# ViewEngineData

The interface IViewEngineData is used by ViewEngine to get view related data from workers.

```
interface IViewEngineData {

    /**
     * name of the view or path of view
     *
     * @type {string}
     */
    view: string;

    /**
     * view model
     *
     * @type {*}
     */
    model: any;
}
```