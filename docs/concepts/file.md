---
title: "File"
keywords: [file, upload, fortjs, node]
description: "Access request file in nodejs using fortjs"
---

# File

You can use `file` to access http request files. It is class member of  Guard ,Shield and Controller.

## Upload file

Let's see how to upload a file - 

```javascript
import { Controller, textResult, route, fileResult, worker, HTTP_METHOD } from "fortjs";
import * as Path from "path";

export class FileController extends Controller {
   
    @worker(HTTP_METHOD.Post)
    @route("/upload")
    async uploadFile() {

        let result;
        // check whether file exist in the http request
        if (this.file.isExist('jsstore') === true) {
            // save file to desired location

            const pathToSave = Path.join(__dirname, "../upload.png");
            await this.file.saveTo('jsstore', pathToSave);
            result = "file saved";
        } else {
            result = "file not saved";
        }
        return textResult(result);
    }    
}
```
