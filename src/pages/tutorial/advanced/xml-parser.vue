<template><Layout title='XmlBodyParser' description='Configure fortjs to accept xml data as http body' keywords='xml, parser, accept xml, body, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/advanced/xml-parser.md'><p>By default FortJs doesn't handle xml data in http body but can be configured very easily.</p>
<p>You need to create a class extending abstract class <code>XmlParser</code></p>
<pre><code>import { XmlParser} from "fortjs";

export class XmlToJsonParser extends XmlParser {

    async parse(xml) {
       // convert xml to string and return a json object    
    }

}
</code></pre>
<p>and pass this class in App configuration - </p>
<pre><code>import { Fort } from 'fortjs';
import { XmlToJsonParser } from './xml-parser';

Fort.xmlParser = XmlToJsonParser;
</code></pre>
<p>You can take a look at example - <a href="https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/xml-in-body">xml-in-body</a>.</p></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        