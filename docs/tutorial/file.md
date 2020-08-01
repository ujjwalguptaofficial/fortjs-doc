---
Title: "File"
Keywords: "file, upload, fortjs, node"
Description: "Access request file in nodejs using fortjs"
---

`file` is class member of  Guard ,Shield and Controller. It is used to access http request files.

Let's see how to upload a file - 

```
import { Controller, textResult, Route, fileResult, Worker, HTTP_METHOD } from "fortjs";
import * as Path from "path";

export class FileController extends Controller {
   
    @Worker(HTTP_METHOD.Post)
    @Route("/upload")
    async uploadFile() {
        const pathToSave = Path.join(__dirname, "../upload.png");
        let result;
        // check whether file exist
        if (this.file.isExist('jsstore') === true) {
            // save file to desired location
            await this.file.saveTo('jsstore', pathToSave);
            result = "file saved";
        } else {
            result = "file not saved";
        }
        return textResult(result);
    }    
}
```
