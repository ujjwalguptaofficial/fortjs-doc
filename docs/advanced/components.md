---
title: "Components"
keywords: [components, executeMethod, fortjs, node]
---

# Components

Fortjs exposes `Components` which allows you to access application component at anywhere in your code. 

👉 This is helpful when you want to execute a component with its dependency as it was called from the endpoint.

Components has property - `controller`.

## controller

As name sounds - it has access to Controller and expose following methods - 

1. getInstance
2. getMethod
3. executeMethod

### getInstance

getInstance allows you to get the instance or object of a Controller by its name. 

```javascript
import { Components } from "fortjs";

const instance = Components.controller.getInstance("DefaultController")

```

You can also initialize controller by passing initialization data -

```javascript
import { Components } from "fortjs";

const instance = Components.controller.getInstance("DefaultController",{
    query:{
        name:'Ujjwal Gupta'
    }
})
```

For all the initialization property, please read [Initialize doc](../test/initialize.md)

### getMethod

getMethod can be used to get a method of a controller.

```javascript

import { Components } from "fortjs";

const method = Components.controller.getMethod("UserController", "createUser");
```

### executeMethod

executeMethod can be used to execute a method of a controller. It also inject all the dependency and then execute the method.

```javascript

import { Components } from "fortjs";

const methodResult = Components.controller.executeMethod("UserController", "createUser");
```

