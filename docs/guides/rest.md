
# Rest

Fort.js is crafted in accordance with the principles of RESTful APIs, offering a seamless and straightforward approach to building RESTful services.

In this tutorial, we'll guide you through the process of building a simple REST API using Fort.js. The focus will be on simplicity, and we'll store data in memory for demonstration purposes.

## Implementation

Our requirement is to create `user` REST endpoints for handling user-related operations.

## 1. Data Storage

The first important part is to create a storage layer where we can access the data.
For this - Let's create a user service to handle user-related operations. In the services folder, create a file named UserService.ts:

```js title=services/UserService.ts

export class UserService {
  private users: { [key: string]: any } = {};

  addUser(id: string, username: string, email: string) {
    this.users[id] = { id, username, email };
  }

  getUser(id: string) {
    return this.users[id];
  }

  getAllUsers() {
    return Object.values(this.users);
  }
}
```

:::info
The primary goal of the User Service is to establish a foundation for efficient data storage and retrieval, catering specifically to user-related functionalities.

> By creating a service layer, you can encapsulate database-related logic, making your controllers more focused on handling HTTP requests and improving the testability of your application. This separation of concerns enhances code modularity and maintainability in the long run.
:::

## 2. Create Controller

Create a user controller to handle API endpoints related to users. In the controllers folder, create a file named UserController.ts:

```js title=controllers/UserController.ts

import { Controller, singleton, http jsonResult, textResult } from 'fortjs';
import { UserService } from '@/services/UserService';

export class UserController extends Controller {
  private userService: UserService;

  constructor(@singleton(UserService) userService: UserService) {
    super();
    this.userService = userService;
  }

  @http.get("/")
  async getAllUser() {
    const users = this.userService.getAllUsers();
    return jsonResult(users);
  }

  @http.post("/")
  async createUser() {
    const { id, username, email } = this.body;
    this.userService.addUser(id, username, email);
    return textResult('User added successfully');
  }

  @http.get("/{id}")
  async getUser() {
    const { id } = this.params;
    const user = this.userService.getUser(id);
    return jsonResult(user);
  }
}
```

In the above snippet - We have created three different methods mapping with respective route.

1. **Method: `getAllUser`**
   - **HTTP Method:** GET
   - **Path:** "/"
   - **Description:** Fetches all user data.
   - **Implementation:** Calls `getAllUsers` in `UserService` and returns a JSON response.

2. **Method: `createUser`**
   - **HTTP Method:** POST
   - **Path:** "/"
   - **Description:** Creates a new user.
   - **Implementation:** Extracts user details, calls `addUser` in `UserService`, and returns a success message.

3. **Method: `getUser`**
   - **HTTP Method:** GET
   - **Path:** "/{id}"
   - **Description:** Retrieves user details by ID.
   - **Implementation:** Extracts user ID, calls `getUser` in `UserService`, and returns a JSON response.

:::tip
We've utilized the `singleton` decorator to inject the `userService` into our controller. This approach enhances the testability of our controller. For detailed information, please refer to the [Dependency Injection documentation](/docs/concepts/dependency-injection.md).
:::

Similar to GET and POST API - you can create DELETE api. We will leave this to you but if needed help - feel free to ask in the github discussion.

## 3. Controller route

Let's map our controller to a route. Open `src/index.ts` in your app and then update the routes code to - 

```js
import { Fort } from "fortjs";
import { UserController } from "@/controllers";

// here we have mapped UserController with path "/user"
//highlight-start
Fort.routes = [
    {
        controller: UserController,
        path: "/user"
    }
]
//highlight-end

await Fort.create();
```


:::tip
🚀 Explore a Complete REST API Implementation Example 🚀

[Fort.js REST API Examples](https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/rest)

Feel free to dive into this comprehensive example to see how Fort.js can be used to build RESTful APIs.
:::tip


