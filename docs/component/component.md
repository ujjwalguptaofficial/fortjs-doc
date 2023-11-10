---
sidebar_position: 11
title: "Components"
keywords: [components, modularize, app, fortjs, node]
description: "Description about components of fortjs"
---

# Component

Components are a vital part of a Fort application, facilitating the writing of modular and reusable code. They operate independently, each having its own lifecycle and scope.

There are three types of components in Fort:

1. [Wall](/docs/component/wall)
2. [Shield](/docs/component/shield)
3. [Guard](/docs/component/guard)

These components play distinct roles in the application's architecture, contributing to its flexibility and maintainability.

## Component Flow 

<!-- <img src={require("/static/img/icons/fort_component.png").default} height="600"/> -->

```sql
HTTP Request
    |
Initialize Components
    |
Execute Walls (Incoming)
    |
    | (If Wall Rejects)
    |----------------------|
    |                      |
    | Response Flow        |
    |                      |
    |----------------------|
    |
    | (If Wall Allows)
    |----------------------|
    |                      |
    | Execute Shields       |
    |                      |
    |----------------------|
    |
Execute Shields
    |
    | (If Shield Rejects)
    |----------------------|
    |                      |
    | Execute Walls        |
    | (Outgoing)           |
    |                      |
    |----------------------|
    |
    | (If Shield Allows)
    |----------------------|
    |                      |
    | Execute Guards       |
    |                      |
    |----------------------|
    |
Execute Guards
    |
    | (If Guard Rejects)
    |----------------------|
    |                      |
    | Execute Walls        |
    | (Outgoing)           |
    |                      |
    |----------------------|
    |
    | (If Guard Allows)
    |----------------------|
    |                      |
    | Execute Controller   |
    | Method               |
    |                      |
    |----------------------|
    |
Execute Controller
    |
Execute Walls (Outgoing)
    |
Response Flow
    |

```
👉 **The above picture illustrates the architecture of a Fort.js app and the flow of an HTTP request within the app:**

When an HTTP request enters a Fort.js app, it embarks on a journey through a well-defined sequence of components, each playing a crucial role in the app's architecture. The journey is orchestrated as follows:

1. **Initialize Components:**
   - The app initializes its components, preparing for the incoming request.

2. **Execute Walls (Incoming):**
   - The request encounters the first line of defense, the [Wall](/docs/component/wall). 
   - If the Wall rejects the request, the journey concludes with a direct response flow.
   - If the Wall allows, the request proceeds to the next phase.

3. **Execute Shields:**
   - The [Shield](/docs/component/shield) evaluates the request, determining whether to grant access to the next stage.
   - If the Shield rejects, the journey redirects to execute outgoing Walls, leading to the response flow.
   - If the Shield allows, the request advances to the next component.

4. **Execute Guards:**
   - The [Guard](/docs/component/guard) assesses the request, deciding whether it's authorized to proceed to the controller method.
   - If the Guard rejects, the journey reroutes to execute outgoing Walls, concluding with the response flow.
   - If the Guard allows, the request moves forward to the final phase.

5. **Execute Controller Method:**
   - The request reaches the [Controller](/docs/controller), executing the designated method that encapsulates the desired resource.

6. **Execute Walls (Outgoing):**
   - Outgoing [Walls](/docs/component/wall) may perform additional actions before the response is sent.
   - The journey proceeds to the final phase.

7. **Response Flow:**
   - The HTTP response is constructed, reflecting the outcomes of the entire journey through the app.

In this structured and modular flow, each component contributes to the app's security, logic, and overall functionality, ensuring a robust and controlled handling of incoming HTTP requests.

**Summary:**

1. **Not Mandatory, Highly Recommended:**
   - While it's not mandatory to create individual components, it is highly recommended. You can build your application with just Controllers and Workers, but incorporating components offers significant advantages. Components facilitate the modularization of your app into dedicated features, resulting in cleaner, more reusable, and testable code.

2. **Modularization for Clean Code:**
   - Components serve as dedicated building blocks for specific functionalities. They play a pivotal role in modularizing your application, making the codebase cleaner and more maintainable.

3. **Flexibility and Testability:**
   - Leveraging components enhances the flexibility of your application. Each component has its own lifecycle and scope, providing a clear separation of concerns. This separation not only makes the codebase more modular but also significantly improves testability.

4. **Beyond Blocking Requests:**
   - While we explored components being used to block requests in this guide, their utility extends beyond that. Components can also perform specific tasks and pass results from one component to another. For example, they can handle data validation, extract information like IP addresses, and seamlessly transfer data between different parts of the application.

By embracing components, you empower your Fort.js application with a structured and modular architecture, fostering code quality, reusability, and efficient testing practices.

*For more details on each component's functionalities, refer to the specific documentation for each component type.*

 