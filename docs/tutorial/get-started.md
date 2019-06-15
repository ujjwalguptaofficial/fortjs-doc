---
Title: "Get Started"
Keywords: "get started, fort-creator, install, fortjs, node"
---

The easiest way to use fortjs is by installing - [fort-creator](https://github.com/ujjwalguptaofficial/fort-creator). fort-creator is a cli package which helps you with fortjs development.

So, Install the fort-creator globally by runing command -

* Using npm - `npm i fort-creator -g`

* Using yarn - `yarn global add fort-creator`

<br>After you have successfully installed, run the below commands - 

* create new project -  `fort-creator new my-app`

* move to the project path - `cd my-app` 

* start dev server - `fort-creator start` 

<br>
Browse the url - <a href="http://localhost:4000" target="_blank">http://localhost:4000</a>

You will see something like below - 

<div style="text-align:center;">
<img src="/img/starter_screenshot.png" style="height:400px">
</div>


<br>
## Understanding project

<br>
Let's understand the project structures -

* Open the project folder in your favourite code editor. You will see many folders inside project root such as controllers, views, etc. Every folder is grouped by their use like controllers folder contains all controller & views folder contains all view.

* Open  folder controllers. Inside the controllers you will see a file name - default_controller, lets open it and observe the code. The file contains a class DefaultController - this is a controller class and it contains list of resources of particular type. Please check out [controller](/tutorial/controller) doc for knowing about controller.

* Inside the class DefaultController ->  you will see a method 'index' with decorator 'DefaultWorker' - this is the one which is rendering output to browser. The method is known as worker in fortjs because it does some work & return result. We have marked it as worker by using decorator 'DefaultWorker'. Please check out [worker](/tutorial/worker) doc for more info about worker.

* Let's observe the index method code: 
  ```
  try {
    const data= {
        title: 'FortJs'
    };
    const result = await viewResult('default/index.html', data);
    return result;
} catch (ex) {
    // handle exception and show user a good message.
    // save this ex in a file or db, so that you can know what's the issue and where
    const result = await textResult("Our server is busy right now. Please try later.");
    return result;
}
  ```

It creates a data object and passes that object into viewResult method. The viewResult method takes the view location and view data. The work of viewResult is to render the view and return response.

*  The view files are inside Views folder. Let's observe it -
open Views Folder -> open default folder - > open index.html. This is our view code - it contain simple html code with some mustache syntax. Please check [view](/tutorial/view) doc for more info.

<br><br>
# *Check out some other links
<br>
* [Creating REST API using Typescript](https://medium.com/fortjs/rest-api-using-typescript-94004d9ae5e6)

* [Creating REST API using es6](https://medium.com/fortjs/rest-api-in-nodejs-using-es6-227765440b2b)

<div class="top-border" style="margin: 25px 0;"></div>
Alternatively you can also clone/download starter template - 

* Typescript - <https://github.com/ujjwalguptaofficial/fortjs-typescript-starter>

* Javascript - <https://github.com/ujjwalguptaofficial/fortjs-javascript-starter>

<br>
After downloading the repo - open the console, move to project directory and run the commands -

* `npm install` - It will install all the dependency
* `npm run start` - It will run the app.