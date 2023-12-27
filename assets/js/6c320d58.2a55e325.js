"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[267],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7890:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const s={title:"Database",keywords:["Fort.js Database","Fort.js ORM","Sequelize","TypeORM","Prisma","Fort.js Database Examples","Fort.js Database Connectivity","MongoDB with Fort.js","Fort.js CRUD Operations","Database Integration in Fort.js","Fort.js Data Modeling","Fort.js Database Configuration","Fort.js Data Persistence","Fort.js Best Practices","Fort.js Database Security","Fort.js MySQL","Fort.js SQLite","Fort.js SQL Server"],description:"Explore database integration with Fort.js using popular ORM libraries such as Sequelize, TypeORM, and Prisma. Learn how to connect Fort.js to PostgreSQL, MongoDB, MySQL, SQLite, and SQL Server. Discover best practices, data modeling, CRUD operations, and database security in Fort.js applications."},o="Database",i={unversionedId:"guides/database",id:"guides/database",title:"Database",description:"Explore database integration with Fort.js using popular ORM libraries such as Sequelize, TypeORM, and Prisma. Learn how to connect Fort.js to PostgreSQL, MongoDB, MySQL, SQLite, and SQL Server. Discover best practices, data modeling, CRUD operations, and database security in Fort.js applications.",source:"@site/docs/guides/database.md",sourceDirName:"guides",slug:"/guides/database",permalink:"/docs/guides/database",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/guides/database.md",tags:[],version:"current",frontMatter:{title:"Database",keywords:["Fort.js Database","Fort.js ORM","Sequelize","TypeORM","Prisma","Fort.js Database Examples","Fort.js Database Connectivity","MongoDB with Fort.js","Fort.js CRUD Operations","Database Integration in Fort.js","Fort.js Data Modeling","Fort.js Database Configuration","Fort.js Data Persistence","Fort.js Best Practices","Fort.js Database Security","Fort.js MySQL","Fort.js SQLite","Fort.js SQL Server"],description:"Explore database integration with Fort.js using popular ORM libraries such as Sequelize, TypeORM, and Prisma. Learn how to connect Fort.js to PostgreSQL, MongoDB, MySQL, SQLite, and SQL Server. Discover best practices, data modeling, CRUD operations, and database security in Fort.js applications."},sidebar:"tutorialSidebar",previous:{title:"Middleware",permalink:"/docs/concepts/middleware"},next:{title:"Rest",permalink:"/docs/guides/rest"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Configure Sequelize",id:"configure-sequelize",level:2},{value:"Set Up a Model",id:"set-up-a-model",level:2},{value:"Initialize Sequelize in Fort.js",id:"initialize-sequelize-in-fortjs",level:2},{value:"Use Sequelize Models",id:"use-sequelize-models",level:2},{value:"Create Service File",id:"create-service-file",level:2},{value:"Use Service File in the Controller",id:"use-service-file-in-the-controller",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"database"},"Database"),(0,a.kt)("p",null,"Fort.js simplifies the process of utilizing various databases with ease. It seamlessly integrates with popular ORM (Object-Relational Mapping) libraries such as Sequelize, TypeORM, Prisma, and more."),(0,a.kt)("p",null,"This documentation will guide you through connecting to a PostgreSQL database via ",(0,a.kt)("a",{parentName:"p",href:"https://sequelize.org/"},"sequelize ORM"),", but rest assured, the same principles can be applied across different database systems."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"To streamline the database connection, let's install the PostgreSQL client library and Sequelize:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i sequelize pg\n")),(0,a.kt)("p",null,"For detailed installation instructions, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://sequelize.org/docs/v6/getting-started/"},"Sequelize installation documentation"),"."),(0,a.kt)("h2",{id:"configure-sequelize"},"Configure Sequelize"),(0,a.kt)("p",null,"Create a Sequelize configuration file, typically named sequelize.js or database.js in your project's root directory. Add the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// sequelize.js\n\nimport { Sequelize } from 'sequelize';\n\nexport const sequelize = new Sequelize('your_database', 'your_username', 'your_password', {\n  host: 'localhost',\n  dialect: 'postgres',\n  logging: false, // Set to true to log SQL queries\n});\n\n")),(0,a.kt)("p",null,"Replace 'your_database', 'your_username', and 'your_password' with your PostgreSQL database name, username, and password, respectively."),(0,a.kt)("h2",{id:"set-up-a-model"},"Set Up a Model"),(0,a.kt)("p",null,"Create a Sequelize model for your database table. For example, let's create a User model. In the models directory, create a file named user.js:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// models/user.js\n\nimport { DataTypes } from 'sequelize';\nimport { sequelize } from '@/sequelize';\n\nexport const User = sequelize.define('User', {\n  username: {\n    type: DataTypes.STRING,\n    allowNull: false,\n  },\n  email: {\n    type: DataTypes.STRING,\n    allowNull: false,\n    unique: true,\n  },\n});\n")),(0,a.kt)("h2",{id:"initialize-sequelize-in-fortjs"},"Initialize Sequelize in Fort.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"async function initiateDatabase(){\n    // Initialize Sequelize\n    await sequelize.authenticate();\n    console.log('Connection to the database has been established successfully.');\n    // Sync models with the database\n    await sequelize.sync();\n    console.log('All models were synchronized successfully.');\n}\n")),(0,a.kt)("p",null,"Let's use ",(0,a.kt)("inlineCode",{parentName:"p"},"initiateDatabase")," method in our application setup code. Update your index.js or app.js file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { Fort } from "fortjs";\nimport { UserController } from "./controllers";\nimport { sequelize } from "@/sequelize";\n\nasync function initiateDatabase(){\n    // Initialize Sequelize\n    await sequelize.authenticate();\n    console.log(\'Connection to the database has been established successfully.\');\n    // Sync models with the database\n    await sequelize.sync();\n    console.log(\'All models were synchronized successfully.\');\n}\n\nexport const createApp = async () => {\n    Fort.routes = routes;\n    process.env.APP_URL = `http://localhost:${Fort.port}`;\n    //highlight-next-line\n    await initiateDatabase();\n    await Fort.create();\n};\n\nif (process.env.NODE_ENV !== "test") {\n    createApp().then(() => {\n        Fort.logger.debug(`Your fort is located at address - ${process.env.APP_URL}`);\n    }).catch(err => {\n        console.error(err);\n    });\n}\n')),(0,a.kt)("h2",{id:"use-sequelize-models"},"Use Sequelize Models"),(0,a.kt)("p",null,"Now you can use the Sequelize models in your Fort.js controllers or services. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=controllers/userController.js",title:"controllers/userController.js"},"\nimport { Controller, jsonResult, http } from 'fortjs';\nimport { User } from '@/models/user';\n\nexport class UserController extends Controller {\n\n  @http.get(\"/\")\n  async getAllUsers() {\n    const users = await User.findAll();\n    return jsonResult(users);\n  }\n}\n")),(0,a.kt)("h2",{id:"create-service-file"},"Create Service File"),(0,a.kt)("p",null,"While using models directly can work, it tightly couples our controller to the database, making unit testing of the controller challenging. That's why it's recommended to establish a service layer."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"By creating a service layer, you can encapsulate database-related logic, making your controllers more focused on handling HTTP requests and improving the testability of your application. This separation of concerns enhances code modularity and maintainability in the long run.")),(0,a.kt)("p",null,"Let's create a file ",(0,a.kt)("inlineCode",{parentName:"p"},"user_service.js")," inside the folder ",(0,a.kt)("inlineCode",{parentName:"p"},"services")," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=services/user_service.js",title:"services/user_service.js"},"import { User } from '@/models/user';\nexport class UserService {\n  \n  async findAll(){\n    const users = await User.findAll();\n    return users;\n  }\n\n}\n")),(0,a.kt)("h3",{id:"use-service-file-in-the-controller"},"Use Service File in the Controller"),(0,a.kt)("p",null,"While we can directly import the service file and use it, it is recommended to inject it as a dependency using the ",(0,a.kt)("inlineCode",{parentName:"p"},"singleton")," decorator. This approach ensures that our controllers are loosely coupled, making them more testable."),(0,a.kt)("p",null,"By injecting the service as a dependency, we adhere to the principles of dependency injection, promoting a cleaner and more modular design. This makes it easier to substitute dependencies during testing and allows for better code maintainability."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Controller, jsonResult, singleton } from 'fortjs';\nimport { UserService } from '@/services/user_service';\n\nexport class UserController extends Controller {\n\n  constructor(@singleton(UserService) userService){\n    super();\n    this.userService = userService;\n  }\n\n  async getAllUsers() {\n    const users = await this.userService.findAll();\n    return jsonResult(users);\n  }\n}\n")),(0,a.kt)("p",null,"Similar to the above snippet, you can use any other database and ORM library. Here are links to some examples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/mongodb"},"MongoDB examples"))))}d.isMDXComponent=!0}}]);