<template><Layout title='Authentication' description='How to authenticate in nodejs using fortjs' keywords='authentication, example, tutorial, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/authentication.md'><p>There are multiple ways in which we can authenticate. But we will learn how to do session authentication based on userid/password combination.</p>
<p>So the concept is simple - a registered user has userid and password. They can access the system once they have entered valid credential. We need to design a login page through which user can login.</p>
<p>Let's consider that our app has a default controller and it can be accessed by anyone without login. Basically it contains a home page, a login page, a registration page etc.</p>
<pre><code>export class DefaultController extends Controller {
    @DefaultWorker()
    async default() {
        const result = await viewResult('controller:default,action:default');
        return result;
    }

    @Worker(HTTP_METHOD.Get)
    @Route("/login")
    async getloginForm() {
        const result = viewResult("login_form");
        return result;
    } 

    @Worker(HTTP_METHOD.Post)
    async login() {
        const emailId = this.body.emailId;
        const pwd = this.body.password;
        if (emailId != null &amp;&amp; pwd != null) {
            const userService = new UserService();
            const user = userService.getUserByEmail(emailId);
            if (user != null &amp;&amp; user.password === pwd) {
                this.session.set('userId', user.id);
                this.session.set('emailId', emailId);
                return textResult(`Authenticated`);
            }
            else {
               return textResult("Invalid credential");
            }
        }
        else {
            return textResult("Please make sure, you are sending emailId and password");
        }
    }
}
</code></pre>
<p>You can see - we have three worker.</p>
<ul>
<li><strong>default</strong> - is used to show the home page</li>
<li><strong>getloginForm</strong> - is used to show the login form when request is "GET"</li>
<li><strong>login</strong> - is  used to login into the sytem through POST request.This method retrieve emailId and password from body and check whether emailId/password is correct. And if correct - it creates the session. When session is created, framework creates a cookie and sent to browser. Framework tracks user by cookie. </li>
</ul>
<p><br>
Once the session has been set for a user. It can be accessed anywhere in the system (any controller/worker) using - <code>this.session.get('userId')</code>  or <code>this.session.isExist('userId')</code></p>
<p>In order to not allow unauthenticated user to access restricted method : we can check in every worker - If session is set or not and then take actions.</p>
<p>e.g - if session is present then fulfill the request otherwise redirect to login page or send a text response with http code 401.</p>
<p>We can take the above concept and divide into <a href="/tutorial/components">component</a>, so that we don't need to write in every method. We can use shield or guard - this completely depends upon requirement.</p>
<p>Let's consider - we want to restrict at controller level and for this we need to create a <a href="/tutorial/shield">shield</a> - </p>
<pre><code>import { Shield, textResult,  redirectResult } from "fortjs";
export class AuthenticationShield extends Shield {

    async protect() {

        const isExist = await this.session.isExist('userId');
        if (exist) { // user is authenticated so allow
            return null;
        } else { //user is not authenticated, so redirect to login page
            return redirectResult("/default/login");
        }
    }
}
</code></pre>
<p>Now we can add shield to any controllers where we need to restrict. Let's add this into user controller - </p>
<pre><code>import { Controller, Shields } from "fortjs";
import { AuthenticationShield } from "location where shield is defined";

@Shields(AuthenticationShield) 
export class UserController extends Controller {

}
</code></pre>
<p>Now UserController wont be initiated until AuthenticationShield allows i.e user is authenticated.</p>
<p>In the similar way - you can create a <a href="/tutorial/guard">guard</a> to restrict at worker level.</p>
<p>We have created example for you to understand in depth but will recommend you to create a demo by yourself. Here is example link - <a href="https://github.com/ujjwalguptaofficial/fortjs/tree/master/example/authentication">Authentiction Example</a></p></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        