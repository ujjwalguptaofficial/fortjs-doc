---
title: "XmlBodyParser"
keywords: [xml, parser, accept xml, body, node]
description: "Configure fortjs to accept xml data as http body"
---

# XmlParser

By default FortJs doesn't handle xml data in http body but can be configured very easily.

You need to create a class extending abstract class `XmlParser`

```javascript
import { XmlParser} from "fortjs";

export class XmlToJsonParser extends XmlParser {

    async parse(xml) {
       // convert xml to string and return a json object    
    }

}
```

and pass this class in App configuration - 

```javascript
import { Fort } from 'fortjs';
import { XmlToJsonParser } from './xml-parser';

Fort.xmlParser = XmlToJsonParser;
```

You can take a look at example - [xml-in-body](https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/xml-in-body).
