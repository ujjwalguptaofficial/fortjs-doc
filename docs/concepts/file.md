---
sidebar_position: 8
title: "File"
keywords: [Fort.js, File Handling, File Upload, Web Development]
description: "Explore file handling capabilities in Fort.js, including file uploads and storage. Learn how to implement robust file handling functionality for your web application."
---

# File Handling

To facilitate file uploads, utilize the `file` property, accessible as a class member within `Guard`, `Shield`, and `Controller`. This property provides convenient access to the files included in the HTTP request.

## File Upload

Let's explore the process of uploading a file in Fort.js:

```js
import { Controller, textResult, http } from "fortjs";
import * as Path from "path";

export class FileController extends Controller {
   
    @http.post("/upload")
    async uploadFile() {

        let result;
        // Check if a file exists in the HTTP request
        if (this.file.isExist('jsstore') === true) {
            // Save the file to the desired location

            const pathToSave = Path.join(__dirname, "../upload.png");
            //highlight-start
            // Supply the filename from the request and the path to save
            await this.file.saveTo('jsstore', pathToSave);
            //highlight-end
            result = "File saved";
        } else {
            result = "File not saved";
        }
        return textResult(result);
    }    
}
```

In this example, the `uploadFile` method handles file uploads. It checks if a file named 'jsstore' is present in the HTTP request. If the file exists, it is saved to a specified location. Adjust the filename and path as needed for your application. The process ensures a seamless file upload mechanism in Fort.js.