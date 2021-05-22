<template><Layout title='Guard' description='Description about guard component in fortjs' keywords='guard, component, types, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/guard.md'><p>Guard is security layer on top of Worker which means it is called after controller is initiated. It contols whether a request should be allowed to call the <strong>Worker</strong>.</p>
<p>The guard is useful for - </p>
<ul>
<li>Validation of data. </li>
<li>Authentication at Worker level.</li>
<li>Doing some task and passing it to worker. In this case - guard will be used as subordinate.</li>
</ul>
<p><br>
There can be multiple guards for a worker &amp; they are called in respective order, when a request wants to access the particular worker.</p>
<p>A guard has following member - </p>
<ul>
<li>Request - <a href="/tutorial/http-request">request</a></li>
<li>Response - <a href="/tutorial/http-response">response</a></li>
<li>Cookie - <a href="/tutorial/cookie">cookie</a></li>
<li>Session - <a href="/tutorial/session">session</a></li>
<li>Query string data - <a href="/tutorial/query">query</a></li>
<li>Post data - <a href="body">body</a></li>
<li>Route parameter -  <a href="/tutorial/param">param</a></li>
<li>Data from other components - <a href="/tutorial/data">data</a></li>
</ul>
<p><br></p>
<h1 id="creatingguard">Creating guard</h1>
<p><br>
Guard is a class which extends the class "Guard" from fortjs.</p>
<h2 id="example">Example</h2>
<pre><code>import { Guard, HttpResult, MIME_TYPE, HTTP_STATUS_CODE } from "fortjs";
import {isEmail, isLength, isIn} from "validator";

export class ModelUserGuard extends Guard {

    async check() {
        const user = { // extracted the info from request body
            name: this.body.name,
            gender: this.body.gender,
            address: this.body.address,
            emailId: this.body.emailId
        }
        const errMsg = this.validate(user);
        if (errMsg == null) {
            // pass user to worker method, so that they dont need to parse again
            this.data.user = user;
            // returning null means - this guard allows request to pass
            return null;
        } else {
            return textResult(errMsg, HTTP_STATUS_CODE.BadRequest);
        }
    }

    validate(user) {
        let errMessage;
        if (user.name == null || !isLength(user.name, 5)) {
            errMessage = "name should be minimum 5 characters"
        } else if (user.password == null || !isLength(user.password, 5)) {
            errMessage = "password should be minimum 5 characters";
        } else if (user.gender == null || !isIn(user.gender, ["male", "female"])) {
            errMessage = "gender should be either male or female";
        } else if (user.gender == null || !isEmail(user.emailId)) {
            errMessage = "email not valid";
        } else if (user.address == null || !isLength(user.address, 10, 100)) {
            errMessage = "address length should be between 10 &amp; 100";
        }
        return errMessage;
    }
}
</code></pre>
<p>Now you have defined the guard but in order to use this guard, you need to assign it to some worker.</p>
<pre><code>import { Controller, Guards } from "fortjs";
import { ModelUserGuard } from "location where guard is defined";


export class UserController extends Controller {

    @Guards(ModelUserGuard)
    addUser(){

    }

}
</code></pre>
<p><strong>Note:-</strong> A guard can be assigned to multiple worker.</p></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        