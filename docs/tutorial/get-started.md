---
Title: "Get Started"
---

FortJs is built using typescript and uses es6 pattern. That's why we need webpack or babel to transpile es6 codes to nodejs compatible code.

But dont worry about all the configuration, we we have created different starter template for you. You just need to download/clone the repo based on your preferred language and start writing your code.

* Typescript - <https://github.com/ujjwalguptaofficial/fortjs-typescript-starter>

* Javascript - <https://github.com/ujjwalguptaofficial/fortjs-javascript-starter>

<br>
After downloading the repo - open the console, move to project directory and run the commands -
* `npm install` - It will install all the dependency
* `npm run start` - It will run the app.

<br>
Browser the url mentioned in the console (http://localhost:4000/)

You will see something like below - 

<div style="text-align:center;">
<img src="/img/starter_screenshot.png" style="height:400px">
</div>


<br>
## Understanding project

<br>
Now you must be thinking - where is the code which is rendering output to browser ? Let's see -

* Open  folder controllers. Inside the controllers you will see a file name - default_controller, lets open it and observe the code. The file contains a class DefaultController - this is a controller class and it contains list of resources of particular type. Please check out [controller](/tutorial/controller) doc for knowing about controller.

* Inside the class DefaultController ->  you will see a method 'index' - this is the one which is rendering output to browser. On top of 'index' method we are using decorator 'defaultWorker'. It tells fortjs to make this method visible for http request. Please check out [worker](/tutorial/worker) doc for more info about worker.

* Inside the method, we are using `viewResult` to return a view with location "default/index.html". But where is the view code ?

*  Under Views folder - > open default folder - > open index.html. This  is our view code. Please check [view](/tutorial/view) doc for more info.

<br><br>
# *Check out some other links
<br>
* [Creating REST API using Typescript](https://medium.com/fortjs/rest-api-using-typescript-94004d9ae5e6)

* [Creating REST API using es6](https://medium.com/fortjs/rest-api-in-nodejs-using-es6-227765440b2b)