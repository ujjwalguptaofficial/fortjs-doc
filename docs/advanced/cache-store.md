---
title: "Cache store"
keywords: [Fort.js, cache store, caching, database, cache management, performance optimization, JavaScript framework]
description: "Explore how to configure and use cache stores in Fort.js to store cache data efficiently. Learn about implementing custom cache stores and integrating with databases or external services."   
---

# Cache store

FortJs allows you to configure your cache store and store cache data in a database, or use any service. A cache store is a class that implements the interface - `ICacheStore`.

## Implement a cache store

Let's explore how to implement a simple memory cache store 

```js
import { ICacheData, ICacheStore } from "fortjs";

const store = new Map<any, ICacheData>();

export class MemoryCacheStore implements ICacheStore {

    async set(option: ICacheData) {
        store.set(option.key, option);
    }

    async get(key: string) {
        return store.get(key);
    }

    async delete(key: string) {
        return store.delete(key);
    }

    count() {
        return store.size;
    }

    store() {
        return store;
    }
}
```

## Use cache Store

Once you have created a session store, you need to instruct FortJs to use the new session store.

```js
import { Fort } from "fortjs";
import { UserController } from "./controllers";
import { MemoryCacheStore } from "./memory_cache_store";

//highlight-start
// set your cache store provider
Fort.cacheStore = MemoryCacheStore
//highlight-end
```