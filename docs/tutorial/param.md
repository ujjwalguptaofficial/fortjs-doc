---
Title: "Param"
---

`param` is class member of  Guard and Controller. It is used to extract route data for placeholder based routing.

e.g - consider the route - "abc.com/{value}/hi" . Here value is a placeholder and this can be extracted using param. 

```
export class FileController extends Controller {
   
    @route("/scripts/{file}.js")
    @worker()
    async getScripts() {
        const fileName = this.param.file;
    }
}
```

For more info about routing, please check the [route](route) doc.