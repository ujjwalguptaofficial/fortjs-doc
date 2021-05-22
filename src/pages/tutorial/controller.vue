<template><Layout title='Controller' description='Description about controller in fortjs' keywords='controller, section, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/controller.md'><p>A Controller is a class which contains methods to be used as end points.  You can consider it like a section or area where different resource &amp; services are available.</p>
<p>e.g - A Fort may have sections - WeaponSection, LibrarySection, MeetingSection etc. </p>
<p>Now consider a real world application created for university may have sections - StudentSection, TeacherSection, LibrarySection etc.</p>
<p>A controller has following members - </p>
<ul>
<li>Request - <a href="/tutorial/http-request">request</a></li>
<li>Response - <a href="/tutorial/http-response">response</a></li>
<li>Cookie - <a href="/tutorial/cookie">cookie</a></li>
<li>Session - <a href="/tutorial/session">session</a></li>
<li>Query string data - <a href="/tutorial/query">query</a></li>
<li>Post data - <a href="/tutorial/body">body</a></li>
<li>Route parameter -  <a href="/tutorial/param">param</a></li>
<li>Data from other components - <a href="/tutorial/data">data</a></li>
</ul>
<p><br></p>
<h1 id="creatingcontroller">Creating controller</h1>
<p><br>
Controller is a class which extends the class "Controller" from fortjs.</p>
<h2 id="example">Example</h2>
<pre><code>import { Controller } from "fortjs";

export class UserController extends Controller {

}
</code></pre>
<p>In order to make this controller active, you need to assign it to routes of Fort. A controller is associated with a path.</p>
<pre><code>import { Fort } from "fortjs";
import { UserController } from "./controllers";


Fort.routes = [{
    controller: UserController,
    path: "/user"
}]
</code></pre>
<p>In the code we are adding our controller into routes array along  with a path. The path is used to associate the controller with a top level route.</p>
<p>e.g - Consider your website is abc.com , so when user hits the url - "abc.com/user" then the controller - 'UserController' will be called. </p>
<p>Note :- You must have <a href="/tutorial/worker">worker</a> inside the controller otherwise it won't work.</p></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        