---
Title: "Fort"
---

```
export declare class Fort {
    routes: Route[];

    walls: Array<typeof Wall>;

    httpServer: http.Server;
    /**
    * view engine use to render the view
    *
    * @type {typeof ViewEngine}
    */
    viewEngine?: typeof ViewEngine;

    /**
     * sessionProvider class, default - MemorySessionProvider
     *
     * @type {typeof SessionProvider}
     */
    sessionProvider?: typeof SessionProvider;

    /**
     * Custom error handler class
     *
     * @type {typeof ErrorHandler}
     */
    errorHandler?: typeof ErrorHandler;

    create(option: AppOption): Promise<any>;
    
    destroy(): Promise<any>;
}
```