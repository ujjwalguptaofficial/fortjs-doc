<template><Layout title='Swagger Initialization' description='Swagger integration in fortjs' keywords='swagger, automatic generate, integrate, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/swagger/initiate.md'><p>FortJs provides a seperate library - <a href="https://github.com/ujjwalguptaofficial/fortjs-swagger">fortjs-swagger</a> for swagger integration. It provides automatic generation of swagger documents by taking documents related information from you.</p>
<h2 id="1installlibrary">1. Install library</h2>
<p><br>
<code>npm install fortjs-swagger</code></p>
<p><br></p>
<h2 id="2initiate">2. Initiate</h2>
<p><br>
initiate the swagger after the fortjs has started.</p>
<p>e.g -</p>
<pre><code>import * as Path from "path";
import { Fort } from "fortjs";
import { Swagger } from "fortjs-swagger";
import { routes } from "./routes";


Fort.routes = routes;

// allow swagger path to access using url with alias swagger
Fort.folders = [{
    alias: "swagger",
    path: Path.join(__dirname, "../swagger/")
}];

Fort.create().then(() =&gt; {    
    // initiating swagger 
    Swagger.create({
        appInfo: {
            title: "Swagger Test",
            description: "Swagger Test",
            version: "1.0"
        },
        servers: [{
            description: "local",
            url: "http://localhost:4000"
        }],
        // create swagger files at this path
        outputPath: swaggerPath,
        securitySchemes: {
            basicAuth: {
                type: "http",
                scheme: "basic"
            }
        }
    });
})
</code></pre>
<p>Will it generate docs now ?</p>
<p>No, This is only setup to initiate swagger. We need to tell fortjs what we are expecting exactly i.e - what will be the structure of http request &amp; structure of http response etc.</p>
<p>Consider the below controller</p>
<pre><code>import { Controller, textResult, DefaultWorker, jsonResult, Worker, Route, HTTP_STATUS_CODE, HTTP_METHOD, Guards, Shields } from 'fortjs';
import { UserService } from '../services/user_service';
import { ModelUserGuard } from '../guards/model_user_guard';
import { User } from '../models/user';
import { Response, Body, Param, Summary, Description, Security } from 'fortjs-swagger';


export class UserController extends Controller {

    @DefaultWorker()
    async getUsers() {
        const service = new UserService();
        return jsonResult(service.getUsers());
    }

    @Worker([HTTP_METHOD.Post])
    @Route("/")
    @Guards([ModelUserGuard])
    async addUser() {
        const user = this.data.user;
        const service = new UserService();
        const newUser = service.addUser(user);
        return jsonResult(newUser, HTTP_STATUS_CODE.Created);
    }

    @Worker([HTTP_METHOD.Put])
    @Guards([ModelUserGuard])
    @Route("/")
    async updateUser() {

        const user: User = this.data.user;
        const userUpdated = new UserService().updateUser(user);
        if (userUpdated === true) {
            return textResult("user updated");
        }
        else {
            return textResult("invalid user");
        }

    }

    @Worker([HTTP_METHOD.Get])
    @Route("/{id}")
    async getUser() {

        const userId = Number(this.param.id);
        const user = new UserService().getUser(userId);
        if (user == null) {
            return textResult("invalid id");
        }
        return jsonResult(user);

    }

    @Worker([HTTP_METHOD.Delete])
    @Route("/{id}")
    async removeUser() {

        const userId = Number(this.param.id);
        const service = new UserService();
        const user = service.getUser(userId);
        if (user != null) {
            service.removeUser(userId);
            return textResult("user deleted");
        }
        else {
            return textResult("invalid user");
        }
     }
 }
</code></pre>
<p>The above controller does operation for a user. And every end point exepects different request and return different response. We need to tell these info to swagger. </p>
<p>Let's document the  worker - "getUsers". </p>
<pre><code>import { Response, Summary, Description} from 'fortjs-swagger';

@Summary('get all users')
@Description('return all saved users') 
@Response(HTTP_STATUS_CODE.Ok, [User])
@DefaultWorker()
async getUsers() {
    const service = new UserService();
    return jsonResult(service.getUsers());
}
</code></pre>
<p>Here we have used three different decorators -</p>
<ul>
<li>Summary - used to define the summary of the end point</li>
<li>Description - used to describe the end point in details. This is not necessary most of the time.</li>
<li>Response -  used to define the response returned. In this example - we are telling swagger that : for http status "OK" the result will be array of model User. You can define multiple response in the same way i.e by using response decorator multiple time.</li>
</ul>
<p><br>In the similar way - we can define other workers.</p>
<h1 id="moreresources">* More resources -</h1>
<p><br></p>
<ul>
<li>Examples - https://github.com/ujjwalguptaofficial/fortjs-swagger/tree/master/examples</li>
</ul></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        