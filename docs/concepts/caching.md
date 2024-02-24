---
title: "Caching"
keywords: [Fort.js, caching, cacheFor decorator, performance optimization, web development, JavaScript framework]
description: "Explore how to implement caching in your Fort.js applications for improved performance. Learn about the cacheFor decorator and best practices for caching strategies."   
---

# Caching

Caching is a technique designed to store frequently used data in your application, enabling faster access.

Fort.js supports caching, allowing you to cache `GET` endpoints. When you apply caching to an endpoint, Fort.js will store it in the cache for a specified time, resulting in a faster response for your API.

:::info
By default cache data is stored in memory and Cache store can be configured to store data in any storage like in database or memory database like REDIS etc. For more information please read [Cache store documentation](../advanced/cache-store.md) 
:::

## cacheFor

Fort.js provides the cacheFor decorator, which can be used to apply caching to an endpoint. The cacheFor decorator accepts the TTL (time to live) as its first parameter.

```js
import { Controller, viewResult, textResult, assign, http, cacheFor } from "fortjs";

export class DefaultController extends Controller {

    @http.get("/hello-world")
    //highlight-start
    @cacheFor(5) // Cache response for 5 seconds
    //highlight-end
    async helloWorld(){
        return textResult("Hello World");
    }
}
```

### Cache Options

The `cacheFor` decorator accepts an object as its second parameter, which provides the following options:

1. `query`
2. `param`

#### 1. query

The `query` option allows Fort.js to cache the API response when the URL matches the specified query.

For example, to cache the response only when the URL includes `cache=true`:

```js
import { Controller, viewResult, textResult, assign, http, cacheFor } from "fortjs";

export class DefaultController extends Controller {

    
    @http.get("/hello-world")
    //highlight-start
    @cacheFor(5,{
        query:{
            cache:"true"
        }
    }) // Cache response for 5 seconds when query string has cache=true
    //highlight-end
    async helloWorld(){
        return textResult("Hello World");
    }
}
```

#### 2. param

The `param` option allows Fort.js to cache the API response when the URL matches the specified param.

For example, to cache the response only when the URL has param value of user id = 1 :

```js
import { Controller, viewResult, textResult, assign, http, cacheFor } from "fortjs";

export class DefaultController extends Controller {

    @http.get("/{id}")
    //highlight-start
    @cacheFor(5,{
        param:{
            id:"1"
        }
    }) // Cache response for 5 seconds when id =1 in param
    //highlight-end
    async getById(){
        return textResult("Hello World");
    }
}
```

## Cache Manager

The Cache Manager allows you to manually cache data using key-value pairs. In Fort.js, you can access the `cache` property in all components to utilize the Cache Manager.

:::info
`cacheFor` internally uses Cache Manager.
:::

### Save data

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

### Get data

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

### Delete data

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
