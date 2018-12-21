---
Title: "Params"
---

`params` is class member of  Guard ,Shield and Controller. It is used to extract route data for placeholder based routing.

e.g - consider the route - "abc.com/{value}/hi" . Here value is a placeholder and this can be extracted using params. 

```
export class FileController extends Controller {
   
    @route("/scripts/{file}.js")
    @worker()
    async getScripts() {
        const fileName = this.params.file;
    }
}
```

For more info about routing, please check the [route](route) doc.