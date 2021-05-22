<template><Layout title='Logger' description='How to use & customize logger in fortjs' keywords='logger, customization, fortjs, node' contentSrc='/home/warrior/projects/opensource/fortjs.docs/content/tutorial/logger.md'><p>Logging is a very necessary part of development. We log for debugging, saving exception, information etc.</p>
<p>That's why fortjs provides a default logger which is very simple &amp; logs everything in console. The advantage of provided logger is that you don't need to import it everywhere.</p>
<p>The <code>logger</code> is a class member of all components i.e controller, shield, wall, guard. Let's see an example - </p>
<pre><code>import { Controller, Worker } from "fortjs";

export class UserController extends Controller {

   @Worker()
   async getAllUsers(){
       const users = [{
           id:1,
           name:'ujjwal'
       }];
       // log users
       this.logger.debug('users are', users);
   }
}
</code></pre>
<p>But you might want to log everything in files or database, so want to customize the logger. Logger can be customized very easily by creating a class &amp; extending <code>Logger</code> </p>
<pre><code>import { Logger } from 'fortjs';

export class CustomLogger extends Logger {

    debug(message) {
        // do anything with message
    }

}
</code></pre>
<p>Now you need to tell framework to use your logger - </p>
<pre><code>import { Fort } from 'fortjs';

Fort.logger = CustomLogger;
</code></pre>
<p>Logger has following methods available - </p>
<ul>
<li>debug(…args)</li>
<li>info(…args)</li>
<li>error(…args)</li>
<li>log(…args)</li>
</ul>
<p><br>Since you are extending, you can create your own method too.</p>
<p><br>
For more help - You can see examples for <a href="https://www.npmjs.com/package/winston">winston</a> implementation : <a href="https://github.com/ujjwalguptaofficial/fortjs/tree/master/example/winston">https://github.com/ujjwalguptaofficial/fortjs/tree/master/example/winston</a></p></Layout></template>
        <script>import Layout from '/home/warrior/projects/opensource/fortjs.docs/layouts/tutorial.vue'
        export default {
            components:{Layout}
        };
        </script>
        