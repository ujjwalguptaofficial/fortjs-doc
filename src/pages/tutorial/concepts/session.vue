<template><Layout title='Session' description='Using session in fortjs' keywords='session, uses, example, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/concepts/session.md'><p>Session is a State Management Technique. It enables you to store and retrieve values for a user as the user navigates pages in a Web application.</p>
<p>Let's see how we can use session - </p>
<pre><code>import { Controller, DefaultWorker, textResult, viewResult } from "fortjs";

export class DefaultController extends Controller {

    @DefaultWorker()
    async default() {
        // check if session exist
        const isSessionExist = await this.session.isExist('userId');

        // add value to session
        await this.session.set('userId', 45);

        // get session value
        const userIdFromSession = await this.session.get('userId');

        // remove session
        await this.session.remove('session_name');

        // set multiple session at a time
        await this.session.setMany({
            'user_id' : 1,
            'name' : 'ujjwal gupta'
        })

        return textResult('Welcome to FortJs');
    }
}
</code></pre>
<p>By default fortjs stores all your session data in memory which means data will be lost when nodejs process is stopped or restarted. </p>
<p>If you want to preserve your session values, then you need to store your value in a database or use any tools or service. You can customize the session store by creating a <a href="/tutorial/session-provider">session provider</a>.</p>
<p>You should take a look at our <a href="https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/authentication">authentication</a> example. In this example - a login page is shown to user and when user logs in - session is created. Login method is present in "default controller".</p></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        