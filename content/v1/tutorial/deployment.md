---
Title: "Deployment"
Keywords: "deploy, instructions, fortjs, node"
Description: "Deployment note in nodejs using fortjs"
---

Few things to note when you are deploying your app to production - 

* Run build for production by using the command - `npm run deploy` or `yarn run deploy` . This will generate a production build of your code & files will be in bin folder. So when you want to start the app, you need to run this command - `node bin/app.js` 

* When runing app in production, make sure "NODE&#95;ENV" is production. Multiple optimization like caching of views, compressing development error message etc. takes place when "NODE&#95;ENV" is production. Check out this link to know how to setup NODE&#95;ENV <a href="https://stackoverflow.com/a/9204973/4393136">https://stackoverflow.com/a/9204973/4393136</a>

* Customize the error page by using customize error handler. For info about how to customize, visit this link - [/tutorial/custom-error-handler/](/tutorial/custom-error-handler/)

* Use compression - you can configure any third party library for compression in a wall component. But we will recommend to configure the compression in the reverse proxy server like - nginix etc. Reverse proxy can be used for multiple purposes like - caching request, compression etc.

<br>
# Handling crash 
<br>
* App Crash :-  Nodejs app is stopped when an exception is not handled and in this situation your website will be down until you restart the app again. For solving this - **Use a process manager** . Process managers can be used for other purposes too like - Update settings to improve performance, Checking runtime performance & resource consumption etc. Some of the famous process managers are - PM2, Forever, StrongLoop etc.

* Server Crash :- When server crash & it restarts, your app should restart too. But that dont happens until you configure it. You can hook your app to os init system or configure your process manager to os init system. We will recommend to configure your app with process manager.


