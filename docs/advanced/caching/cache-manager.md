---
title: "Cache Manager"
keywords: [Fort.js, caching, cache manager, performance optimization, web development, JavaScript framework]
description: "Explore how to implement caching in your Fort.js applications for improved performance. Learn about the cache manager and best practices for caching strategies."   
---

# Cache Manager

The Cache Manager allows you to manually cache data using key-value pairs. In Fort.js, you can access the `cache` property in all components to utilize the Cache Manager.

:::info
`cacheFor` internally uses Cache Manager.
:::

## Save data

The `set` method available on `cache` can be used to save data. The `set` method accepts - key, value and ttl in seconds. 

```js
import { Controller, http, cacheFor, textResult } from "fortjs";

export class CacheController extends Controller {

    @http.post("/add")
    async cacheDataManually() {
        const { key, value } = this.body;
        //highlight-start
        // cache this data for 60 second
        await this.cache.set(key, value, 60);
        //highlight-end
        return textResult("Ok");
    }
}
```

## Get data

Once you have save data, you can get data using `get` property to fetch the data stored.

```js
import { Controller, http, cacheFor, jsonResult } from "fortjs";

export class CacheController extends Controller {

    @http.get("/get/{key}")
    async getCacheData() {
        const { key } = this.param;
        //highlight-start
        const value = await this.cache.get(key);
        //highlight-end
        return jsonResult({
            value: value && value.data
        });
    }

}
```

## Delete data

The stored data can be deleted using `delete` method. The `delete` method returns boolean value indicating if data is deleted or not.

```js
import { Controller, http, cacheFor, jsonResult } from "fortjs";

export class CacheController extends Controller {

    @http.get("/delete/{key}")
    async deleteCache() {
        const { key } = this.param;
        //highlight-start
        const value = await this.cache.delete(key);
        //highlight-end
        return jsonResult({
            value: value
        });
    }
}
```