---
Title: "Deployment"
Keywords: "deploy, instructions, fortjs, node"
Description: "deployment in nodejs using fortjs"
---

Few things to note when you are deploying your app to production - 

* Run build for production by using the command - `npm run deploy` or `yarn run deploy`

* Customize the error page by using customize error handler. For info about how to customize, visit this link - [/tutorial/custom-error-handler/](/tutorial/custom-error-handler/)

* When runing app in production, make sure "NODE_ENV" is production. Multiple optimization like caching of views, compressing development error message etc. takes place when `NODE_ENV` is production.

* Use compression - you can configure any third party library for compression in a wall component. But we will recommend to configure the compression in the reverse proxy server like - nginix etc. Reverse proxy can be used for multiple purposes like - caching request, compression etc.

<br>
# Handling crash 
<br>
* App Crash :-  Nodejs app is stopped when an exception is not handled and in this situation your website will be down until you restart the app again. For solving this - **Use a process manager** . Process managers can be used for other purposes too like - Update settings to improve performance, Checking runtime performance & resource consumption etc. Some of the famous process managers are - PM2, Forever, StrongLoop etc.

* Server Crash :- When server crash & it restarts, your app should restart too. But that dont happens until you configure it. You can hook your app to os init system or configure your process manager to os init system. We will recommend to configure your app with process manager.


