---
title: "Param"
keywords: "param, route, customize, fortjs, node"
description: "parameterizing route in fortjs"
---

# param

you can use `param` to extract route data for variable routing. It is class member of Guard and Controller. 

e.g - consider the route - "abc.com/{value}/hi" . Here value is a variable and this can be extracted using param. 

```javascript
export class FileController extends Controller {
   
    @route("/scripts/{file}.js")
    @worker()
    async getScripts() {
        const fileName = this.param.file;
    }
}
```

For more info about routing, please check the [route](/docs/route.md) doc.