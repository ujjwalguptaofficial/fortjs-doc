---
sidebar_position: 2
title: "Shield"
keywords: [Fort.js Shields, Security Layers, Authentication, Authorization, Rate Limiting, Input Validation, Request Logging, Maintenance Mode, CORS Handling, IP Whitelisting, IP Blacklisting, Fort.js Security, Web Application Security]
description: "Enhance the security and control access to your Fort.js application using Shields. Shields act as security layers on top of controllers, allowing you to execute logic before granting access to specific resources. Explore use cases like authentication, authorization, rate limiting, input validation, and more."
---

# Shield

**Shield** is a security layer on top of a Controller. It controls whether a request should be allowed to enter inside the Controller or not.

It can be used for:

- Performing tasks before passing the request to the Controller.
- Implementing authentication at the controller level.

For example, consider a scenario where a controller "Admin" is only allowed if the request is authenticated. You can create a shield that checks for the necessary conditions, and if they are not satisfied, you can reject the request.

There can be multiple shields for a controller, and every shield is called in the same order as they are defined.

A shield has following member - 

* [Request](/docs/interfaces/http-request.md)
* [Response](/docs/interfaces/http-response.md)
* [Cookie](/docs/concepts/cookie.md)
* [Session](/docs/concepts/session.md)
* [Query data](/docs/concepts/query.md)
* [Data from other components](/docs/concepts/data.md)
* Target Worker Name

## Creating shield

A **Shield** is a class that extends the `Shield` class from Fort.js. It has a `protect` method as the lifecycle of the Shield.

The `protect` method can perform any task, such as validation, and return the result. The method can return two types of data:

1. **null** - It means the shield has passed the request.
2. **HTTP response** - It means the shield has rejected the request. The HTTP response is returned to the `wallOutgoing` event and then directly returned to the user.

### Example

```javascript
import { Shield, textResult } from "fortjs";
export class AuthenticationShield extends Shield {

    async protect() {
        
        const isExist = await this.session.isExist('userId');
        if(!exist) {
            //user is not authenticated, so return error message with 401
            return textResult("Not authenticated", 401);
        }

        // returning nothing or null means shield has allowed 
    }
}
```

### Using Shield

Now let's use this shield to some controller.

```javascript
import { Controller, shields } from "fortjs";
import { AuthenticationShield } from "@/shields";

@shields(AuthenticationShield) 
export class UserController extends Controller {

}
```

## Summary

* A shield allows you to execute logic before accessing the controller.
* It can be used for controller-level tasks like authentication, etc.
* A shield can be assigned to multiple controllers. For example, an authorization shield can be placed on all controllers where authentication is required.

## Use case

Certainly! Here are some common use cases for using shields in a Fort.js application:

1. **Authentication:** You can use a shield to check whether a user is authenticated before allowing access to a controller. If the authentication fails, the shield can reject the request.

2. **Authorization:** Shields can be employed to check whether a user has the necessary permissions to perform a specific action. If the user lacks the required permissions, the shield can reject the request.

3. **Rate Limiting:** Implementing rate limiting logic to control the number of requests a user can make within a certain timeframe. If the user exceeds the limit, the shield can reject the request.

4. **Input Validation:** Shields can be used to validate incoming data before it reaches the controller. If the data does not meet certain criteria, the shield can reject the request.

5. **Maintenance Mode:** A shield can be employed to check whether the application is in maintenance mode. If it is, the shield can reject requests and return a maintenance message.

6. **IP Whitelisting/Blacklisting:** Controlling access based on the IP address of the incoming request. Shields can reject requests from blacklisted IPs or allow requests only from whitelisted IPs.

These are just a few examples, and the flexibility of shields allows developers to implement various custom logic to meet the specific requirements of their applications.

