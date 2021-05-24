<template><Layout title='File' description='Access request file in nodejs using fortjs' keywords='file, upload, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/concepts/file.md'><p><code>file</code> is class member of  Guard ,Shield and Controller. It is used to access http request files.</p>
<p>Let's see how to upload a file - </p>
<pre><code>import { Controller, textResult, Route, fileResult, Worker, HTTP_METHOD } from "fortjs";
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
</code></pre></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        