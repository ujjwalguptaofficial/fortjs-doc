---
title: "Database"
keywords: [Fort.js Database, Fort.js ORM, Sequelize, TypeORM, Prisma, Fort.js Database Examples, Fort.js Database Connectivity, MongoDB with Fort.js, Fort.js CRUD Operations, Database Integration in Fort.js, Fort.js Data Modeling, Fort.js Database Configuration, Fort.js Data Persistence, Fort.js Best Practices, Fort.js Database Security, Fort.js MySQL, Fort.js SQLite, Fort.js SQL Server]
description: "Explore database integration with Fort.js using popular ORM libraries such as Sequelize, TypeORM, and Prisma. Learn how to connect Fort.js to PostgreSQL, MongoDB, MySQL, SQLite, and SQL Server. Discover best practices, data modeling, CRUD operations, and database security in Fort.js applications."
---

# Database

Fort.js simplifies the process of utilizing various databases with ease. It seamlessly integrates with popular ORM (Object-Relational Mapping) libraries such as Sequelize, TypeORM, Prisma, and more.

This documentation will guide you through connecting to a PostgreSQL database via [sequelize ORM](https://sequelize.org/), but rest assured, the same principles can be applied across different database systems.

## Installation

To streamline the database connection, let's install the PostgreSQL client library and Sequelize:

```shell
npm i sequelize pg
```

For detailed installation instructions, please refer to the [Sequelize installation documentation](https://sequelize.org/docs/v6/getting-started/).

## Configure Sequelize

Create a Sequelize configuration file, typically named sequelize.js or database.js in your project's root directory. Add the following content:

```js
// sequelize.js

import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('your_database', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // Set to true to log SQL queries
});

```
Replace 'your_database', 'your_username', and 'your_password' with your PostgreSQL database name, username, and password, respectively.

## Set Up a Model

Create a Sequelize model for your database table. For example, let's create a User model. In the models directory, create a file named user.js:

```js
// models/user.js

import { DataTypes } from 'sequelize';
import { sequelize } from '@/sequelize';

export const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});
```

## Initialize Sequelize in Fort.js

```js
async function initiateDatabase(){
    // Initialize Sequelize
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
    // Sync models with the database
    await sequelize.sync();
    console.log('All models were synchronized successfully.');
}
```

Let's use `initiateDatabase` method in our application setup code. Update your index.js or app.js file:

```js
import { Fort } from "fortjs";
import { UserController } from "./controllers";
import { sequelize } from "@/sequelize";

async function initiateDatabase(){
    // Initialize Sequelize
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
    // Sync models with the database
    await sequelize.sync();
    console.log('All models were synchronized successfully.');
}

export const createApp = async () => {
    Fort.routes = routes;
    process.env.APP_URL = `http://localhost:${Fort.port}`;
    //highlight-next-line
    await initiateDatabase();
    await Fort.create();
};

if (process.env.NODE_ENV !== "test") {
    createApp().then(() => {
        Fort.logger.debug(`Your fort is located at address - ${process.env.APP_URL}`);
    }).catch(err => {
        console.error(err);
    });
}
```

## Use Sequelize Models

Now you can use the Sequelize models in your Fort.js controllers or services. For example:

```js title=controllers/userController.js 

import { Controller, jsonResult, http } from 'fortjs';
import { User } from '@/models/user';

export class UserController extends Controller {

  @http.get("/")
  async getAllUsers() {
    const users = await User.findAll();
    return jsonResult(users);
  }
}
```

## Controller route

To activate our controller, we need to map it to a route. Open the src/routes.js or src/routes.ts file in your app, and then update the routes code as follows:

```js
export const routes = [
    {
        path: "/*",
        controller: DefaultController
    },
    //highlight-start
    {
        path: "/user",
        controller: UserController
    }
    //highlight-end
];
```

now hit the endpoint - `localhost:4000/user` and you should see empty array as you don't have any data in the table.

## Create Service File

While using models directly can work, it tightly couples our controller to the database, making unit testing of the controller challenging. That's why it's recommended to establish a service layer.

:::tip
By creating a service layer, you can encapsulate database-related logic, making your controllers more focused on handling HTTP requests and improving the testability of your application. This separation of concerns enhances code modularity and maintainability in the long run.
:::

Let's create a file `user_service.js` inside the folder `services` 

```js title=services/user_service.js
import { User } from '@/models/user';
export class UserService {
  
  async findAll(){
    const users = await User.findAll();
    return users;
  }

}
```

### Use Service File in the Controller

While we can directly import the service file and use it, it is recommended to inject it as a dependency using the `singleton` decorator. This approach ensures that our controllers are loosely coupled, making them more testable.

By injecting the service as a dependency, we adhere to the principles of dependency injection, promoting a cleaner and more modular design. This makes it easier to substitute dependencies during testing and allows for better code maintainability.

```js
import { Controller, jsonResult, singleton, http } from 'fortjs';
import { UserService } from '@/services/user_service';

export class UserController extends Controller {

  constructor(@singleton(UserService) userService){
    super();
    this.userService = userService;
  }

  @http.get("/")
  async getAllUsers() {
    const users = await this.userService.findAll();
    return jsonResult(users);
  }
}
```

Similar to the above snippet, you can use any other database and ORM library. Here are links to some examples:

- [PgSQL examples](https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/pgsql)
- [MongoDB examples](https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/mongodb)
